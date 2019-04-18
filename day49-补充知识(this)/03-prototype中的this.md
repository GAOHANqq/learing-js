#### 1) 每一个函数都是函数对象,会自动获得一个特殊属性prototype(原型),可以给原型赋值,当在用new的方式调用函数的时候,便可以通过this访问给prototype赋的值

```
1 function Thing() {
2       console.log(this.foo);
3 }
4 
5 Thing.prototype.foo = "bar";
6 
7 var thing = new Thing(); //logs "bar"
8 console.log(thing.foo);  //logs "bar"
```

#### 2) 当使用new给函数创建多个实例的时候,实例会共享prototype设定的值,使用this调用时,都会返回相同的值.即构造函数实例化

```
 1 function Thing() {
 2 }
 3 Thing.prototype.foo = "bar";
 4 Thing.prototype.logFoo = function () {
 5     console.log(this.foo);
 6 }
 7 Thing.prototype.setFoo = function (newFoo) {
 8     this.foo = newFoo;
 9 }
10 
11 var thing1 = new Thing();
12 var thing2 = new Thing();
13 
14 thing1.logFoo(); //logs "bar"
15 thing2.logFoo(); //logs "bar"
16 
17 thing1.setFoo("foo");
18 thing1.logFoo(); //logs "foo";
19 thing2.logFoo(); //logs "bar";
20 
21 thing2.foo = "foobar";
22 thing1.logFoo(); //logs "foo";
23 thing2.logFoo(); //logs "foobar";
```

#### 注: 其他prototype中的this属性大致一样,就不琐碎讲了,详细的可以让我大佬的记录

大佬的笔记:   https://segmentfault.com/a/1190000002640298

