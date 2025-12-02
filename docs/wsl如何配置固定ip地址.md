## 1、在 WSL 终端中，编辑 wsl.conf 文件：

```bash
    sudo nano /etc/wsl.conf
```

## 2、添加以下内容（将 `172.24.163.100`替换为你想要的 IP）：

###  修改好之后ctrl + s 保存，ctrl + x退出

```bash
    [network]
    generateHosts = true
    generateResolveConf = true
    [experimental]
    localIP = 172.24.163.100
```

## ​**​3、必须完全关闭 WSL 再重新启动​**​，在 Windows PowerShell 中执行：

 ```bash
    wsl --shutdown
 ```