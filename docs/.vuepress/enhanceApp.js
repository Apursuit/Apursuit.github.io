// .vuepress/enhanceApp.js

export default ({ Vue, options, router, isServer }) => {
  
  if (!isServer) {
    
    // ===================================================
    // 1. 友链打乱逻辑 (针对 /friends/ 页面)
    // ===================================================
    function shuffleFriendLinks() {
      const container = document.querySelector('.card-list'); 
      
      if (!container) {
        return;
      }

      // 使用主题生成的 '.card-item.row-2'
      const links = Array.from(container.querySelectorAll('.card-item.row-2'));
      
      if (links.length === 0) {
        return;
      }
      
      // Fisher-Yates 打乱算法
      for (let i = links.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [links[i], links[j]] = [links[j], links[i]]; 
      }
      
      // 重新插入
      links.forEach(link => {
        container.appendChild(link);
      });
      
      console.log(`友链顺序已在 /friends/ 页面上成功打乱 (${links.length} 条)。`);
    }
    
    // ===================================================
    // 2. 代码高亮重跑逻辑
    // ===================================================
    function highlightCodeBlocks() {
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        }
    }
    
    // ===================================================
    // 3. 路由钩子集成
    // ===================================================
    
    // 使用 requestAnimationFrame 来等待浏览器完成渲染周期，比 setTimeout 更可靠
    const waitForRenderAndExecute = (callback) => {
        if (typeof window.requestAnimationFrame === 'function') {
            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(callback); // 延迟两帧以确保 DOM 更新完成
            });
        } else {
            setTimeout(callback, 100); // 浏览器不支持时降级到 setTimeout
        }
    };
    
    router.afterEach((to, from) => {
      
      // A. 友链打乱
      if (to.path === '/friends/') {
        waitForRenderAndExecute(shuffleFriendLinks);
      }
      
      // B. 代码高亮 (在所有页面切换后都尝试)
      waitForRenderAndExecute(highlightCodeBlocks);
    });
    
    // 首次加载时的处理（确保在首次加载时也执行）
    if (router.app.$route.path === '/friends/') {
        waitForRenderAndExecute(shuffleFriendLinks);
    }
    waitForRenderAndExecute(highlightCodeBlocks);
  }
};