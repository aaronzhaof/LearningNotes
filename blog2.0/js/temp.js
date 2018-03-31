// 给左侧图片旁div添加鼠标进入和移出事件，让其在鼠标移出后不可见
// 给左侧图片旁div添加click事件，收回左侧侧栏，同时扩大中间内容栏范围。
$('.hid').on({
	mouseenter: function() {
		$('.hid>div').show();
	},
	mouseleave: function() {
		$('.hid>div').hide(600);
	},
	click: function() {
		var image = $('#left').css('width');
		if (image == '25px') {
			$('#left').css('width', '28%');
			$('.main > .left').css('width', '30%');
			$('.main > .middle').css('width', '50%');
			$('.main > .middle').css('marginLeft', '30%');
			$('.hid>div').css('background-image', 'url(image/ico1.jpg)');
		} else {
			$('#left').css('width', '25px');
			$('.main > .left').css('width', '25px');
			$('.main > .middle').css('width', '80%');
			$('.main > .middle').css('marginLeft', '25px');
			$('.hid>div').css('background-image', 'url(image/ico3.jpg)');
		}
	}
});


// 右下返回顶部按钮事件
$('#backTop').on(
	'click',
	function() {
		$('html,body').animate({
			scrollTop: 0
		}, 600);
	});



// 给中间内容的导航栏添加事件，当鼠标进入其中一个选项的时候，导航栏下方的下划线样式的div平移过去
//给导航栏添加click事件,当导航栏其中一个选项发生cilic事件时，下方的内容列表切换为所属内容列表。
function tran(eq) {
	var M = $('.middle').css('margin-left');
	var X = eq.find('a').offset().left - parseInt(M) - 15;
	var W = eq.find('a').css('width');
	$('.bar-container > .bar').css({
		transform: 'translateX(' + parseInt(X / 1) + 'px)',
		width: parseInt(W) + 30 + 'px',
		display: 'inline-block'
	});
}

$('.list > li').on('mouseenter', function(){
	return tran($(this));
});

// 匹配url和导航栏内选项的函数
function isNav(nav) {
	var url = window.location.href;
	return url.indexOf(nav);
}
// 这里是给导航栏添加一个mouseleave事件，在mouseleave事件发生的时候，让导航栏下方的下划线回到本页面
// 所属的分类选项中。
// 想了很久用什么方式检测当前页面所属的分类，想出了两个方案
// 		1. 在不同的分类所属页面的标签采用不同的颜色，然后根据颜色判断所属分类。
// 				但是这样做缺陷很明显，就是一旦想更换颜色值忘了该这里面的颜色参数，
// 				难以察觉。因此想换种方案。
// 		2. 第二种方案就是检测字符串了。用网页的url来匹配下方的分类选项。这里直接采用的内容筛选，
// 				就是只要 url 中有分类选项中的内容字符串组，就匹配成功。缺陷就是不能乱起文件名了（笑）
// 				但是总得来说比上面的颜色匹配要靠谱多了。以后想到什么再改进吧。
$('#nav-bar').on('mouseleave', function() {
	var li = $('.list li');
	for (var i = 0; i < li.length;i++) {
		console.log(i);
		var eq = $('.list > li:eq(' + i + ')');
		if (isNav(eq.text()) !== -1) {
			return	tran(eq);
		}else{
			url = new RegExp(window.location.href);
			 if(url.test('http://www.pursuezhao.cc/')){
				 i=0;
			 return	tran(eq);
			 }
		}

	}

})
