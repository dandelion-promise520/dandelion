### 找到nginx的配置文件，加上一段重定向的配置代码

```lua
  location / {
        index index.html index.htm; 
        try_files $uri $uri/ /index.html; 
   }
```