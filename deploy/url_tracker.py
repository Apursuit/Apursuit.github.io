import os
import sys
import json
import requests
from datetime import datetime

# --- 配置 ---
# 网站域名
BASE_URL = "https://the0n3.top" 
# IndexNow 接口密钥
KEY = "1c0a060603d047edbfe1b4d21afa63ca"
# IndexNow Key 文件位置 (用于验证)
KEY_LOCATION = f"{BASE_URL.rstrip('/')}/{KEY}.txt"
# IndexNow 提交 API 端点
INDEXNOW_API = "https://api.indexnow.org/IndexNow"

# 构建目录 (相对于工作目录，新状态文件将写入此目录以便部署)
DIST_DIR = "docs/.vuepress/dist"

# 线上 URL (用于读取上一次的状态和日志)
REMOTE_STATE_URL = f"{BASE_URL.rstrip('/')}/indexed_urls_state.txt"
REMOTE_LOG_URL = f"{BASE_URL.rstrip('/')}/scan.log"

# 本地文件路径 (新的状态文件和日志文件将写入这里，以便被 deploy.sh 推送到 gh-pages)
STATE_FILE_PATH = os.path.join(DIST_DIR, "indexed_urls_state.txt")
LOG_FILE_PATH = os.path.join(DIST_DIR, "scan.log")


# --- 工具函数 ---

def log_message(message, to_console=True):
    """将消息写入日志文件，并可选择打印到控制台。"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] {message}\n"
    
    # 写入日志文件 (确保目录存在)
    try:
        os.makedirs(os.path.dirname(LOG_FILE_PATH), exist_ok=True)
        with open(LOG_FILE_PATH, 'a', encoding='utf-8') as f:
            f.write(log_entry)
    except Exception as e:
        if to_console:
            print(f"警告: 无法写入日志文件 {LOG_FILE_PATH}: {e}")

    # 打印到控制台
    if to_console:
        sys.stdout.write(log_entry)
        sys.stdout.flush()

def normalize_paths_to_urls(path_list, base_url):
    """
    将相对路径列表转换为 IndexNow 要求的完整 URL 列表。
    """
    url_list = []
    for relative_path in path_list:
        
        # 1. URL 结构处理：移除 index.html 并处理根路径
        if relative_path.endswith("/index.html"):
            url_path = relative_path.replace("index.html", "")
        elif relative_path == "index.html":
            url_path = ""
        else:
            url_path = relative_path

        # 2. 构建完整的 URL
        full_url = f"{base_url.rstrip('/')}/{url_path}"
        url_list.append(full_url)
    
    return url_list

# --- IndexNow 提交函数 (保持不变) ---

def submit_to_indexnow(paths_to_submit, base_url, key, key_location, api_endpoint):
    """
    将新增/修改的 URL 列表提交给 IndexNow API。
    """
    if not paths_to_submit:
        log_message("没有新增或修改的路径，跳过 IndexNow 提交。")
        return

    # 1. 路径转换为 URL
    urls = normalize_paths_to_urls(paths_to_submit, base_url)
    log_message(f"准备提交 {len(urls)} 条新增/修改的 URL 到 IndexNow。")

    headers = {'Content-Type': 'application/json; charset=utf-8'}
    
    # 构造提交的 JSON 数据体
    data = {
        "host": base_url.split("://")[-1].split("/")[0], # 提取域名 (the0n3.top)
        "key": key,
        "keyLocation": key_location,
        "urlList": urls
    }

    try:
        # 使用 requests.post 发送请求
        response = requests.post(api_endpoint, headers=headers, data=json.dumps(data), timeout=10)
        
        # IndexNow 成功响应状态码是 200 (OK) 或 202 (Accepted)
        if response.status_code in [200, 202]:
            log_message("✅ URL 列表成功提交到 IndexNow。", to_console=True)
        else:
            log_message(f"❌ IndexNow 提交失败，状态码：{response.status_code}", to_console=True)
            log_message(f"响应内容：{response.text}", to_console=True)
            
    except requests.exceptions.RequestException as e:
        log_message(f"❌ 提交到 IndexNow 时发生网络错误: {e}", to_console=True)
        
# --- 状态加载和更新函数 ---

def load_previous_paths(remote_state_url):
    """
    尝试从线上 URL 下载历史状态文件。如果失败，则返回空集 (set())。
    """
    log_message(f"尝试从线上 URL 获取历史状态: {remote_state_url}")
    try:
        # 使用较短的超时时间，避免长时间阻塞
        response = requests.get(remote_state_url, timeout=5) 
        
        if response.status_code == 200:
            log_message("✅ 成功获取上一次的 URL 状态文件。")
            # 按行分割，去除空白行和行首尾空格
            previous_paths = {line.strip() for line in response.text.splitlines() if line.strip()}
            log_message(f"已加载 {len(previous_paths)} 条历史路径。")
            return previous_paths
        else:
            # 状态码非 200 (例如 404, 500)
            log_message(f"警告: 无法从线上获取状态文件 (HTTP {response.status_code})。将执行全量提交。")
            
    except requests.exceptions.RequestException as e:
        # 网络请求失败 (例如超时、DNS 错误)
        log_message(f"警告: 访问线上状态文件失败 ({e})。将执行全量提交。")

    log_message("假定为首次运行或状态丢失（全量提交）。")
    return set()

def update_state_file(current_paths, state_file_path):
    """
    将当前路径写入本地文件，以便下次部署时上传到线上。
    """
    try:
        # 确保目录存在
        os.makedirs(os.path.dirname(state_file_path), exist_ok=True)
        sorted_paths = sorted(list(current_paths))
        with open(state_file_path, 'w', encoding='utf-8') as f:
            for path in sorted_paths:
                f.write(f"{path}\n")
        log_message(f"成功更新本地状态文件 {state_file_path}，共写入 {len(sorted_paths)} 条路径。")
    except Exception as e:
        log_message(f"错误: 写入状态文件 {state_file_path} 失败: {e}", to_console=True)


# --- 辅助扫描函数 (保持不变) ---

def get_current_html_paths(dist_path):
    log_message(f"开始扫描构建目录: {dist_path}")
    if not os.path.isdir(dist_path):
        log_message(f"错误: 构建目录 {dist_path} 不存在。请确认是否已执行构建步骤。", to_console=True)
        return set()
    current_paths = set()
    for root, _, files in os.walk(dist_path):
        for file in files:
            if file.endswith(".html"):
                relative_path = os.path.relpath(os.path.join(root, file), dist_path)
                current_paths.add(relative_path.replace(os.path.sep, '/'))
    log_message(f"扫描完成，找到 {len(current_paths)} 个 HTML 文件路径。")
    return current_paths

# --- 主逻辑 ---

def main():
    log_message("--- IndexNow URL 变更追踪与提交脚本启动 ---", to_console=True)
    
    # 1. 加载和扫描
    previous_paths = load_previous_paths(REMOTE_STATE_URL) # 从线上获取历史状态
    current_paths = get_current_html_paths(DIST_DIR)
    
    # 2. 计算差异
    added_paths = current_paths.difference(previous_paths)
    deleted_paths = previous_paths.difference(current_paths)
    
    # 3. 提交新增/修改的 URL
    log_message("\n--- 执行 IndexNow 提交 ---", to_console=True)
    
    # 如果线上状态获取失败，则 previous_paths 为空，added_paths 实际上就是所有 current_paths，实现全量提交
    if not previous_paths and current_paths:
        log_message("❗ 由于无法获取历史状态，将执行全量 IndexNow 提交。", to_console=True)

    submit_to_indexnow(added_paths, BASE_URL, KEY, KEY_LOCATION, INDEXNOW_API)
    
    # 4. 更新状态文件
    update_state_file(current_paths, STATE_FILE_PATH)
    
    # 5. 打印报告
    log_message("\n--- URL 变更分析报告 ---", to_console=True)
    log_message(f"当前找到的 HTML 文件总数: {len(current_paths)}", to_console=True)
    log_message(f"上次追踪的文件总数 (从线上获取): {len(previous_paths)}", to_console=True)
    
    log_message("\n[本次提交 IndexNow 路径]:", to_console=True)
    if added_paths:
        for path in sorted(list(added_paths)):
            log_message(f"提交: {path}", to_console=True)
    else:
        log_message("本次未发现新增或修改的路径，跳过提交。", to_console=True)

    log_message("\n[已删除路径]:", to_console=True)
    if deleted_paths:
        for path in sorted(list(deleted_paths)):
            # 暂时不提交删除请求，只做记录
            log_message(f"已删除: {path}", to_console=True) 
    else:
        log_message("未发现已删除的路径。", to_console=True)
        
    log_message("--- 脚本运行结束 ---\n", to_console=True)


if __name__ == "__main__":
    try:
        import requests
    except ImportError:
        log_message("错误: 缺少 'requests' 库。请在 Workflow 中使用 'pip install requests' 安装。", to_console=True)
        sys.exit(1)
        
    main()