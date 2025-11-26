# Debian换apt源

## 1、备份原始的apt源配置文件：

```bash
cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

## 2编辑apt源配置文件，将原有的源地址替换为国内镜像源地址。以下是一些常见的国内镜像源地址：
```bash
阿里云镜像：[https://mirrors.aliyun.com/](https://mirrors.aliyun.com/)
清华大学镜像：[https://mirrors.tuna.tsinghua.edu.cn/](https://mirrors.tuna.tsinghua.edu.cn/)
```

## 3打开 `/etc/apt/sources.list` 文件进行编辑，将原有的源地址替换为您所选择的国内镜像源地址。例如，如果选择阿里云镜像，可以使用以下命令打开 `/etc/apt/sources.list` 文件并进行编辑：

```bash
vim /etc/apt/sources.list
```

## 4将文件中的原有源地址替换为阿里云镜像地址，如下所示：

```bash
deb http://mirrors.aliyun.com/debian/ stable main contrib non-free
```

## 5更新apt源列表：

```bash
apt update
```
