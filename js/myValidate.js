requirejs.config({
	paths : {
		jquery : "jquery-1.11.3",
		vd : "validate"
	}
})

requirejs( ["vd" , "jquery"],function(vd,$){
	//验证实现 ： 
	$("form").submit(function(){
		if( flagName && flagPwd && flagQpwd ){
			return true;
		}
		
		return false;
	})
	
	//用户名
	let flagName = null;
	$("#uname").blur(function(){
		if( vd.checkName( $(this).val() ) ){
			flagName = true;
			$("#s1").html( "ok" );
		}else{
			$("#s1").html( "请写入正确的手机号" );
			flagName = false;
		}
	})
	
	//密码 
	let flagPwd = null;
	$("#upwd").blur(function(){
		if( vd.checkPwd( $(this).val() ) ){
			flagPwd = true;
			$("#s2").html( "ok" );
		}else{
			$("#s2").html( "至少六位" );
			flagPwd = false;
		}
	})
	//确认密码
	let flagQpwd = null;
	$("#verification").blur(function(){
		//console.log($(this).val(),$("#upwd").val() )
		if(  $(this).val()==$("#upwd").val()  ){
			flagQpwd = true;
			$("#s3").html( "ok" );
		}else{
			$("#s3").html( "请输入正确密码" );
			flagQpwd = false;
		}
	})
} )
