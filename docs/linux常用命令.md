## 更改文件权限
```bash
sudo chmod 666 /etc/resolv.conf
sudo chmod 666 /etc/wsl.conf
```

## wsl.conf常见配置
```ini
#配置wsl默认用户为root
[user]
default=root
#避免生成dns
[network]
generateResolvConf = false
```

