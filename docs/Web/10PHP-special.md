# PHP特性

## 1.数组

preg_match(),匹配到参数是数组是报错，返回0  
intval(),参数是数组，报错返回1

## 2.=

==，判断值是否相同，不关注数据类型  
===，值，数据类型都要相同  

字符串和数字进行==比较时，将字符串转化为数字
  
- 数字开头的字符串   ---  开头数字
- 字符串开头的字符串 ---  0  
eg.  
123a == 123  
a123 == 0  
GET传入的数据都作为字符串

## 3.intval()函数

intval($val,$base)，var是传入的变量参数，base表示这个参数的进制  
intval(4476,0)，0表示根据var开始的数字决定使用的进制，0x十六进制，0八进制，1-9十进制  
eg.intval(0x117c,0)===4476  

## 4.强等于，数组绕过

md5(),sha1()无法对数组加密，对数组加密返回的是null  
a[]=1,b[]=2，md5(),sha1()作用后，返回null   null=null

## 一些操作函数

### 1.parse_str($v1,$v2)

> parse_str() 函数用于将查询字符串解析到变量中。它将查询字符串解析为变量，并将变量设置为当前符号表的条目。其中，$v1 是要解析的查询字符串，$v2 是用来存储解析结果的数组。

如果 $v1 是 'name=binjie&age=25'，那么 parse_str($v1, $v2) 执行后，$v2 将会包含键值对 ['name' => 'binjie', 'age' => '25']。

```php
$query = "name=Ajay";
parse_str($query, $result);
print_r($result);
```

结果

```php
Array
(
    [name] => John
)
```

在使用GET[]传参时，会变成?v1=name=Ajay，有点奇怪

发现在$v1=1时，返回了一个空数组，var_dump($v2)=array[]，即$v2=null

### 2.strrev(str1)

strrev 是 PHP 中的一个内置函数，用于反转字符串

```php
$str = "Hello, World!";
$reversed = strrev($str);
echo $reversed; // 输出：!dlroW ,olleH
```

### 3.arag()

!> ereg 函数是 PHP 中用于执行正则表达式匹配的函数之一，但自 PHP 5.3.0 版本起已被废弃。建议使用 preg_match 函数来代替  
ereg()函数会被%00截断
