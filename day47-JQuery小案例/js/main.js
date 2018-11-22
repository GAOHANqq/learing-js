(function(){

    // 移入移出事件
    (function(){

        let $navUl = $("#header").find(".nav ul"),
            $navLi = $navUl.find("li"),
            $border = $("#border")
        ;
        let bWidth = $border.width(),
            bLeft = $border.position().left,
            w_ = bWidth - $navLi.eq(0).width(),
            l_ = bLeft - $navLi.eq(0).position().left
        ;
        // 移入事件
        $navLi
            .mouseenter(function(){
                $border.stop().animate({
                    width : $(this).width() + w_,
                    left : $(this).position().left + l_
                },200);
            });

        // 离开事件
        $navUl
            .mouseleave(function(){
                $border.stop().animate({
                    width : bWidth,
                    left : bLeft
                },200)
            });
    })();

    // 全屏滚动事件
    (function(){
        let $bg = $("#bg"),
            $sideLi = $("#side").find("li"),
            windowH = 0,
            index = 0,
            wheelTime = 0,
            length = $sideLi.length
        ;
        // 当前窗口的高度
        function getWH(){
            windowH  = $(window).height();
            $bg.css("marginTop",-index * windowH + "px");
        };
        getWH();
        $(window).resize(getWH);

        // 点击事件
        $sideLi.click(function(){
            index  = $(this).index();
            change();
        });

        // 滚轮事件
        $(document).mousewheel(function(e,d){
            if( new Date() - wheelTime < 500) return;
            wheelTime = new Date();
            if( d < 0 ){
                index ++;
                index %= length;
            }else{
                index --;
                if(index<0){
                    index=length-1
                }
            }
            change();
        });
        // 变化函数
        function change(){
            $sideLi.eq(index).addClass("on").siblings().removeClass("on");
            $bg.stop().animate({
                marginTop : -index * windowH
            },400);
        }
    })();

})();
















