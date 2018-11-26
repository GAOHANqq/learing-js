(function(){
    let $classic  =  $("#classic"),
        $ul = $classic.find(".c-content"),
        $img = $ul.find("li img"),
        ulIndexWidth = $ul.width(),
        imgIndexWidth = $img.width()

    ;


    $(window).resize(function(){
        let ulWidth = $(window).width() - $classic.width()/5,
            imgWidth = $(window).width()-$img.width()/2
            // imgHeight = $(window).width()- $img.height()
        ;
        $ul.width( $(window).width() <= 1000 ? ulWidth : ulIndexWidth );
        $img.width( $(window).width() <= 650 ? imgWidth : imgIndexWidth );
    });

})();
















