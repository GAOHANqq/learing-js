
(function(){
    var $more = $("#header .more");
    var $banner = $("#banner")
    var $tab = $banner.find(".b-tab li");
    var $bg = $banner.find(".b-part .part");
    var index = 0;
    var length = $tab.length;
    var timer;

    // 更多的点击事件
    $more.click(function(){
        $(this).find(".more-hide").toggle();
    });

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
















