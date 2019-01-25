## 第04章：express(上)

### 1. 安装express

express是一个基于 Node.js平台，快速、开放、极简的 Web 开发框架。

使用npm安装`npm i express`。

### 2. 基础使用

````js
const express = require("express");

let app = express();
app.get("/",(req,res)=>{
    res.send("你好，世界。");
});
app.listen(5656);
````

`.get()  .post()` 

路由、中间件

`.send()   .sendFile()`

`.header()` 

`.use()`

`express.static(路径)`

`express.Router()`



 