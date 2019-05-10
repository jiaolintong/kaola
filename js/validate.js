//定义模块功能
define(function(){
	return {
		checkName : function(str){ //验证用户名
			let reg = /^1[3578]\d{9}$/;
			if( reg.test( str ) ){
				return true;
			}else{
				return false;
			}
		},
		checkPwd : function(str){ //验证密码
			let reg = /^.{6,}$/;
			if( reg.test( str ) ){
				return true;
			}else{
				return false;
			}
		},
		checkQpwd : function(str){ //确认密码
			let reg = /^.{6,}$/;
			if( reg.test( str ) ){
				return true;
			}else{
				return false;
			}
		}
	}
})