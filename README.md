# Web Cmd

在浏览器中执行 Linux 命令，基于 Socket.IO 通信，异步执行和输出。

根据这个原型，其实可以作一些有意思的东西，比如可以写一些按钮来控制服务器上某些功能的执行等等，还可以用来监控某个功能的运行状态之类的。

## 运行

先安装一下使用到的依赖库 `express` 和 `socket.io`

```shell
npm install
```

启动

```shell
node index.js
```

打开浏览器访问 `http://localhost:3000`，在输入框里输入 Linux 命令，然后点 `执行` 即可。 

比如输入 `date; sleep 3; date;`，然后点 `执行`，你会先看到输出当前的时间，然后再过 3 秒会看到又输出了当前的时间，这是Node.JS 异步执行和事件触发实现的特点。
