//根据id获取元素
function $id(id){
	return document.getElementById(id);
}
//创建一个元素
function createEle(ele){
	return document.createElement(ele);
}
//获取任意区间内的整数值
function rand(min,max){
	//返回一个[min,max]区间内的随机的整数值
	return Math.round( Math.random()*(max-min) + min );
}

//获取六位十六进制随机颜色值
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";//存储颜色值
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}

//颜色值
function getColor2(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}

//封装一个函数 功能是 将日期转成字符串 显示自定义的时间格式
function dateToString(d){
	var y = d.getFullYear();
	var m =toTwo(  d.getMonth() + 1 );
	var d1 =toTwo( d.getDate() );
	
	var h = toTwo( d.getHours() );
	var mi =toTwo(  d.getMinutes() );
	var s = toTwo( d.getSeconds() );
	
	return y+"-"+m+"-"+d1+" "+h+":"+mi+":"+s;
}
//如果str小于10  前面拼接一个0
function toTwo(str){
	return str < 10 ? "0" + str : str;
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