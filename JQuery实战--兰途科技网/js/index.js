(function(){

    // banner区域
    (function(){
        let $banner = $("#banner"),
            $tab = $banner.find(".b-tab li"),
            $bg = $banner.find(".b-part .part"),
            $videoControl = $banner.find(".b-part .part1 .img2 .video"),
            $video = $videoControl.children(),
            index = 0,
            length = $tab.length,
            timer
        ;
        // index变化
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

        // tab点击事件
        $tab.click(function(){
            clearInterval(timer);
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

        // 播放视频
        $videoControl.click(function(){
            $video.show();
        });
		$video.on("ended",function(){
			$(this).hide();
			$videoControl.show();
		});
    })();

    // classic区域
    (function(){
        let $classic = $("#classic"),
            $ul = $classic.find(".c-content .c-pic ul"),
            $li = $ul.children(),
            $btn = $classic.find(".c-pic .c-btn .btn"),
            $tab = $classic.find(".c-content .c-tab ul li"),
            width = $li.first().width(),
            length = $li.length,
            midIndex = Math.floor(length/2),
            clickTime = 0,
            sumWidth = 0,
            timer
        ;
        changeClassName();
        setTimeout(function(){
            sumWidth = 0;
            $li.each(function(){
                sumWidth += $(this).width();
            });
            $ul.css({
                "marginLeft":-sumWidth/2,
                "opacity" : 1
            });
            $tab.eq(midIndex).addClass("mid");

        },300);

        $(window).resize(function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                sumWidth = 0;
                width = $ul.children().first().width();
                $li.each(function(){
                    sumWidth += $(this).width();
                });
                $ul.stop().animate({"marginLeft":-sumWidth/2},300);
            },300);
        });

        // 左右按钮事件
        $btn.click(function(){
            if(new Date() - clickTime < 350) return;
            clickTime = new Date();
            if( $(this).index() ){
                midIndex ++;
                midIndex %= length;
                $ul.stop().animate({
                        "marginLeft" :  -sumWidth/2 - width
                },300,function(){
                    $(this)
                        .css("marginLeft",-sumWidth/2)
                        .append($(this).children().first());
                });

            }else{
                midIndex --;
                if( midIndex<0 ){
                    midIndex = length - 1;
                }
                $ul.stop().animate({
                        "marginLeft" : -sumWidth/2 + width
                },300,function(){
                    $(this)
                        .css("marginLeft",-sumWidth/2)
                        .prepend($(this).children().last());
                });
            }
            changeClassName();
        });

        // 变化函数
        function changeClassName(){
            let [a,b,c] = [midIndex,midIndex+1,midIndex-1];
            if(b>=length) b=0;
            if(c<0) c=length-1;
            $tab.removeClass("active");
            $li.removeClass("mid side");
            $li.eq(a).addClass("mid");
            $li.eq(b).addClass("side");
            $li.eq(c).addClass("side");
            $tab.eq(midIndex).addClass("active");
        }



    })();

})();
















