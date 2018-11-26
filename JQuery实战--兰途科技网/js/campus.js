(function(){
    let $content  =$("#content"),
        $part = $content.find(".part"),
        index = 0

    ;
    // part1区域
    (function(){
        let $part1 = $part.first();
        // 设置part1的高度
        $(window).resize(part1H);
        part1H();

        function part1H(){
            $part1.height($(window).height()-parseFloat($content.css("margin")));
        };
    })();

    // part3区域
    (function(){
        // part3的自动轮播
        let $part3 = $part.eq(2),
            $img= $part3.find(".pic").children(),
            $li = $part3.find("ul li"),
            height = $part3.find(".pic").height(),
            timer
        ;

        // 初始化
        $li.eq(index).addClass("active");
        timer = setInterval(liClassName,3000);

        // li的点击事件
        $li.click(function(){
            clearTimeout(timer);
            index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $img.css("marginTop" , -height*index);
        });
        // 鼠标移除事件
        $li.parent().mouseleave(function(){
            clearTimeout(timer);
            timer = setInterval(liClassName,3000);
        });
        // 窗口改变事件
        $(window).resize(function(){
            clearTimeout(timer);
            timer = setInterval(liClassName,3000);
        });

        // 变化函数
        function liClassName(){
            index ++;
            index %= $li.length;
            $li.eq(index).addClass("active");
            $li.eq(index-1).removeClass("active");
            $img.stop().animate({
                "marginTop" : -height*index
            },300);
        }


    })();

    // 每个part的点击事件
    (function(){
        let $next = $content.find(".next"),
            scrollTop
        ;
        $next.click(function(){
            index = $(this).parents(".part").index(".part"),
            scrollTop = $part.eq(index+1)
                .offset().top -($(window).height()-$part.eq(index+1).height()+71)/2;
            $("body,html").animate({
                scrollTop : scrollTop
            },800);
        });
    })();

})();
















