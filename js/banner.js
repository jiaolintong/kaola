let timer = null;
    let index = 0;
    let $ulist = $(".wrapper ul li");
    let $olist = $(".wrapper ol li");
    timer = setInterval( autoPlay , 1500);
    function autoPlay(){
        index++;
        if(index == $olist.size()){//size ==length
            index = 0;
        }
        $olist.eq(index).addClass("current").siblings().removeClass("current");
        $ulist.eq(index).fadeIn(1000).siblings().fadeOut(1000);
    }
    $olist.mouseenter(function(){
        clearInterval(timer);
        index = $(this).index()-1;
        autoPlay();
    }).mouseleave( function(){
        timer = setInterval(autoPlay , 1500);
    });
    //获取当前时间和结束时间
    var now=new Date();
    var end=new Date("2019-05-16 12:15:00");
//获取时间差
    var diff=(end.getTime()-now.getTime())/1000;
//获取神域点小时  分钟  秒
    showTime();//防止涮新闪屏
    function showTime(){
        if(diff<0){
            time.innerHTML="活动结束了";
            return;
        }
        var h=parseInt(diff/3600);
        var m=parseInt((diff-h*3600)/60);
        var s=parseInt((diff-h*3600-m*60));
        time.innerHTML=h+"小时"+m+"分钟"+s+"秒";
    }
    var timer1=setInterval(function(){
        diff--;
        if(diff<0){
            clearInterval(timer1);
            time.innerHTML="活动结束了";
        }else{
           showTime();
        }
    },1000)

/*
	 思路 ：
        1、点击左侧的楼层号  显示对应的楼层信息
        	操作当前点击的楼层号的高亮显示
        	点击不同楼层号  设置页面滚走的距离  为当前楼层距离内容窗口的top值
	 	2、点击 top  回到顶部
	 	3、操作滚动条显示对应的楼层号
	 */
	
	let  $list = $("#lnav li:not(.last)");//楼层号
	let  $topLi = $(".last");//回调顶部
	let  $floorDiv = $(".Louti");//楼层
	let flag = true;//假设值为true时  滚动条可以被操作
	$list.click(function(){
		flag = false;
		//当前的li高亮的显示
		$(this).find("a")
			   .addClass( "active" )
			   .end()
			   .siblings()
			   .find("a")
			   .removeClass( "active" );
		//获取当前操作的楼层号的下标
		let index = $(this).index();
		//根据下标获取对应的楼层
		let $floor = $floorDiv.eq( index );
		//获取该楼层相对于body的距离
		let bTop = $floor.offset().top;
		
		//设置页面滚走的距离 为 bTop
		$("body,html").animate( { scrollTop : bTop } , 1000 , function(){
			flag = true;
		} );
	})
	
	//回到顶部
	$topLi.click(function(){
		flag = false;
		$("body,html").animate( { scrollTop : 0 } , 1000 , function(){
			flag = true;
		} );
	})
	
	//操作滚动条显示对应的楼层号
	$(window).scroll( function(){
		if( flag ){
			//获取页面滚走的距离
			let sTop = $(document).scrollTop();
		
			//使用filter遍历每一个楼层 并返回满足某个条件的楼层
			// 条件: 某个楼层距离body的top值 - 页面滚走的距离 <　楼层高度/2
			let $fDiv = $floorDiv.filter( function(index){
				return Math.abs( $(this).offset().top - sTop ) < $(this).height()/2;
			} )
		
			//获取当前在可视区中高度最高的楼层的下标
			 let index = $fDiv.index()-2;
			//console.log(index);
			if( index != -3 ){
				//根据下标找到对应要高亮显示的楼层号
				$list.eq(index).find("a")
							   .addClass("active")
							   .end()
							   .siblings()
							   .find("a")
							   .removeClass("active");
			}
			if( sTop < 100 || sTop > ($floorDiv.eq(10).offset().top + 400) ){
				$list.find("a").removeClass("active");
			}
		}
	} )

		/*
	 思路：开始滚动条事件
	 	1、获取页面滚走的距离
	 	2、当这个距离大于头部的高度时  开始吸顶
	 	
	 */
	
	