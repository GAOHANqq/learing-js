#### 1) 无论浏览器环境还是node环境,除了在DOM事件处理程序里或者给出了thisArg(下面会讲)外,如果不是使用new调用,在函数中使用的this都是指代全局范围的this

```
1 <script type="text/javascript">
 2     foo = "bar";
 3 
 4     function testThis() {
 5       this.foo = "foo";
 6     }
 7 
 8     console.log(this.foo); //logs "bar"
 9     testThis();
10     console.log(this.foo); //logs "foo"
11 </script>
```

```
test.js

foo = "bar";

function testThis () {
  this.foo = "foo";
}

console.log(global.foo);
testThis();
console.log(global.foo);
$ node test.js
bar
foo
```

#### 2) 若使用严格模式,此时的this就会变成undefined

```
1 <script type="text/javascript">
 2     foo = "bar";
 3 
 4     function testThis() {
 5       "use strict";
 6       this.foo = "foo";
 7     }
 8 
 9     console.log(this.foo); //logs "bar"
10     testThis();  //Uncaught TypeError: Cannot set property 'foo' of undefined 
11 </script>
```

#### 3) 如果在调用函数的时候在前面使用了new,this就会变成一个新的值,和global的this脱离干系,即构造函数,this指向了实例对象

```
 1 <script type="text/javascript">
 2     foo = "bar";
 3 
 4     function testThis() {
 5       this.foo = "foo";
 6     }
 7 
 8     console.log(this.foo); //logs "bar"
 9     new testThis();
10     console.log(this.foo); //logs "bar"
11 
12     console.log(new testThis().foo); //logs "foo"
13 </script>
```

### 总结:

函数里面的this其实相对比较好理解，如果我们在一个函数里面使用this，需要注意的就是我们调用函数的方式，如果是正常的方式调用函数，this指代全局的this，如果我们加一个new，这个函数就变成了一个构造函数，我们就创建了一个实例，this指代这个实例，这个和其他面向对象的语言很像。另外，写JavaScript很常做的一件事就是绑定事件处理程序，也就是诸如button.addEventListener(‘click’, fn, false)之类的，如果在fn里面需要使用this，this指代事件处理程序对应的对象，也就是button。 