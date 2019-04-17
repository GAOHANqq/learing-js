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

