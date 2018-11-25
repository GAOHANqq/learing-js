(function(){
    let $content  =$("#content"),
        $part = $content.find(".part"),
        $next = $content.find(".next"),
        $part1 = $content.find("#part1"),
        index = 0,
        length = $part.length;
    ;
    // part1的高度
    $(window).resize(part1H);
    part1H();
    function part1H(){
        $part1.height($(window).height()-parseFloat($content.css("margin")));
    };

    // next的点击事件
    $next.click(function(){
        index = $(this).index();
        $part.eq( index+1 ).slideDown(300).end().eq( index).slideUp(300);
    });
})();
















