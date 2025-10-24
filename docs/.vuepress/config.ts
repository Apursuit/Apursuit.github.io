/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

const DOMAIN_NAME = 'the0n3.top' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "the0n3",
      description: 'CTF学习过程记录、随写、分享',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
// 导航配置
    nav: [
      { text: '首页', link: '/' },
      { text: '归档',link: '/archives/' },
      { text: '友链', link: '/friends/'},
      { text: '收藏', link: '/pages/c52ab0/'},
      { text: '在线工具',
         link: '#',
//  下拉菜单
            items: [
                { text: 'windows杀软在线对比', link: 'https://the0n3.top/tasklist/',target: '_blank',},
                { text: '反弹shell生成', link: 'https://the0n3.top/shell/',target: '_blank',},
                { text: '工具清单', link: 'https://the0n3.top/nav/',target: '_blank',},
          ],
      },

      // { text: '歌单',link: 'https://the0n3.top/music/',target: '_blank',},
      { text: '开往', link: 'https://www.travellings.cn/go.html',},
      // { text: 'TODO',link: '/daily/'},
      // { text: '思考', link: '/thinking/'},
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'Apursuit/Apursuit.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '最后一次更新于', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    category: false, // 是否打开分类功能，默认true
    tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // bodyBgImg: [
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    defaultMode: 'dark',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'the0n3', // 必需
      link: 'https://github.com/Apursuit', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    // 觉不美观，遂弃
    // blogger: {
    //   avatar: 'https://the0n3.top/medias/friends/syz.png',
    //   name: 'Cola',
    //   slogan: 'ctf web 摸鱼 甩锅 缝合怪',
    // },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:apursuit27@gmail.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Apursuit',
        },
        // {
        //   iconClass: 'icon-erji',
        //   title: '听音乐',
        //   link: 'https://music.163.com/#/playlist?id=755597173',
        // },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2024, // 博客创建年份
      copyrightInfo:
        '', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'the0n3',
        link: 'https://the0n3.top'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    // 基本 meta 标签
    ['meta', { name: 'keywords', content: 'ctf,web,php,sql注入,xss,文件上传,文件包含,反序列化,代码审计,ssti模板注入,命令执行,框架复现,漏洞复现,渗透测试,内网,域,提权,网络安全,安全工具,漏洞分析,安全博客' }],
    ['meta', { name: 'description', content: 'CTF学习、Web安全技术分享、渗透测试技巧、网络安全工具使用指南' }],
    ['meta', { name: 'author', content: 'the0n3' }],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: 'google-site-verification', content: '2rTU4TJf9FGp-0dfoTNgDPqEaVmD1mMxR_aabNaQXnQ' }], // Google验证
    [
      'script',
      {
        src: '//unpkg.com/valine/dist/Valine.min.js',
      }
    ],

    // 引入新字体
    // ['link', { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap', rel: 'stylesheet' }],

    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], 
  ],


  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          // {
          //   title: '通过百度搜索本站的',
          //   frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
          // },
          // {
          //   title: '在Bing中搜索',
          //   frontUrl: 'https://cn.bing.com/search?q=',
          // },
          // {
          //   title: '在Google中搜索',
          //   frontUrl: 'https://www.google.com/search?q=', // 搜索链接的前面部分
          //   behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          // },
          // {
          //   title: '在Runoob中搜索',
          //   frontUrl: 'https://www.runoob.com/?s=',
          // },
          // {
          //   title: '在Vue API中搜索',
          //   frontUrl: 'https://cn.vuejs.org/v2/api/#',
          // },
        ],
      }
    ],

    [
       // 代码块复制按钮
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
        'vuepress-plugin-comment',
        {
          choosen: 'valine',
          // options选项中的所有参数，会传给Valine的配置
          options: {
            el: '#valine-vuepress-comment',
            appId: '8sJ6G7Cx71Y6wk8uc4Oa8gPO-MdYXbMMI',
            appKey: '8YrCdIYhCyYl24kayTnsl18U',
            // 评论框占位内容
            placeholder: "给读者打个招呼，Ciallo～(∠・ω< )⌒★",
            // 评论者头像
            avatar: "mp",
            // 是否启用昵称框自动获取QQ昵称和QQ头像
            enableQQ: true,
            // 记录用户ip
            recordIP: true,
            // 访问量统计
            visitor: true,
            path: '<%- frontmatter.commentid || frontmatter.permalink %>',
            // 设置Bilibili表情包地址
            serverURLs: 'https://8sj6g7cx.api.lncldglobal.com',
            emojiCDN: '//i0.hdslb.com/bfs/emote/',
            // 表情title和图片映射
            emojiMaps: {
              "12周年":"https://i0.hdslb.com/bfs/emote/8a80589462a38e04716ebcbc6c4764d9d25b1dd0.png",
              "藏狐":"https://i0.hdslb.com/bfs/emote/ba0937ef6f3ccca85e2e0047e6263f3b4da37201.png",
              "doge":"https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png",
              "doge-春节":"https://i0.hdslb.com/bfs/emote/feb9abf68df628803ff69a244e744470c2b7e136.png",
              "doge-圣诞":"https://i0.hdslb.com/bfs/emote/1afb5eb96846e0876071eeecb47be95dbf55f08d.png",
              "doge-愚人节":"https://i0.hdslb.com/bfs/emote/8ab62b33061d20bc27beec798a2f73c639e8bb6e.png",
              "微笑":"https://i0.hdslb.com/bfs/emote/685612eadc33f6bc233776c6241813385844f182.png",
              "微笑-春节":"https://i0.hdslb.com/bfs/emote/f32e5d367c81fbb88b54d7fe46366de04fe4f38f.png",
              "微笑-愚人节":"https://i0.hdslb.com/bfs/emote/774d19d2416eb5b30ac66b02ac580b1b0ca92a80.png",
              "OK":"https://i0.hdslb.com/bfs/emote/4683fd9ffc925fa6423110979d7dcac5eda297f4.png",
              "OK-春节":"https://i0.hdslb.com/bfs/emote/ad17fceba45996104c8b8e2e3f4efd7e2f588368.png",
              "OK-圣诞":"https://i0.hdslb.com/bfs/emote/75d1c99cce001d6d103a8fd406616be9f51621ab.png",
              "OK-愚人节":"https://i0.hdslb.com/bfs/emote/76cc9da7f4a054cb02aad900f0ca3d3fda9c9667.png",
              "星星眼":"https://i0.hdslb.com/bfs/emote/63c9d1a31c0da745b61cdb35e0ecb28635675db2.png",
              "星星眼-春节":"https://i0.hdslb.com/bfs/emote/f6f01068ac7f6548779b0e16daa61974f9299b17.png",
              "星星眼-圣诞":"https://i0.hdslb.com/bfs/emote/195641c30c55f34f9cd82c5e5c32d66a425c7723.png",
              "星星眼-愚人节":"https://i0.hdslb.com/bfs/emote/270e85c95c1ad919848b415601ed3a879bd08127.png",
              "妙啊":"https://i0.hdslb.com/bfs/emote/b4cb77159d58614a9b787b91b1cd22a81f383535.png",
              "妙啊-春节":"https://i0.hdslb.com/bfs/emote/692f196da6a623a1634ea305618d37709c2c87f0.png",
              "妙啊-圣诞":"https://i0.hdslb.com/bfs/emote/1cdb10e4b6c6743a1ec96f1579e3ef3045a8f225.png",
              "妙啊-愚人节":"https://i0.hdslb.com/bfs/emote/5675a5d2f3e7fb6b29db0ca8c7703237a18c4271.png",
              "辣眼睛":"https://i0.hdslb.com/bfs/emote/35d62c496d1e4ea9e091243fa812866f5fecc101.png",
              "辣眼睛-春节":"https://i0.hdslb.com/bfs/emote/1ad7c9d351bd64332cc8520c165ee0b32a6e82fa.png",
              "辣眼睛-圣诞":"https://i0.hdslb.com/bfs/emote/8080adfe5acdfd0b6b09bd91db24ea7334ac7b44.png",
              "辣眼睛-愚人节":"https://i0.hdslb.com/bfs/emote/65ed9509df4d509a1cdf22e75a6d3b708f4e9afb.png",
              "吃瓜":"https://i0.hdslb.com/bfs/emote/4191ce3c44c2b3df8fd97c33f85d3ab15f4f3c84.png",
              "吃瓜-春节":"https://i0.hdslb.com/bfs/emote/fbd58fe2465d84d32f37800af0fe6f25711ef397.png",
              "吃瓜-圣诞":"https://i0.hdslb.com/bfs/emote/aa6a3022e47b441c7f84d02cacc063a728a561e0.png",
              "吃瓜-愚人节":"https://i0.hdslb.com/bfs/emote/f05344578512ef18878de01d188657fbf81d31c8.png",
              "滑稽":"https://i0.hdslb.com/bfs/emote/d15121545a99ac46774f1f4465b895fe2d1411c3.png",
              "滑稽-春节":"https://i0.hdslb.com/bfs/emote/e56b466b43dd6930756d5caf4c22bef4f963dd35.png",
              "滑稽-圣诞":"https://i0.hdslb.com/bfs/emote/5874276ea716d0e9797f827dcfca4332acf8f0de.png",
              "滑稽-愚人节":"https://i0.hdslb.com/bfs/emote/e8c1b263949c2617e6395b190d185b2f8cdf0747.png",
              "呲牙":"https://i0.hdslb.com/bfs/emote/b5a5898491944a4268360f2e7a84623149672eb6.png",
              "呲牙-春节":"https://i0.hdslb.com/bfs/emote/6ae3b1008d2fee7e15b5eb447b2ccff18e664b88.png",
              "呲牙-圣诞":"https://i0.hdslb.com/bfs/emote/ae4395c1e29e9a2db0c9ccc4c0db05c414816e68.png",
              "呲牙-愚人节":"https://i0.hdslb.com/bfs/emote/299e5867bb79f42d8553023909f42e89707cb500.png",
              "打call":"https://i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png",
              "打call-春节":"https://i0.hdslb.com/bfs/emote/bf990016e43b7111cab4566dea194ba837a1a88f.png",
              "打call-圣诞":"https://i0.hdslb.com/bfs/emote/2b04dd2d0e55d978ee485e1f7f3c5e355493ab78.png",
              "打call-愚人节":"https://i0.hdslb.com/bfs/emote/49240d8643d7702519fc4cc468e0003a7623c0e3.png",
              "歪嘴":"https://i0.hdslb.com/bfs/emote/4384050fbab0586259acdd170b510fe262f08a17.png",
              "歪嘴-愚人节":"https://i0.hdslb.com/bfs/emote/6cc4c091d3f2cc540f64d8f10ffe516fd2f4ea2b.png",
              "调皮":"https://i0.hdslb.com/bfs/emote/8290b7308325e3179d2154327c85640af1528617.png",
              "调皮-愚人节":"https://i0.hdslb.com/bfs/emote/a09481ceb0644f799d94805446fd52dce775b022.png",
              "嗑瓜子":"https://i0.hdslb.com/bfs/emote/28a91da1685d90124cfeead74622e1ebb417c0eb.png",
              "嗑瓜子-春节":"https://i0.hdslb.com/bfs/emote/d2f9910f2d6e52ead3bf1ee29754cd1176f5fc2e.png",
              "笑哭":"https://i0.hdslb.com/bfs/emote/c3043ba94babf824dea03ce500d0e73763bf4f40.png",
              "笑哭-春节":"https://i0.hdslb.com/bfs/emote/29ce59fb7f14351d195609ef297d30e336bdb240.png",
              "脱单doge":"https://i0.hdslb.com/bfs/emote/bf7e00ecab02171f8461ee8cf439c73db9797748.png",
              "给心心":"https://i0.hdslb.com/bfs/emote/1597302b98827463f5b75c7cac1f29ea6ce572c4.png",
              "嘟嘟":"https://i0.hdslb.com/bfs/emote/abd7404537d8162720ccbba9e0a8cdf75547e07a.png",
              "喜欢":"https://i0.hdslb.com/bfs/emote/8a10a4d73a89f665feff3d46ca56e83dc68f9eb8.png",
              "酸了":"https://i0.hdslb.com/bfs/emote/92b1c8cbceea3ae0e8e32253ea414783e8ba7806.png",
              "哦呼":"https://i0.hdslb.com/bfs/emote/362bded07ea5434886271d23fa25f5d85d8af06c.png",
              "嫌弃":"https://i0.hdslb.com/bfs/emote/de4c0783aaa60ec03de0a2b90858927bfad7154b.png",
              "大哭":"https://i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png",
              "害羞":"https://i0.hdslb.com/bfs/emote/9d2ec4e1fbd6cb1b4d12d2bbbdd124ccb83ddfda.png",
              "疑惑":"https://i0.hdslb.com/bfs/emote/b7840db4b1f9f4726b7cb23c0972720c1698d661.png",
              "喜极而泣":"https://i0.hdslb.com/bfs/emote/485a7e0c01c2d70707daae53bee4a9e2e31ef1ed.png",
              "奸笑":"https://i0.hdslb.com/bfs/emote/bb84906573472f0a84cebad1e9000eb6164a6f5a.png",
              "笑":"https://i0.hdslb.com/bfs/emote/81edf17314cea3b48674312b4364df44d5c01f17.png",
              "偷笑":"https://i0.hdslb.com/bfs/emote/6c49d226e76c42cd8002abc47b3112bc5a92f66a.png",
              "惊讶":"https://i0.hdslb.com/bfs/emote/f8e9a59cad52ae1a19622805696a35f0a0d853f3.png",
              "捂脸":"https://i0.hdslb.com/bfs/emote/6921bb43f0c634870b92f4a8ad41dada94a5296d.png",
              "捂脸-圣诞":"https://i0.hdslb.com/bfs/emote/9af59557383770c398daac81583e6c4d27d83da7.png",
              "阴险":"https://i0.hdslb.com/bfs/emote/ba8d5f8e7d136d59aab52c40fd3b8a43419eb03c.png",
              "囧":"https://i0.hdslb.com/bfs/emote/12e41d357a9807cc80ef1e1ed258127fcc791424.png",
              "呆":"https://i0.hdslb.com/bfs/emote/33ad6000d9f9f168a0976bc60937786f239e5d8c.png",
              "抠鼻":"https://i0.hdslb.com/bfs/emote/cb89184c97e3f6d50acfd7961c313ce50360d70f.png",
              "大笑":"https://i0.hdslb.com/bfs/emote/ca94ad1c7e6dac895eb5b33b7836b634c614d1c0.png",
              "惊喜":"https://i0.hdslb.com/bfs/emote/0afecaf3a3499479af946f29749e1a6c285b6f65.png",
              "无语":"https://i0.hdslb.com/bfs/emote/44667b7d9349957e903b1b62cb91fb9b13720f04.png",
              "点赞":"https://i0.hdslb.com/bfs/emote/1a67265993913f4c35d15a6028a30724e83e7d35.png",
              "鼓掌":"https://i0.hdslb.com/bfs/emote/895d1fc616b4b6c830cf96012880818c0e1de00d.png",
              "尴尬":"https://i0.hdslb.com/bfs/emote/cb321684ed5ce6eacdc2699092ab8fe7679e4fda.png",
              "灵魂出窍":"https://i0.hdslb.com/bfs/emote/43d3db7d97343c01b47e22cfabeca84b4251f35a.png",
              "委屈":"https://i0.hdslb.com/bfs/emote/d2f26cbdd6c96960320af03f5514c5b524990840.png",
              "傲娇":"https://i0.hdslb.com/bfs/emote/010540d0f61220a0db4922e4a679a1d8eca94f4e.png",
              "疼":"https://i0.hdslb.com/bfs/emote/905fd9a99ec316e353b9bd4ecd49a5f0a301eabf.png",
              "冷":"https://i0.hdslb.com/bfs/emote/cb0ebbd0668640f07ebfc0e03f7a18a8cd00b4ed.png",
              "生病":"https://i0.hdslb.com/bfs/emote/0f25ce04ae1d7baf98650986454c634f6612cb76.png",
              "吓":"https://i0.hdslb.com/bfs/emote/9c10c5ebc7bef27ec641b8a1877674e0c65fea5d.png",
              "吐":"https://i0.hdslb.com/bfs/emote/06946bfe71ac48a6078a0b662181bb5cad09decc.png",
              "捂眼":"https://i0.hdslb.com/bfs/emote/c5c6d6982e1e53e478daae554b239f2b227b172b.png",
              "嘘声":"https://i0.hdslb.com/bfs/emote/e64af664d20716e090f10411496998095f62f844.png",
              "思考":"https://i0.hdslb.com/bfs/emote/cfa9b7e89e4bfe04bbcd34ccb1b0df37f4fa905c.png",
              "再见":"https://i0.hdslb.com/bfs/emote/fc510306bae26c9aec7e287cdf201ded27b065b9.png",
              "翻白眼":"https://i0.hdslb.com/bfs/emote/eba54707c7168925b18f6f8b1f48d532fe08c2b1.png",
              "哈欠":"https://i0.hdslb.com/bfs/emote/888d877729cbec444ddbd1cf4c9af155a7a06086.png",
              "奋斗":"https://i0.hdslb.com/bfs/emote/bb2060c15dba7d3fd731c35079d1617f1afe3376.png",
              "墨镜":"https://i0.hdslb.com/bfs/emote/3a03aebfc06339d86a68c2d893303b46f4b85771.png",
              "难过":"https://i0.hdslb.com/bfs/emote/a651db36701610aa70a781fa98c07c9789b11543.png",
              "撇嘴":"https://i0.hdslb.com/bfs/emote/531863568e5668c5ac181d395508a0eeb1f0cda4.png",
              "抓狂":"https://i0.hdslb.com/bfs/emote/4c87afff88c22439c45b79e9d2035d21d5622eba.png",
              "生气":"https://i0.hdslb.com/bfs/emote/3195714219c4b582a4fb02033dd1519913d0246d.png",
              "口罩":"https://i0.hdslb.com/bfs/emote/3ad2f66b151496d2a5fb0a8ea75f32265d778dd3.png",
              "牛年":"https://i0.hdslb.com/bfs/emote/9275275ff1f2659310648221107d20bc4970f106.png",
              "2021":"https://i0.hdslb.com/bfs/emote/14d8996128d46dabd3a2ed6c172c8af918d7a5d2.png",
              "2020":"https://i0.hdslb.com/bfs/emote/dc709fac0d361370bcf0d36d32adb97df7c95824.png",
              "水稻":"https://i0.hdslb.com/bfs/emote/d530fcaa5100ba12a17a79b55bad342d530c54e3.png",
              "福到了":"https://i0.hdslb.com/bfs/emote/5de5373d354c373cf1617b6b836f3a8d53c5a655.png",
              "鸡腿":"https://i0.hdslb.com/bfs/emote/c7860392815d345fa69c4f00ef18d67dccfbd574.png",
              "雪花":"https://i0.hdslb.com/bfs/emote/a41813c4edf8782047e172c884ebd4507ce5e449.png",
              "视频卫星":"https://i0.hdslb.com/bfs/emote/dce6fc7d6dfeafff01241924db60f8251cca5307.png",
              "11周年":"https://i0.hdslb.com/bfs/emote/d3b2d5dc028c75ae4df379f4c3afbe186d0f6f9b.png",
              "十周年":"https://i0.hdslb.com/bfs/emote/1eacd3f7816e70aff9c1b1a2e9605240466f599b.png",
              "干杯":"https://i0.hdslb.com/bfs/emote/8da12d5f55a2c7e9778dcc05b40571979fe208e6.png",
              "爱心":"https://i0.hdslb.com/bfs/emote/ed04066ea7124106d17ffcaf75600700e5442f5c.png",
              "锦鲤":"https://i0.hdslb.com/bfs/emote/643d6c19c8164ffd89e3e9cdf093cf5d773d979c.png",
              "胜利":"https://i0.hdslb.com/bfs/emote/b49fa9f4b1e7c3477918153b82c60b114d87347c.png",
              "加油":"https://i0.hdslb.com/bfs/emote/c7aaeacb21e107292d3bb053e5abde4a4459ed30.png",
              "抱拳":"https://i0.hdslb.com/bfs/emote/89516218158dbea18ab78e8873060bf95d33bbbe.png",
              "响指":"https://i0.hdslb.com/bfs/emote/1b5c53cf14336903e1d2ae3527ca380a1256a077.png",
              "保佑":"https://i0.hdslb.com/bfs/emote/fafe8d3de0dc139ebe995491d2dac458a865fb30.png",
              "支持":"https://i0.hdslb.com/bfs/emote/3c210366a5585706c09d4c686a9d942b39feeb50.png",
              "拥抱":"https://i0.hdslb.com/bfs/emote/41780a4254750cdaaccb20735730a36044e98ef3.png",
              "跪了":"https://i0.hdslb.com/bfs/emote/f2b3aee7e521de7799d4e3aa379b01be032698ac.png",
              "怪我咯":"https://i0.hdslb.com/bfs/emote/07cc6077f7f7d75b8d2c722dd9d9828a9fb9e46d.png",
              "黑洞":"https://i0.hdslb.com/bfs/emote/e90ec4c799010f25391179118ccd9f66b3b279ba.png",
              "老鼠":"https://i0.hdslb.com/bfs/emote/8e6fb491eb1bb0d5862e7ec8ccf9a3da12b6c155.png",
              "来古-沉思":"https://i0.hdslb.com/bfs/emote/4ee07ff03266d62b246be0b950bebb2abf3d997c.png",
              "来古-呆滞":"https://i0.hdslb.com/bfs/emote/9a70b365e523f2379f395031ceefcebb75a45903.png",
              "来古-疑问":"https://i0.hdslb.com/bfs/emote/032fdc0d9d9fe6334776f6c39518a959b73b98f4.png",
              "来古-震撼":"https://i0.hdslb.com/bfs/emote/8b40f228675602a317d32007de6b795c101135ec.png",
              "来古-注意":"https://i0.hdslb.com/bfs/emote/4b671ba32a2581cf40e5cd41c67b111eb8010de0.png",
              "凛冬-生气":"https://i0.hdslb.com/bfs/emote/d90bd2fbc13a3cb8d313f6d675f20caf109f60a7.png",
              "W-哈哈":"https://i0.hdslb.com/bfs/emote/83d527303c8f62f494e6971c48836487e7d87b1b.png",
              "霜叶-疑问":"https://i0.hdslb.com/bfs/emote/ada3aea8594e724511c1daad15fb3b23900d8e24.png",
              "煌-震撼":"https://i0.hdslb.com/bfs/emote/7bb39ac289bc97fe52af047020a9bf324ecdebe1.png",
              "哭泣":"https://i0.hdslb.com/bfs/emote/a61abafb8c39defc323b045f30072198007b1c89.png",
              "哈哈":"https://i0.hdslb.com/bfs/emote/e6449b0bae13b8c97cc65976ff8cdc2c16be0015.png",
              "狗子":"https://i0.hdslb.com/bfs/emote/6a997106af5bf490f22c80a7acf3be813ee755fc.png",
              "羞羞":"https://i0.hdslb.com/bfs/emote/f4f9171e4d8c3f30827a8b96ea1ce1beb825ad50.png",
              "亲亲":"https://i0.hdslb.com/bfs/emote/2f72bae7b834d499f259c833f7011d5ed8748fd1.png",
              "耍帅":"https://i0.hdslb.com/bfs/emote/d7a38b08d1f1cc35b19c35041f29ffcc48808e87.png",
              "气愤":"https://i0.hdslb.com/bfs/emote/069b029d17a086ab475fd331697a649e234850bb.png",
              "高兴":"https://i0.hdslb.com/bfs/emote/416570a8aca7be12fb2c36e4b846906653f6d294.png",
              "粽子":"https://i0.hdslb.com/bfs/emote/177999fb7d70d891fbf63b161f26b272e08dc1de.png",
              "月饼":"https://i0.hdslb.com/bfs/emote/89b19c5730e08d6f12fadf6996de5bc2e52f81fe.png",
              "加油武汉":"https://i0.hdslb.com/bfs/emote/eb966aaa5b690d3f9308a9f936f5b5a72a7f956b.png",
              "画风突变":"https://i0.hdslb.com/bfs/emote/ba4de7a3f97644038b15195bdc9f82a8fd118e77.png",
              "福":"https://i0.hdslb.com/bfs/emote/802429a301ac5b35a0480d9526a070ce67cd8097.png",
              "tv-白眼":"https://i0.hdslb.com/bfs/emote/c1d59f439e379ee50eef488bcb5e5378e5044ea4.png",
              "tv-doge":"https://i0.hdslb.com/bfs/emote/6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
              "tv-坏笑":"https://i0.hdslb.com/bfs/emote/1f0b87f731a671079842116e0991c91c2c88645a.png",
              "tv-难过":"https://i0.hdslb.com/bfs/emote/87f46748d3f142ebc6586ff58860d0e2fc8263ba.png",
              "tv-生气":"https://i0.hdslb.com/bfs/emote/26702dcafdab5e8225b43ffd23c94ac1ff932654.png",
              "tv-委屈":"https://i0.hdslb.com/bfs/emote/d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
              "tv-斜眼笑":"https://i0.hdslb.com/bfs/emote/911f987aa8bc1bee12d52aafe62bc41ef4474e6c.png",
              "tv-呆":"https://i0.hdslb.com/bfs/emote/fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
              "tv-发怒":"https://i0.hdslb.com/bfs/emote/34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
              "tv-惊吓":"https://i0.hdslb.com/bfs/emote/0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
              "tv-呕吐":"https://i0.hdslb.com/bfs/emote/9f996894a39e282ccf5e66856af49483f81870f3.png",
              "tv-思考":"https://i0.hdslb.com/bfs/emote/90cf159733e558137ed20aa04d09964436f618a1.png",
              "tv-微笑":"https://i0.hdslb.com/bfs/emote/70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
              "tv-疑问":"https://i0.hdslb.com/bfs/emote/0793d949b18d7be716078349c202c15ff166f314.png",
              "tv-大哭":"https://i0.hdslb.com/bfs/emote/23269aeb35f99daee28dda129676f6e9ea87934f.png",
              "tv-鼓掌":"https://i0.hdslb.com/bfs/emote/1d21793f96ef4e6f48b23e53e3b9e42da833a0f6.png",
              "tv-抠鼻":"https://i0.hdslb.com/bfs/emote/c666f55e88d471e51bbd9fab9bb308110824a6eb.png",
              "tv-亲亲":"https://i0.hdslb.com/bfs/emote/a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
              "tv-调皮":"https://i0.hdslb.com/bfs/emote/b9c41de8e82dd7a8515ae5e3cb63e898bf245186.png",
              "tv-笑哭":"https://i0.hdslb.com/bfs/emote/1abc628f6d4f4caf9d0e7800878f4697abbc8273.png",
              "tv-晕":"https://i0.hdslb.com/bfs/emote/5443c22b4d07fb1907ccc610c8e6db254f2461b7.png",
              "tv-点赞":"https://i0.hdslb.com/bfs/emote/f85c354995bd99e28fc76c869bfe42ba6438eff4.png",
              "tv-害羞":"https://i0.hdslb.com/bfs/emote/a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
              "tv-睡着":"https://i0.hdslb.com/bfs/emote/8b196675b53af58264f383c50ad0945048290b33.png",
              "tv-色":"https://i0.hdslb.com/bfs/emote/61822c7e9aae5da76475e7892534545336b23a6f.png",
              "tv-吐血":"https://i0.hdslb.com/bfs/emote/09dd16a7aa59b77baa1155d47484409624470c77.png",
              "tv-无奈":"https://i0.hdslb.com/bfs/emote/ea8ed89ee9878f2fece2dda0ea8a5dbfe21b5751.png",
              "tv-再见":"https://i0.hdslb.com/bfs/emote/180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
              "tv-流汗":"https://i0.hdslb.com/bfs/emote/cead1c351ab8d79e9f369605beb90148db0fbed3.png",
              "tv-偷笑":"https://i0.hdslb.com/bfs/emote/bb690d4107620f1c15cff29509db529a73aee261.png",
              "tv-抓狂":"https://i0.hdslb.com/bfs/emote/fe31c08edad661d63762b04e17b8d5ae3c71a757.png",
              "tv-黑人问号":"https://i0.hdslb.com/bfs/emote/45821a01f51bc867da9edbaa2e070410819a95b2.png",
              "tv-困":"https://i0.hdslb.com/bfs/emote/241ee304e44c0af029adceb294399391e4737ef2.png",
              "tv-打脸":"https://i0.hdslb.com/bfs/emote/56ab10b624063e966bfcb76ea5dc4794d87dfd47.png",
              "tv-闭嘴":"https://i0.hdslb.com/bfs/emote/c9e990da7f6e93975e25fd8b70e2e290aa4086ef.png",
              "tv-鄙视":"https://i0.hdslb.com/bfs/emote/6e72339f346a692a495b123174b49e4e8e781303.png",
              "tv-腼腆":"https://i0.hdslb.com/bfs/emote/89712c0d4af73e67f89e35cbc518420380a7f6f4.png",
              "tv-馋":"https://i0.hdslb.com/bfs/emote/fc7e829b845c43c623c8b490ee3602b7f0e76a31.png",
              "tv-可爱":"https://i0.hdslb.com/bfs/emote/9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
              "tv-发财":"https://i0.hdslb.com/bfs/emote/34db290afd2963723c6eb3c4560667db7253a21a.png",
              "tv-生病":"https://i0.hdslb.com/bfs/emote/8b0ec90e6b86771092a498c54f09fc94621c1900.png",
              "tv-流鼻血":"https://i0.hdslb.com/bfs/emote/c32d39db2737f89b904ca32700d140a9241b0767.png",
              "tv-尴尬":"https://i0.hdslb.com/bfs/emote/7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
              "tv-大佬":"https://i0.hdslb.com/bfs/emote/093c1e2c490161aca397afc45573c877cdead616.png",
              "tv-流泪":"https://i0.hdslb.com/bfs/emote/7e71cde7858f0cd50d74b0264aa26db612a8a167.png",
              "tv-冷漠":"https://i0.hdslb.com/bfs/emote/b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
              "tv-皱眉":"https://i0.hdslb.com/bfs/emote/72ccad6679fea0d14cce648b4d818e09b8ffea2d.png",
              "tv-鬼脸":"https://i0.hdslb.com/bfs/emote/0ffbbddf8a94d124ca2f54b360bbc04feb6bbfea.png",
              "tv-调侃":"https://i0.hdslb.com/bfs/emote/4bc022533ef31544ca0d72c12c808cf4a1cce3e3.png",
              "tv-目瞪口呆":"https://i0.hdslb.com/bfs/emote/0b8cb81a68de5d5365212c99375e7ace3e7891b7.png",
              "tv-白眼-动图":"https://i0.hdslb.com/bfs/emote/48f75163437445665a9be80bb316e4cb252c5415.gif",
              "tv-doge-动图":"https://i0.hdslb.com/bfs/emote/302d6c88c63ed162c81a49cafe7ed2709e6fb955.gif",
              "tv-坏笑-动图":"https://i0.hdslb.com/bfs/emote/5d2572efd09aab5dde9e2a198bb3f9ac1e2a982e.gif",
              "tv-难过-动图":"https://i0.hdslb.com/bfs/emote/9c6b41008a67755410f712334c64313df5f91b3f.gif",
              "tv-生气-动图":"https://i0.hdslb.com/bfs/emote/1902a5a2df5b5c931d88c12f0feb264b1e109d0d.gif",
              "tv-委屈-动图":"https://i0.hdslb.com/bfs/emote/af5a5853edb43a8178a8cb5df707fa5e88143699.gif",
              "tv-斜眼笑-动图":"https://i0.hdslb.com/bfs/emote/c66568b471192ca1f62f6ed4384dc1b283ab7508.gif",
              "tv-呆-动图":"https://i0.hdslb.com/bfs/emote/d3fa91e4db9215eb1e20ab9da44f1214aa4bda7b.gif",
              "tv-发怒-动图":"https://i0.hdslb.com/bfs/emote/3959eb81b952e4fa8d269d98f9e3639172d84073.gif",
              "tv-惊吓-动图":"https://i0.hdslb.com/bfs/emote/13549060757fcd92b11d0657d9b3b6038f97abb6.gif",
              "tv-呕吐-动图":"https://i0.hdslb.com/bfs/emote/db58e9442aae26694af18cc1683607cca3a16763.gif",
              "tv-思考-动图":"https://i0.hdslb.com/bfs/emote/b63f9146bfd985af014f8d6d4bdb498805be48f9.gif",
              "tv-微笑-动图":"https://i0.hdslb.com/bfs/emote/b98656855d782f61cb8edc7f7fca6563ecafff7e.gif",
              "tv-疑问-动图":"https://i0.hdslb.com/bfs/emote/fce1b1a0f3b0e39a2dc16a18508dba7b91e929f4.gif",
              "tv-大哭-动图":"https://i0.hdslb.com/bfs/emote/cba61f05f3039b02a7ffc0dfcd9d7995df9fdd74.gif",
              "tv-鼓掌-动图":"https://i0.hdslb.com/bfs/emote/be106e6b265883a9f28fbe10f7b765701e2618d4.gif",
              "tv-抠鼻-动图":"https://i0.hdslb.com/bfs/emote/696d9f93e722144dc2a78aeffc569418fdf3d565.gif",
              "tv-亲亲-动图":"https://i0.hdslb.com/bfs/emote/3534ea44ab74bd20352b88c245a06c4b4c46d271.gif",
              "tv-调皮-动图":"https://i0.hdslb.com/bfs/emote/fcd967395fd14e4dd5829fa7e8a967ce23205e52.gif",
              "tv-笑哭-动图":"https://i0.hdslb.com/bfs/emote/1c2fd1e8c9dde12812f86e5d4cbddd8993d98082.gif",
              "tv-晕-动图":"https://i0.hdslb.com/bfs/emote/030040ec5c9ddc9e3d067658c4139e7314ab42f8.gif",
              "tv-点赞-动图":"https://i0.hdslb.com/bfs/emote/30ecff401245fb56bcc1cf588d1809ac1ab1607c.gif",
              "tv-害羞-动图":"https://i0.hdslb.com/bfs/emote/411a3e459e8580f5bfd9f639a408247c4b509935.gif",
              "tv-睡着-动图":"https://i0.hdslb.com/bfs/emote/3c8b5e293261287a6203597e29b3de07df4d18c6.gif",
              "tv-色-动图":"https://i0.hdslb.com/bfs/emote/a0c6d99ab0ab63b8648f5283ff72cec04b604828.gif",
              "tv-吐血-动图":"https://i0.hdslb.com/bfs/emote/e17e4539e169d14a3389ff147afea760cebe5de5.gif",
              "tv-无奈-动图":"https://i0.hdslb.com/bfs/emote/eb4cb5f07cfd177c7e6a7914316717e56d9cc1d0.gif",
              "tv-再见-动图":"https://i0.hdslb.com/bfs/emote/344f61609ecce2008520dc8a977b6169215748a9.gif",
              "tv-流汗-动图":"https://i0.hdslb.com/bfs/emote/390bccec65eaff536bd5bb2a0c5b8b0bdea47334.gif",
              "tv-偷笑-动图":"https://i0.hdslb.com/bfs/emote/7f11e6f7f63e79112b833bd41fa13a83d7cd8474.gif",
              "tv-抓狂-动图":"https://i0.hdslb.com/bfs/emote/a476b93ecd8e94ac3257323fd822f91cef212de2.gif",
              "tv-黑人问号-动图":"https://i0.hdslb.com/bfs/emote/b609adf664be33224a9923262031165ae3e34cd2.gif",
              "tv-困-动图":"https://i0.hdslb.com/bfs/emote/91c2bf34ecf842d7016c01d841db3d4074bd281f.gif",
              "tv-打脸-动图":"https://i0.hdslb.com/bfs/emote/b0fad4856e59c1240e448437da3287bb5ce547e5.gif",
              "tv-闭嘴-动图":"https://i0.hdslb.com/bfs/emote/a3fc5388b09e945be3f18fe23bfed5874a0285b7.gif",
              "tv-鄙视-动图":"https://i0.hdslb.com/bfs/emote/293b5d459e6264ecf314d20937a936fa672ccd1e.gif",
              "tv-腼腆-动图":"https://i0.hdslb.com/bfs/emote/30984e8264324f901d19bea85dada7103b695534.gif",
              "tv-馋-动图":"https://i0.hdslb.com/bfs/emote/2525c5703c594e5f0752f68db8948773caebde47.gif",
              "tv-可爱-动图":"https://i0.hdslb.com/bfs/emote/f92d20f76258bc5f33fc9d7c5e2a1d41fef19a7c.gif",
              "tv-发财-动图":"https://i0.hdslb.com/bfs/emote/76131e52c9b033681b4c896c6024d29ef7ec7ec2.gif",
              "tv-生病-动图":"https://i0.hdslb.com/bfs/emote/beb94829fe04f1a41bd6ca611e1f6ca9ca169afa.gif",
              "tv-流鼻血-动图":"https://i0.hdslb.com/bfs/emote/8ef473f74a849420da712487b2f56ecca1f695f5.gif",
              "tv-尴尬-动图":"https://i0.hdslb.com/bfs/emote/e0b84ef5ee3e5b8978e584c7c5a6550c51d15f84.gif",
              "tv-大佬-动图":"https://i0.hdslb.com/bfs/emote/14ca0c05382b8741940942b2430b7a8d55c02f7e.gif",
              "酷仔":"https://i0.hdslb.com/bfs/emote/390100ada4659b4516984d386499fb22c0025084.png",
              "赞了":"https://i0.hdslb.com/bfs/emote/40ded585bbd6328fc390076b5de224fd38b46793.png",
              "暗中观察":"https://i0.hdslb.com/bfs/emote/80a752e0718db211e4135b4ba821813f4c151e2c.png",
              "么么哒":"https://i0.hdslb.com/bfs/emote/2f418440776e88605ddc426eac898202c1f5fa4d.png",
              "哭哭":"https://i0.hdslb.com/bfs/emote/cbf36e518f1d50618f6d054aa69993ecc339fe8f.png",
              "饿了":"https://i0.hdslb.com/bfs/emote/ff91ea94adf7c5b04db305c18d17b444f7360059.png",
              "问号":"https://i0.hdslb.com/bfs/emote/a905b58b32016a1f0ff7d9193b62749f0d491707.png",
              "嘿嘿":"https://i0.hdslb.com/bfs/emote/8a15a45e228179f912ce11dbd5478f6ad54e9854.png",
              "卖萌":"https://i0.hdslb.com/bfs/emote/a0d37b43d1e786ba811d9b0ae590c479dcce6c44.png",
              "喵":"https://i0.hdslb.com/bfs/emote/eb46e78c9d86ccbe9842f0235c7cb4f4e0e80a57.png",
              "小电视-笑":"https://i0.hdslb.com/bfs/emote/f80d384875183dfe2e24be13011c595c0210d273.png",
              "小电视-发愁":"https://i0.hdslb.com/bfs/emote/05e279abbf3f72d5cc45548504a4220c5514b8b9.png",
              "小电视-赞":"https://i0.hdslb.com/bfs/emote/86ccf6d0b5480169bf80f3582fae09d7ed455c06.png",
              "小电视-差评":"https://i0.hdslb.com/bfs/emote/38456e3bde2839b00b536a8be13934fa57c8e298.png",
              "小电视-嘟嘴":"https://i0.hdslb.com/bfs/emote/6fd437f547ef1e4f231ff475d02f58bb94cef5a5.png",
              "小电视-汗":"https://i0.hdslb.com/bfs/emote/5c150cec77eae1b05d5ca46526450ff3beeb44d2.png",
              "小电视-害羞":"https://i0.hdslb.com/bfs/emote/de3aee88f7b6cc20ba9480c96c02f83a844381a9.png",
              "小电视-吃惊":"https://i0.hdslb.com/bfs/emote/05188008ea84c70d94e0076e28de15bf56f4c441.png",
              "小电视-哭泣":"https://i0.hdslb.com/bfs/emote/938bdf98df945576ae88e2a22931db07ded9e663.png",
              "小电视-太太喜欢":"https://i0.hdslb.com/bfs/emote/eb41a8c04840e4f77e76a4bff7a29ac89c432f4e.png",
              "小电视-好怒啊":"https://i0.hdslb.com/bfs/emote/68d524b7e515396b6563d320fb710c64abfb1063.png",
              "小电视-困惑":"https://i0.hdslb.com/bfs/emote/6853161f0eab3332b874ab7c6c0311035b7538f3.png",
              "小电视-我好兴奋":"https://i0.hdslb.com/bfs/emote/a695fe1301aab2675ab6f6e34757c25a863a8617.png",
              "小电视-思索":"https://i0.hdslb.com/bfs/emote/f8219e484d5a55787c3f1722dc3112d0eba03a69.png",
              "小电视-无语":"https://i0.hdslb.com/bfs/emote/fbd12affebfdaadd3d721bffdb685a6b1ee71219.png",
              "2233娘-大笑":"https://i0.hdslb.com/bfs/emote/16b8794be990cefa6caeba4d901b934a227ee3b8.png",
              "2233娘-吃惊":"https://i0.hdslb.com/bfs/emote/d1628c43d35b1530c0504a643ff80b6189fa0a43.png",
              "2233娘-大哭":"https://i0.hdslb.com/bfs/emote/476a2a60f6e337b8c0697a592e0aa82781f6b33b.png",
              "2233娘-耶":"https://i0.hdslb.com/bfs/emote/d7178e258a0efc969b65ccc2b1322fb235f5dff4.png",
              "2233娘-卖萌":"https://i0.hdslb.com/bfs/emote/ea893aa25355de95ab4f03c2dad3f0c58d0c159e.png",
              "2233娘-疑问":"https://i0.hdslb.com/bfs/emote/0b41f509351958dbb63d472fec0132d1bd03bd14.png",
              "2233娘-汗":"https://i0.hdslb.com/bfs/emote/247cd9df8cdf84b18368c21e3b2dd374e84c0927.png",
              "2233娘-困惑":"https://i0.hdslb.com/bfs/emote/714eeb4eae0d0933b4ff08b7df788b1982f6b940.png",
              "2233娘-怒":"https://i0.hdslb.com/bfs/emote/f31953119c51b9748016440ac0b632f779929b37.png",
              "2233娘-委屈":"https://i0.hdslb.com/bfs/emote/d9d0bf9d358af8d5761093ec66d4e3f60d963a63.png",
              "2233娘-郁闷":"https://i0.hdslb.com/bfs/emote/485203fe7100f2c8fc40b2800a18fe20b35f2f1a.png",
              "2233娘-第一":"https://i0.hdslb.com/bfs/emote/3754ee6e5985bd0bd7dfb668981f2a8733398ebd.png",
              "2233娘-喝水":"https://i0.hdslb.com/bfs/emote/695bf5429472049b52c1e0de586f8a2511195a23.png",
              "2233娘-吐魂":"https://i0.hdslb.com/bfs/emote/e999af499edf38a91ca68b1a9d2f97042c1d6734.png",
              "2233娘-无言":"https://i0.hdslb.com/bfs/emote/fdb5870f32cfaf7949e0f88a13f6feba4a48b719.png",
            }
          }
        }   
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ],
})