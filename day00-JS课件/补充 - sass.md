## Sass

#### 1. Sass是个啥

官网的介绍：世界上最成熟、最稳定、最强大的专业级CSS扩展语言！

可以为我们写css代码提供巨大的方便！

[官网链接 点击这里](https://www.sass.hk/)

PS：另外一款比较有名的css扩展语言是[Less](http://lesscss.cn/)，使用方法和Sass有些相似，学会了Sass，Less就很简单了，项目不必要两个都用，选择其中一个就可以了。

#### 2. 安装和使用

我不多BB了，官网详细的不得了：[Sass安装](https://www.sass.hk/install/)  [Sass快速入门](https://www.sass.hk/guide/)  [Sass文档](https://www.sass.hk/docs/)

#### 3. 一些基本操作

- 嵌套写法示例

```less
#wrap{
    div.box{
    	width:100px;
    }
    div.nav{
    	width:200px;
    	p{
            width:200px;
    	}
    }
}

/*编译后*/
#wrap div.box{ width:100px; }
#wrap div.nav{ width:200px; }
#wrap div.nav p{ width:200px; }

```

- 定义变量示例

```less
$pink : 1px solid pink;
#wrap{
    $w : 200px;
    width : $w;
    border : $pink;
    div{
        width : $w;
        border : $pink;
    }
}
#nav{
    $w : 400px;
    width : $w;
    border : $pink;
    div{
        width : $w;
        border : $pink;
    }
}

/*编译后*/
#wrap{ width:200px; border:1px solid pink; }
#wrap div{ width:200px;  border:1px solid pink;}
#nav{ width:400px; border:1px solid pink;}
#nav div{  width:400px; border:1px solid pink;}
```

- 父选择器标识&

```less
#nav{
    width : 100px;
    &:hover{
        width:200px;
    }
    #wrap &{
        color:pink;
    }
}

/*编译后*/
#nav{width:100px;}
#nav:hover{width:200px;}
#wrap #nav{color:pink;}

/* 伪类伪元素这种必须结合 & 来写sass，而 + ~ > 这种关联选择的不需要 */
```

- 群组选择器嵌套

```less
#nav,#wrap{
    a{
        color:red;
    }
}

/*编译后*/
#nav a{color:red;}
#wrap a{color:red;}
```

- 属性嵌套

```less
#nav{
    background:{
        image : "url(1.png)";
        repeat : repeat-x;
        position : center center;
    }
}
/* 编译后 */
#nav{
    background-image: "url(1.png)";
    background-repeat : repeat-x;
    background-position : center center;
}
```

- 注释

```less
/*sass*/
#nav{
    width:100px; /*这种注释在sass中是允许的，并且   会   出现在编译后的css文件中*/
    color:red; //这个单行注释在sass中是允许的，并且  不会  出现在编译后的css文件中
}

/* 在一条属性声明还没结束时使用注释，是   不会  出现在编译后的css文件中的 */
```

- 混合器

```less
/* 类似于多行属性定义变量 */
@mixin opa($val){
    opacity : $val;
    filter : alpha(opacity=$val*100);
}
#nav{
    @include opa(0.5);
}

/* 编译后 */
#nav{opacity:0.5;filter:alpha(opacity=50)}
```

