
(function(){
    var $more = $("#header .more");
    var $tab = $("#banner").find(".b-tab li");
    var $bg = $("#banner").find(".b-part .part");
    var index = 0;
    var length = $tab.length;

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
    setInterval(function(){
        index ++;
        if( index === length-1  ){
            index = 0;
        }
        change(index);
    },3000)

    // 变化函数
    function change(index){
        $tab.eq(index).addClass("active").siblings().removeClass("active");
        $bg.eq(index).show().siblings().hide();
    }
})();
















