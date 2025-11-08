/**
 * 友链打乱函数
 */
function shuffleFriendLinks() {
  const container = document.querySelector('.card-list'); // 假设这是友链列表的父容器
  
  if (!container) {
    console.warn("未找到友链容器 '.card-list'，无法打乱顺序。");
    return;
  }

  // 1. 获取所有友链项
  const links = Array.from(container.querySelectorAll('.card-item.row-2'));
  
  if (links.length === 0) {
    console.log("未找到任何友链项。");
    return;
  }
  
  // 2. 使用 Fisher-Yates (Knuth) 算法打乱数组
  for (let i = links.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [links[i], links[j]] = [links[j], links[i]]; // 交换元素
  }
  
  // 3. 将打乱后的元素重新插入到容器中
  links.forEach(link => {
    container.appendChild(link);
  });
  
  console.log(`友链顺序已在 /friends/ 页面上成功打乱 (${links.length} 条)。`);
}

// 检查当前路由路径是否为 /friends/
function checkRouteAndShuffle() {
  if (window.location.pathname === '/friends/') {
    setTimeout(shuffleFriendLinks, 100); 
  }
}

// 监听页面加载
window.addEventListener('load', checkRouteAndShuffle);