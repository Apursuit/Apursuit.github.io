export default ({ router }) => {
  if (typeof window === 'undefined') return

  const ensureTag = (tag, attrs) => {
    const key = Object.keys(attrs)[0]
    const selector = `${tag}[${key}="${attrs[key]}"]`
    if (document.head.querySelector(selector)) return

    const el = document.createElement(tag)
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    document.head.appendChild(el)
  }

  const apply = (to) => {
    if (to.path === '/pages/better-shell/') {
      ensureTag('link', { rel: 'stylesheet', href: '/static/css/asciinema-player.css' })
      ensureTag('script', { src: '/static/js/asciinema-player.min.js', defer: 'true' })
      ensureTag('script', { src: '/medias/better-shell/demo.js', defer: 'true' })
    }
  }

  router.afterEach((to) => apply(to))
  apply(router.currentRoute)
}