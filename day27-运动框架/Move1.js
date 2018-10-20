"use strict";
// babel转义后的JS
window.Move = function () {
    //  requestAnimationFrame的兼容
    window.requestAnimationFrame = requestAnimationFrame || function f(x) {
        return setTimeout(x, 1000 / 60);
    };
    window.cancelAnimationFrame = cancelAnimationFrame || clearTimeout;

    return function (ele, attr, target) {
        var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

        var cssObj = ele.currentStyle || getComputedStyle(ele); //兼容写法
        var startVal = parseFloat(cssObj[attr]);

        //  opacity的兼容
        if (attr === "opacity" && isNaN(attr)) {
            startVal = 1;
        }
        //初始值与目标值的判断
        var bool = startVal > target;

        if (startVal > target) {
            step = -Math.abs(step);
        } else if (startVal < target) {
            step = Math.abs(step);
        } else {
            return;
        }

        !function fn() {

            startVal += step;

            //判断是否到达目标值
            var tBool = bool ? startVal <= target : startVal >= target;

            startVal = tBool ? target : startVal;

            if (attr === "opacity") {
                ele.style.opacity = startVal;
                ele.style.filter = "alpha(opacity=" + startVal * 100 + ")"; // IE8兼容
            }else if(attr === "zIndex"){
                ele.style.zIndex = startVal;
            }else {
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
    };
}();