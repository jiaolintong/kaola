//json参数中 存储多个属性attr和目标值target
function startMove(obj,json,callback){
	clearInterval( obj.timer );//为了防止频繁操作按钮时  运动加速的问题
	obj.timer = setInterval( () => {
		var flag = true;//假设循环结束后 值为true 表示所有动作都结束了 可以停止定时器了
		for( var attr in json ){
			//获取当前运动元素的实际样式值  （非行内样式  getComputedStyle）
			var current = 0;
			if( attr == "opacity" ){
				current =  getStyle( obj , attr ) * 100;
			}else{
				current = parseInt( getStyle( obj , attr ) );
			}
			var speed = (json[attr] - current)/10;
			speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );
			if( current != json[attr] ){//说明运动没有结束
				flag = false;
			}
			
			//运动没有结束 需要继续设置该元素的样式
			if( attr == "opacity" ){
				obj.style[attr] = (current + speed)/100;
			}else if( attr == "zIndex" ){
				obj.style[attr] = json[attr];//直接达到目标值就可以
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
		
		//循环结束后 判断 flag的值是否为 true
		if( flag ){
			clearInterval( obj.timer );
			//上一个动作完成了 就进入到下一个动作 可变的动作 
			if( callback ){
				callback();//调用下一个功能
			}
		}
	} , 30 )
}


//封装一个函数  功能是获取任意一个元素非行内样式值
function getStyle(obj,attr){
	//兼容
	if( getComputedStyle ){
		return window.getComputedStyle(obj)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}