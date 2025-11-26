![](/upload/image-YjSr.png)

```bash
    version: "3"

    services:
      3x-ui:
        image: ghcr.io/mhsanaei/3x-ui:latest
        container_name: 3x-ui
        hostname: my-3x-ui
        volumes:
          - ./db/:/etc/x-ui/
          - ./cert/:/root/cert/  #默认路径在/opt/1panel/docker/compose/下面
        environment:
          XRAY_VMESS_AEAD_FORCED: "false"
        tty: true
        network_mode: host
        restart: unless-stopped
```

![](/upload/image-qrhi.png)![](/upload/image-rXug.png)![](/upload/image-ydSg.png)

然后通过本机 ip 或域名访问 2053 端口，可在日志中查看端口

如 192.168.1.1:2053

账号:admin

密码:admin
