## 1、在C:\\Users\\你自己的用户名 这个目录下面创建.wslconfig文件，将以下内容写进去

## 2、具体意思：

1.  将wsl的网络模式改成镜像模式
    
2.  6g内存
    
3.  4核cpu
    
4.  硬盘虚拟内存10g
    
5.  自动端口转发令windows主机可直接通过127.0.0.1或localhost访问 但是这个设置在镜像模式没用，默认的nat模式有用。
    

```bash    
    [wsl2]
    networkingMode=mirrored
    memory=6GB
    processors=4
    swap=10GB
    localhostForwarding=true
```
## 3、将wsl上和windows上的防火墙都关掉

## 4、进入powershell输入wsl --shutdown关闭wsl再重启

## 5、在powershell输入ipconfig查看ip

![](/upload/image-xrWX.png)

## 6、我的是连的wifi，同一个路由器插网线和连wifi应该都可以访问到。

## 7、然后在其他局域网设备中访问此ip加端口即可访问

## 8、特殊情况：wsl中使用docker配置的服务

## 9、由于wsl和docker的网络都有特殊性，除非是host（主机）模式下的docker，否则应该连windows主机都无法访问

## 10、解决方法：将docker的服务反向代理到其他端口即可正常访问，以1panel为例

![](/upload/image-rkvn.png)

## 11、此时windows本机和局域网设备都可以通过8091端口访问到docker服务

![](/upload/110ec625ac8a01d02e94672d3507612.jpg)