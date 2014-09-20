$(function(){

	if($('html').hasClass('ie6'))
	{
		alert('您的浏览器版本太低了，建议您升级您的浏览器！');
		window.location.href = 'http://rj.baidu.com/soft/lists/3';
	}

	globalEvn.init();
});

var globalEvn = {
	gLoad:function(){
		// 公共部分js，如导航
	},
	init:function(){
		this.gLoad();
	}
};