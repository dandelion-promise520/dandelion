## 1、在配置 Swap 前，首先检查系统当前的 Swap 使用情况

这些命令会显示系统当前的 Swap 总量、使用量以及是否已启用 Swap 分区或文件

```bash
free -h
swapon --show
cat /proc/swaps
```

## 2、使用以下命令创建指定大小的 Swap 文件（以 2GB 为例）：

```bash
sudo fallocate -l 2G /swapfile
```

如果 `fallocate`不可用，可以使用 `dd`命令：

```bash
sudo dd if=/dev/zero of=/swapfile bs=1M count=2048
```

确保只有 root 用户可以读写 Swap 文件：

```bash
sudo chmod 600 /swapfile
```
## **3\. 格式化 Swap 文件**

```bash
sudo mkswap /swapfile
```
## **4\. 启用 Swap 文件**

```bash
sudo swapon /swapfile
```
## **5、设置 Swap 永久生效**

```bash
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```
## **6、调整 Swap 使用策略**

 ```bash
echo 'vm.swappiness=60' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

## **7、验证 Swap 配置**

```bash
free -h
swapon --show
```

### **8、删除 Swap 文件（如需撤销）**

```bash
sudo swapoff /swapfile  # 关闭 Swap
sudo rm /swapfile       # 删除文件
sudo sed -i '/\/swapfile/d' /etc/fstab  # 从 fstab 中删除对应行
```