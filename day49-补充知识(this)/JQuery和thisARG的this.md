#### 1) 在许多情况下,JQuery的this都指向HTML元素节点,比如 $.each

```
 1 <div class="foo bar1"></div>
 2 <div class="foo bar2"></div>
 3 <script type="text/javascript">
 4 $(".foo").each(function () {
 5     console.log(this); //logs <div class="foo...
 6 });
 7 $(".foo").on("click", function () {
 8     console.log(this); //logs <div class="foo...
 9 });
10 $(".foo").each(function () {
11     this.click();
12 });
13 </script>
```

#### 2) thisArg的this

如果你用过underscore.js 或者 lo-dash 你可能知道许多类库的方法可以通过一个叫做thisArg 的函数参数来传递实例，这个函数参数会作为this的上下文。举个例子，这适用于_.each。原生的JavaScript在ECMAScript 5的时候也允许函数传递一个thisArg参数了，比如forEach。事实上，之前阐述的bind，apply和call的使用已经给你创造了传递thisArg参数给函数的机会。这个参数将this绑定为你所传递的对象 

```
 1 function Thing(type) {
 2     this.type = type;
 3 }
 4 Thing.prototype.log = function (thing) {
 5     console.log(this.type, thing);
 6 }
 7 Thing.prototype.logThings = function (arr) {
 8    arr.forEach(this.log, this); // logs "fruit apples..."
 9    _.each(arr, this.log, this); //logs "fruit apples..."
10 }
11 
12 var thing = new Thing("fruit");
13 thing.logThings(["apples", "oranges", "strawberries", "bananas"]);
```