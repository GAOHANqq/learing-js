
(function(){
    // header区域
    (function(){
        var $more = $("#header .more");

        // 更多的点击事件
        $more.click(function(){
            $(this).find(".more-hide").toggle();
        });
    })();

    // banner区域
    (function(){
        var $banner = $("#banner")
        var $tab = $banner.find(".b-tab li");
        var $bg = $banner.find(".b-part .part");
        var index = 0;
        var length = $tab.length;
        var timer;

        // tab点击事件
        $tab.click(function(){
            index  = $(this).index();
            change(index);
        });

        // 轮播
        timer = setInterval(changeIndex,3000);
        $banner.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(changeIndex,3000);
        })

        function changeIndex(){
            index ++;
            index %= length;
            change(index);
        }
        // 变化函数
        function change(index){
            $tab.eq(index).addClass("active").siblings().removeClass("active");
            $bg.eq(index).fadeIn(500).siblings().fadeOut(500);
        }
    })();

    // classic区域
    (function(){
        var $classic = $("#classic");
        var $li = $classic.find(".c-content .c-pic li");
        var $btn = $classic.find(".c-pic .c-btn .btn");
        var length = $li.length;

        var midIndex = Math.floor(length/2);


        $li.each(function(){
            var index = $(this).index();
            $li.eq(midIndex).addClass("mid");
            $li.eq(midIndex-1).addClass("side");
            $li.eq(midIndex+1).addClass("side");
            $(this).css({
                "left" : 200*index + "px"
            })
        })
    })();

})();
















