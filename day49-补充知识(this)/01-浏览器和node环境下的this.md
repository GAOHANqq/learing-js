### **浏览器环境下:**

#### 1) 在浏览器中,全局范围内,this等价于window对象

```
1 <script type="text/javascript">
2     console.log(this === window); //true
3 </script>
```

#### 2) 在浏览器中,全局范围内,用var声明变量等价于给this或window添加属性

```
1 <script type="text/javascript">
2     var foo = "bar";
3     console.log(this.foo); //logs "bar"
4     console.log(window.foo); //logs "bar"
5 </script>
```

#### 3) 在浏览器中,声明变量时未使用var或let,则等价于给全局的this添加或改变属性

```
 1 <script type="text/javascript">
 2     foo = "bar";
 3 
 4     function testThis() {
 5       foo = "foo";
 6     }
 7 
 8     console.log(this.foo); //logs "bar"
 9     testThis();
10     console.log(this.foo); //logs "foo"
11 </script>
```

------

------

------



### 在node环境下:

#### 1) 若使用REPL(读取-求值-输出,交互式编程环境)执行程序,this不是最高级命名空间,global才是

```
> this
{ ArrayBuffer: [Function: ArrayBuffer],
  Int8Array: { [Function: Int8Array] BYTES_PER_ELEMENT: 1 },
  Uint8Array: { [Function: Uint8Array] BYTES_PER_ELEMENT: 1 },
  ...
> global === this
true
```

#### 2) node环境下,执行js脚本,在全局范围内,this以一个空对象开始作为最高级的命名空间,此时,this与global不是等价的

```
 1 test.js脚本内容：
 2 
 3 console.log(this);
 4 console.log(this === global);
 5 
 6 REPL运行脚本：
 7 
 8 $ node test.js
 9 {}
10 false
```

#### 3) node环境下,在全局范围内,使用REPL执行脚本,用var声明变量不会将这个变量添加给this

```
1 test.js:
2 
3 var foo = "bar";
4 console.log(this.foo);
5 
6 $ node test.js
7 undefined
```

#### 注:但是,不是使用REPL执行脚本,而是直接执行代码,则等价于给this添加属性(这里是一个坑,需要格外注意)

```
1 > var foo = "bar";
2 > this.foo
3 bar
4 > global.foo
5 bar
```

#### 4) 在node环境下,用REPL运行脚本文件,若在声明变量的时候没有使用var或let,这个变量会自动添加到global对象,但是不会自动添加给this对象,如果直接运行代码,则会同时添加给global和this

```
1 test.js
2 
3 foo = "bar";
4 console.log(this.foo);
5 console.log(global.foo);
6 
7 $ node test.js
8 undefined
9 bar
```

### 总结:

上面的八种情况可能大家已经绕晕了，总结起来就是：在`浏览器`里面this是老大，它等价于window对象，如果你声明一些全局变量(不管在任何地方)，这些变量都会作为this的属性。在node里面，有`两种`执行JavaScript代码的方式，一种是直接执行写好的`JavaScript文件`，另外一种是直接在里面执行`一行行代码`。对于直接运行一行行JavaScript代码的方式，global才是老大，this和它是等价的。在这种情况下，和浏览器比较相似，也就是声明一些全局变量会自动添加给老大global，顺带也会添加给this。但是在node里面直接脚本文件就不一样了，你声明的全局变量不会自动添加到this，但是会添加到global对象。所以相同点是，在全局范围内，全局变量终究是属于老大的。 