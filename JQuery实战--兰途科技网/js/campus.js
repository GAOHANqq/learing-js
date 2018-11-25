(function(){
    let $content  =$("#content"),
        $part1 = $content.find("#part1")
    ;
    $(window).resize(part1H);
    part1H();
    function part1H(){
        $part1.height($(window).height()-parseFloat($content.css("margin")));
    };



})();
















