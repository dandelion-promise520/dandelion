# 内网穿透frp客户端配置

```bash
serverAddr = "ip地址"
serverPort = 7000

auth.method = "token"
auth.token = "token123456"

webServer.addr = "0.0.0.0"
webServer.port = 7400
webServer.user = "account"
webServer.password = "password"
webServer.pprofEnable = false

# tls
#transport.tls.certFile = "/etc/frp/ssl/client.crt"
#transport.tls.keyFile = "/etc/frp/ssl/client.key"
#transport.tls.trustedCaFile = "/etc/frp/ssl/ca.crt"

[[proxies]]
name = "Alist"
type = "tcp"
localIp ="127.0.0.1"
localPort = 5244
remotePort =5244

[[proxies]]
name = "Halo"
type = "tcp"
localIp ="127.0.0.1"
localPort = 8090
remotePort = 12345

[[proxies]]
name = "Wordpress"
type = "tcp"
localIp ="127.0.0.1"
localPort = 9000
remotePort = 9000
```
