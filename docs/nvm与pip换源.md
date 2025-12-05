## pip换源

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  
```

## nvm换源

```bash
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/
```

## npm换源
```bash
npm config set registry https://registry.npmmirror.com/
```

```bash
nvm install 22 
nvm use 22
```

## 修改powershell安全策略
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```