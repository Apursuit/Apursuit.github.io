(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{443:function(t,e,r){"use strict";r.r(e);var s=r(7),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("前段时间120软妹币拿下的升腾c92小主机，2c4g60g只有一个千兆网口，还有1个usb3.0+5个usb2.0，看起来可玩性还是挺高的，今天刷了openwrt记录一下过程的问题")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/9.png",alt:"9"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/1.png",alt:"1"}})]),t._v(" "),e("h2",{attrs:{id:"c92刷bios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c92刷bios"}},[t._v("#")]),t._v(" c92刷bios")]),t._v(" "),e("p",[t._v("之前给这c92这老机子刷系统，每次都是进入pe时自动关机，今天刷openwrt顺手解决了，原来是**bios的问题")]),t._v(" "),e("p",[t._v("问题描述：c92无法进入pe系统、c92刷bios")]),t._v(" "),e("p",[t._v("原因：牢版本bios不允许从usb启动")]),t._v(" "),e("p",[t._v("解决：")]),t._v(" "),e("p",[t._v("具体请参考视频"),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1PN4y1P7uW/",target:"_blank",rel:"noopener noreferrer"}},[t._v("刷BIOS，装第三方系统，升腾C92瘦客户机折腾记"),e("OutboundLink")],1),t._v("，刷入bios，可以解决无法进入pe的问题")]),t._v(" "),e("p",[t._v("提供一下bios所需文件："),e("a",{attrs:{href:"https://www.123865.com/s/eZQJTd-r4axv",target:"_blank",rel:"noopener noreferrer"}},[t._v("C92bios升级-123网盘分享"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"编译openwrt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译openwrt"}},[t._v("#")]),t._v(" 编译openwrt")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://openwrt.ai/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线编译openwrt"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("选择所需软件包，我需要外接一个usb转网口，勾选"),e("code",[t._v("usb有线网卡")]),t._v("驱动，编译后下载固件")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/3.png",alt:"3"}})]),t._v(" "),e("h2",{attrs:{id:"下载镜像烧录工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像烧录工具"}},[t._v("#")]),t._v(" 下载镜像烧录工具")]),t._v(" "),e("p",[t._v("把固件放在pe启动u盘里")]),t._v(" "),e("p",[t._v("下载img镜像烧录工具"),e("code",[t._v("physdiskwrite")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/4.png",alt:"4"}})]),t._v(" "),e("p",[t._v("放入U盘，和openwrt固件放在一个目录")]),t._v(" "),e("h2",{attrs:{id:"刷入openwrt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷入openwrt"}},[t._v("#")]),t._v(" 刷入openwrt")]),t._v(" "),e("p",[t._v("启动系统，不断按f9-f12，选择进入pe系统")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("diskgenius")]),t._v("删除c92所有分区，保存")]),t._v(" "),e("p",[t._v("进入openwrt固件所在目录，打开cmd，输入以下命令")]),t._v(" "),e("blockquote",[e("p",[t._v("如果有人看这篇文章作为参考教程，请注意修改为你的实际文件名")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("physdiskwrite "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" kwrt-12.17.2024-x86-64-generic-squashfs-combined-efi.img\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("显示多个硬盘，我的c92的硬盘是0，输入0，回车，等待写入完成")]),t._v(" "),e("p",[t._v("拔掉U盘重启即可")]),t._v(" "),e("p",[t._v("猫猫！！")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/openwrt.png",alt:"openwrt"}})]),t._v(" "),e("h2",{attrs:{id:"最终方案-x86软路由-usb转网口-路由器ap模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最终方案-x86软路由-usb转网口-路由器ap模式"}},[t._v("#")]),t._v(" 最终方案：x86软路由 + usb转网口 + 路由器ap模式")]),t._v(" "),e("p",[t._v("软路由接口：")]),t._v(" "),e("ul",[e("li",[t._v("自带网口做wan口，外接usb转网口做lan口")])]),t._v(" "),e("p",[t._v("路由器ap模式：")]),t._v(" "),e("ul",[e("li",[t._v("路由器桥接模式，lan口连接软路由usb转网口的lan口，实现ap模式，连接的设备由软路由管理")])]),t._v(" "),e("p",[t._v("体验？")]),t._v(" "),e("p",[t._v("x86主机只做软路由cpu占用率只有5%，内存使用了195mb，对于一般256m的硬路由来说负载还行？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/5.png",alt:"5"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/6.png",alt:"6"}})]),t._v(" "),e("p",[t._v("网络稳定340M+")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/7.png",alt:"7"}})]),t._v(" "),e("p",[t._v("最后使用openclash小猫处理所有流量，结合Github一些项目还可以实现去广告功能，上网自由，爱了爱了！！")]),t._v(" "),e("p",[t._v("Github openclash去广告加速项目："),e("a",{attrs:{href:"https://github.com/Aethersailor/Custom_OpenClash_Rules/wiki/%E6%97%A0%E6%8F%92%E4%BB%B6%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E5%8A%9F%E8%83%BD%E8%AE%BE%E7%BD%AE%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("【无插件广告拦截功能设置方案】"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("openclash设置方案："),e("a",{attrs:{href:"https://github.com/Aethersailor/Custom_OpenClash_Rules/wiki/OpenClash-%E8%AE%BE%E7%BD%AE%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("【OpenClash 设置方案】"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("网络连接异常时排查原因："),e("a",{attrs:{href:"https://github.com/vernesong/OpenClash/wiki/%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5%E5%BC%82%E5%B8%B8%E6%97%B6%E6%8E%92%E6%9F%A5%E5%8E%9F%E5%9B%A0",target:"_blank",rel:"noopener noreferrer"}},[t._v("【网络连接异常时排查原因】"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://the0n3.top/medias/openwrt/8.png",alt:"8"}})]),t._v(" "),e("p",[t._v("参考、致谢：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1PN4y1P7uW/",target:"_blank",rel:"noopener noreferrer"}},[t._v("c92刷入bios解决无法进入pe系统"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/u012153104/article/details/136846165",target:"_blank",rel:"noopener noreferrer"}},[t._v("【OpenWRT】x86平台安装原版OpenWRT"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_54664893/article/details/131772027",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenWrt安装使用教程（x86/64架构）"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);