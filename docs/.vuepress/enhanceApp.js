// .vuepress/enhanceApp.js

// ⚠️ 注意：下面的代码需要确保 Highlight.js 已经在 head 中被成功加载，
// 否则 hljs.highlightAll() 会报错。
// 我们假设你已经保留了 head 中对 highlight.min.js 的引用。

export default ({ Vue, options, router, isServer }) => {
  
  // 使页面中可以使用Vue构造函数 (保留你原有的兼容性代码)
  // window.Vue = vue 
  
  if (!isServer) {
    // ===================================================
    // 1. 友链打乱逻辑 (针对 /friends/ 页面)
    // ===================================================
    function shuffleFriendLinks() {
      const container = document.querySelector('.card-list'); 
      
      if (!container) {
        return;
      }

      const links = Array.from(container.querySelectorAll('.card-item.row-2'));
      
      if (links.length === 0) {
        return;
      }
      
      // Fisher-Yates 打乱算法
      for (let i = links.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [links[i], links[j]] = [links[j], links[i]]; // 交换元素
      }
      
      // 重新插入
      links.forEach(link => {
        container.appendChild(link);
      });
      
      console.log(`友链顺序已在 /friends/ 页面上成功打乱 (${links.length} 条)。`);
    }
    
    // ===================================================
    // 2. 代码高亮重跑逻辑 (针对所有有代码块的页面)
    // ===================================================
    function highlightCodeBlocks() {
        // 检查全局 hljs 对象是否存在 (确保 highlight.min.js 已加载)
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
            console.log("代码块已重新高亮。");
        } else {
            console.warn("Highlight.js (hljs) 未加载，无法执行代码高亮。");
        }
    }
    
    // ===================================================
    // 3. 路由钩子集成
    // ===================================================
    
    router.afterEach((to, from) => {
      
      // A. 友链打乱：仅在进入 /friends/ 页面时执行
      if (to.path === '/friends/') {
        // 稍微延迟，确保 .card-list 元素被 Vue 渲染完成
        setTimeout(shuffleFriendLinks, 50); 
      }
      
      // B. 代码高亮：在所有页面切换后都尝试重新高亮（单页应用特性）
      highlightCodeBlocks();
    });
    
    // 首次加载时执行一次 (覆盖硬刷新情况)
    if (router.app.$route.path === '/friends/') {
        setTimeout(shuffleFriendLinks, 50);
    }
    highlightCodeBlocks();
  }
};