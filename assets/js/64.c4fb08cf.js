(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{427:function(s,a,n){"use strict";n.r(a);var t=n(7),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("简单记录dns服务器搭建")]),s._v(" "),a("h2",{attrs:{id:"环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),a("p",[s._v("虚拟主机1：")]),s._v(" "),a("ul",[a("li",[s._v("dns服务端")]),s._v(" "),a("li",[s._v("IP：192.168.237.131")]),s._v(" "),a("li",[s._v("OS：centos7")])]),s._v(" "),a("p",[s._v("虚拟主机2：")]),s._v(" "),a("ul",[a("li",[s._v("dns客户端")]),s._v(" "),a("li",[s._v("IP：192.168.237.129")]),s._v(" "),a("li",[s._v("OS：centos7")])]),s._v(" "),a("p",[s._v("使用虚拟主机2 centos7来模拟真实主机的客户端行为")]),s._v(" "),a("p",{staticStyle:{color:"red"}},[s._v("现在，配置dns服务端")]),s._v(" "),a("h2",{attrs:{id:"关闭安全配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭安全配置"}},[s._v("#")]),s._v(" 关闭安全配置")]),s._v(" "),a("p",[s._v("关闭防火墙、selinux")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl stop firewalld\nsetenforce "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/11.png",alt:"11"}})]),s._v(" "),a("h2",{attrs:{id:"安装软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装软件包"}},[s._v("#")]),s._v(" 安装软件包")]),s._v(" "),a("p",[s._v("安装dns服务器所需软件包"),a("code",[s._v("bind")]),s._v(","),a("code",[s._v("bind-utils")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" bind-utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/12.png",alt:"12"}})]),s._v(" "),a("p",[s._v("确认安装成功，配置文件存在")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /etc/named.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/named.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("修改配置文件 ，使允许其他主机发起dns查询请求。把"),a("code",[s._v("127.0.0.1")]),s._v("、"),a("code",[s._v("localhost")]),s._v("修改为"),a("code",[s._v("any")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/13.png",alt:"13"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/14.png",alt:"14"}})]),s._v(" "),a("h2",{attrs:{id:"正向解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正向解析"}},[s._v("#")]),s._v(" 正向解析")]),s._v(" "),a("p",[s._v("尝试给域名"),a("code",[s._v("the0n3.top")]),s._v("配置一个正向解析，解析到IP：192.168.1.1")]),s._v(" "),a("p",[s._v("编辑配置文件"),a("code",[s._v("/etc/named.conf")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/named.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("追加以下内容")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[s._v('zone "the0n3.top" IN {\n    type master;\n    file "named.the0n3.top";  # 区域文件名\n    allow-update { none; };    # 禁止动态更新\n};\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/15.png",alt:"15"}})]),s._v(" "),a("p",[s._v("创建域名对应的区域文件"),a("code",[s._v("named.the0n3.top")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/named.the0n3.top\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("文件内容")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[s._v("$TTL 86400  ; 默认的 TTL（生存时间）\n@   IN  SOA  ns1.the0n3.top. root.the0n3.top. (\n               2024010101  ; Serial（序列号，日期+版本号）\n               86400       ; Refresh（刷新时间，单位：秒）\n               7200        ; Retry（重试时间，单位：秒）\n               3600000     ; Expire（过期时间，单位：秒）\n               86400 )     ; Minimum TTL（最小 TTL，单位：秒）\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 权威 DNS 服务器")]),s._v("\n    IN  NS      ns1.the0n3.top.\n    IN  NS      ns2.the0n3.top.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; DNS 服务器的 IP 地址")]),s._v("\nns1 IN  A     192.168.1.1\nns2 IN  A     192.168.1.2   ; 如果有第二个 DNS 服务器，替换为适当的 IP 地址\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 域名的 A 记录")]),s._v("\n@   IN  A     192.168.1.1   ; 将 the0n3.top 指向 192.168.1.1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; www 子域名的 CNAME 记录")]),s._v("\nwww IN  CNAME  the0n3.top.  ; www.the0n3.top 会解析到 the0n3.top 的 IP 地址\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/16.png",alt:"16"}})]),s._v(" "),a("p",[s._v("重启dns服务")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl reload  named\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/17.png",alt:"17"}})]),s._v(" "),a("p",{staticStyle:{color:"red"}},[s._v("现在，登录dns客户端")]),s._v(" "),a("p",[s._v("修改全局配置文件"),a("code",[s._v("vi /etc/resolv.conf")]),s._v("，更改dns服务器ip")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/resolv.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/18.png",alt:"18"}})]),s._v(" "),a("p",[s._v("测试验证域名the0n3.top的解析ip")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/19.png",alt:"19"}})]),s._v(" "),a("h2",{attrs:{id:"反向解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向解析"}},[s._v("#")]),s._v(" 反向解析")]),s._v(" "),a("p",{staticStyle:{color:"red"}},[s._v("现在，回到dns服务端，继续配置反向解析")]),s._v(" "),a("p",[s._v("编辑"),a("code",[s._v("/etc/named.conf")]),s._v("配置文件，在尾部追加反向解析配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/named.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("追加文件内容")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[s._v('zone "1.168.192.in-addr.arpa" IN {\n    type master;\n    file "named.192.168.1"; \n    allow-update { none; };\n};\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/20.png",alt:"20"}})]),s._v(" "),a("p",[s._v("编写ip"),a("code",[s._v("192.168.1.1")]),s._v("对应的区域配置文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/named.192.168.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("文件内容")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[s._v("$TTL 86400\n@   IN  SOA  ns1.the0n3.top. root.the0n3.top. (\n            2024010101\n            86400      \n            7200       \n            3600000    \n            86400 ) \n\n    IN  NS      ns1.the0n3.top.\n\n1   IN  PTR     the0n3.top.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/21.png",alt:"21"}})]),s._v(" "),a("p",[s._v("重启dns服务器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl restart named\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",{staticStyle:{color:"red"}},[s._v("现在，登录dns客户端，测试验证反向解析")]),s._v(" "),a("p",[s._v("dig命令验证")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("nslookup命令验证")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nslookup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://the0n3.top/medias/dns%E6%90%AD%E5%BB%BA/22.png",alt:"22"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);