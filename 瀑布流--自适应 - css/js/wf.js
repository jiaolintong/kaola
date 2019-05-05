window.onload = function(){
	//获取要操作的所有的图片
	let $divs = $("#wrap div");
	//获取一张图片的宽度
	let imgWidth = $divs.eq(0).outerWidth();
	
	let positionArr = [];//[{left:   ： top},{},{},...]
	window.onresize = function(){
		waterFall()
	}
	
	waterFall();
	function waterFall(){
		//获取浏览器的宽度
		let winWidth = window.innerWidth;
		//确定列数 ： 
		let colCount = Math.floor(winWidth / imgWidth);
		
		
		//确定间隙宽度
		let spaceWidth = parseInt( (winWidth - colCount*imgWidth)/(colCount+1) );
		
		console.log( winWidth  , imgWidth , colCount , spaceWidth )
		//确定每一个列的left和top值 存入到数组中 
		
		let json = {};
		for( let n = 1 ; n <= colCount ; n++ ){
			json = {
				left : n*spaceWidth + (n-1)*imgWidth ,
				top : 10
			}
			positionArr.push( json );
		}
		
		//开始从数组中取数据 定位每一张图片
		console.log( positionArr )
		for( let i = 0 ; i <　$divs.size() ; i++ ){
			let index = getMinTopIndex(); //获取最小top值的下标
			$divs.eq(i).animate( {
				left : positionArr[index].left,
				top :  positionArr[index].top
			},300 )
			
			//改变 index所在的数组中的对象的top
			positionArr[index].top +=  $divs.eq(i).height() + 10;
		}
	}
	
	// 获取数组中每一个对象的最小的top值
	function getMinTopIndex(){
		let index = 0;//假设最小的top值下标是0
		for( let i = 0 ; i < positionArr.length ; i++ ){
			if( positionArr[index].top > positionArr[i].top ){
				index = i;
			}
		}
		return index;
	}
	
}
