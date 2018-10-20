
/*
* 运动框架的描述:
* param:    ele - object    必须 表示要进行运动的节点
*           attr - string   必须 表示要改变的css属性
*           target - number 必须 表示属性的终点值
*           step - number   选填 表示运动速度 正数 默认为5
* return:   undefined
*
*
*
*       console.log( getComputedStyle(ele) );
        console.log( ele.currentStyle );   该属性只有IE有,要兼容IE8时,用currentStyle获取所有的css属性的值
        getComputedStyle 方法返回一个对象     IE8不兼容
        该对象在应用活动样式表并解析元素的所有CSS属性的值

        兼容写法(使用了let,需要babel转义之后才可以发布运行)
*
*
*
*
*/
window.Move = function(){
    //  requestAnimationFrame的兼容
    window.requestAnimationFrame = requestAnimationFrame || function f(x){return setTimeout(x,1000/60)};
    window.cancelAnimationFrame  = cancelAnimationFrame  || clearTimeout;

    return function (ele,attr,target,step=5) {
        let cssObj = ele.currentStyle || getComputedStyle(ele);//兼容写法
        let startVal = parseFloat(cssObj[attr]);

        //  opacity的兼容
        if(attr === "opacity" && isNaN(attr)){
            startVal = 1;
        }
        //初始值与目标值的判断
        let bool = startVal>target;

        if(startVal>target){
            step = -Math.abs(step);
        }else if(startVal<target){
            step = Math.abs(step);
        }else{
            return;
        }



        !function fn(){

            startVal += step;

            //判断是否到达目标值
            let tBool = bool?startVal <= target:startVal >= target;

            startVal = tBool?target:startVal;

            if(attr === "opacity"){
                ele.style.opacity= startVal;
                ele.style.filter = "alpha(opacity="+startVal*100+")";// IE8兼容
            }else if(attr === "zIndex"){
                ele.style.zIndex = startVal;
            }else{
                ele.style[attr] = startVal + "px";
            }


            tBool || requestAnimationFrame(fn);

        //上面是对下面的代码优化

            // if(bool?startVal <= target:startVal >= target){
            //     ele.style[attr] = target + "px";
            // }else{
            //     ele.style[attr] = startVal + "px";
            //     requestAnimationFrame(fn);
            // }

        }();

    }
}();

















