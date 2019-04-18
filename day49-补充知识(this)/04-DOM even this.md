#### 1) 在个HTML DOM事件处理程序中,this始终指向这个处理程序所绑定到的HTML DOM节点

```
 1 function Listener() {
 2     document.getElementById("foo").addEventListener("click",
 3        this.handleClick);
 4 }
 5 Listener.prototype.handleClick = function (event) {
 6     console.log(this); //logs "<div id="foo"></div>"
 7 }
 8 
 9 var listener = new Listener();
10 document.getElementById("foo").click();
```

#### 2) 可以通过bind改变this的上下文指向

```
 1 function Listener() {
 2     document.getElementById("foo").addEventListener("click", 
 3         this.handleClick.bind(this));
 4 }
 5 Listener.prototype.handleClick = function (event) {
 6     console.log(this); //logs Listener {handleClick: function}
 7 }
 8 
 9 var listener = new Listener();
10 document.getElementById("foo").click();
```

#### 3) this不能重写,它是保留字

```
1 function test () {
2     var this = {};  // Uncaught SyntaxError: Unexpected token this 
3 }
eval this
```

#### 4) 可以通过with来将this添加到当前的执行环境,并且读写this的属性的时候不需要通过this

```
 1 function Thing () {
 2 }
 3 Thing.prototype.foo = "bar";
 4 Thing.prototype.logFoo = function () {
 5     with (this) {
 6         console.log(foo);
 7         foo = "foo";
 8     }
 9 }
10 
11 var thing = new Thing();
12 thing.logFoo(); // logs "bar"
13 console.log(thing.foo); // logs "foo"
```

个人的理解：with就是为了封装某个对象，减少某个对象的调用

比如：定义一个对象

```
var a={},a.name='张三';a.sex='女';
```

一般的调用方式

```
console.log(a.name);
console.log(a.sex);
```

使用with之后的调用

```
with(a){　　
　　	console.log(name);
　　	console.log(sex);
}
```

