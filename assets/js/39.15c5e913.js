(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{402:function(t,s,r){"use strict";r.r(s);var a=r(7),p=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ssrf服务器端请求伪造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssrf服务器端请求伪造"}},[t._v("#")]),t._v(" SSRF服务器端请求伪造")]),t._v(" "),s("p",[t._v("前面刷了ctfshow的ssrf基础，总结下相关芝士")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("SSRF(Server-Side Request Forgery,服务器请求伪造)是一种由攻击者构造请求,"),s("strong",[t._v("由服务端发起请求的安全漏洞")]),t._v(",一般情况下,SSRF攻击的目标是外网无法访问的内网系统")])]),t._v(" "),s("p",[t._v("**简单讲，SSRF是利用了服务器发起了请求，绕过了对ip的限制。例如，mysql默认是只允许localhost连接。**在CTFshow靶场中，常见题目类型考察本地ip地址的利用")]),t._v(" "),s("p",[t._v("举例说明：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://the0n3.top/medias/ssrf0/2.png",alt:"flag"}})]),t._v(" "),s("p",[t._v("直接访问flag.php时会提示禁止本地用以外的用户访问，题目中的函数curl_exec()函数会请求目标url，此时的请求是由服务器发起的，可以利用"),s("code",[t._v("gopher")]),t._v("协议ssrf打内网服务")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://the0n3.top/medias/ssrf0/3.png",alt:"url"}})]),t._v(" "),s("p",[t._v("实际利用场景可以学习B站橙子科技陈腾老师"),s("a",{attrs:{href:"https://space.bilibili.com/271803648/video",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用SSRF对组件利用"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://the0n3.top/medias/ssrf0/1.png",alt:"ssrf"}})]),t._v(" "),s("h2",{attrs:{id:"本地ip地址的各种进制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地ip地址的各种进制"}},[t._v("#")]),t._v(" 本地IP地址的各种进制")]),t._v(" "),s("p",[t._v("#默认")]),t._v(" "),s("p",[t._v("http://127.0.0.1")]),t._v(" "),s("p",[t._v("#16进制")]),t._v(" "),s("p",[t._v("http://0x7F000001")]),t._v(" "),s("p",[t._v("#10进制")]),t._v(" "),s("p",[t._v("((127*256+0)*256+0)*256+1 //计算过程")]),t._v(" "),s("p",[t._v("http://2130706433")]),t._v(" "),s("p",[t._v("#8进制")]),t._v(" "),s("p",[t._v("url=http://0177.0000.0000.0001/flag.php  //八进制")]),t._v(" "),s("p",[t._v("url=http://0177.0.0.1/flag.php")]),t._v(" "),s("h2",{attrs:{id:"_0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0"}},[t._v("#")]),t._v(" 0")]),t._v(" "),s("div",{staticClass:"language-plaintext line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plaintext"}},[s("code",[t._v("url=http://127.1/flag.php\nurl=http://0/flag.php          //0在linux系统中会解析成127.0.0.1，在windows中解析成0.0.0.0失败\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("0.0.0.0表示任何IP地址，也可以表示本地")]),t._v(" "),s("p",[t._v("http://0.0.0.0")]),t._v(" "),s("p",[t._v("http://0.0.0")]),t._v(" "),s("p",[t._v("http://0.0")]),t._v(" "),s("p",[t._v("http://0")]),t._v(" "),s("h2",{attrs:{id:"域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名解析"}},[t._v("#")]),t._v(" 域名解析")]),t._v(" "),s("p",[t._v("域名dns解析到127.0.0.1，例如sudo.cc")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://lock.cmpxchg8b.com/rebinder.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("dns重绑工具"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=p.exports}}]);