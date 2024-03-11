!> PHP Foreign Function Interface（FFI）是PHP 7.4中引入的一个新特性，它允许在无需编写扩展的情况下，直接在PHP脚本中调用C语言库。FFI在PHP中默认是禁用的

```php
<?php
# 调用system函数执行命令
$command = "ls";            # 举例，列出当前目录的内容
$ffi->system($command);     # 使用C语言的system函数
?>
```