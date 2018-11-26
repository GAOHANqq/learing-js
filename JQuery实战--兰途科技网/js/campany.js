(function(){
    let $classic = $("#classic"),
        $ulList= $classic.find(".c-content .passage-list"),
        $tab = $classic.find(".c-tab ul li"),
        length = $ulList.length,
        index = $ulList.index()
    ;
    // 初始化
    $ulList.first().show();

    // 首页
    $tab.first().click(function(){
        $ulList.first().show().siblings().hide();
    });
    // 末页
    $tab.last().click(function(){
        $ulList.last().show().siblings().hide();
    });
    // 上一页
    $tab.parent().find(".prev").click(function(){
        index --;
        if(index <= 0) index = 0;
        $ulList.eq(index).show().siblings().hide();
    });
    // 下一页
    $tab.parent().find(".next").click(function(){
        index ++;
        if(index >= length) index = length;
        $ulList.eq(index).show().siblings().hide();
    });
})();
















