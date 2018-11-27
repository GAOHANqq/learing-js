(function(){
    let $classic  =  $("#classic"),
        $ul = $classic.find(".c-content"),
        ulIndexWidth = $ul.width()
    ;

    $(window).resize(function(){
        let ulWidth = $(window).width() - $classic.width()/5;
        $ul.width( $(window).width() <= 1000 ? ulWidth : ulIndexWidth );
    });

})();

































