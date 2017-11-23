var images = [
	"img/2.jpg",
	"img/3.jpg",
	"img/4.jpg",
	"img/5.jpg",
	"img/6.jpg",
	"img/7.jpg",
	"img/8.jpg",
	"img/9.jpg",
	"img/10.jpg",
	"img/11.jpg",
	"img/12.jpg",
	"img/13.jpg",
	"img/14.jpg",
	"img/15.jpg",
	"img/16.jpg",
	"img/17.jpg",
	"img/18.jpg",
	];
$(images).each(function(){
$('<img/>')[0].src = this;
});
var index = 0;
$.backstretch(images[index], {spead:800});//渐隐速度设置
setInterval(function(){
index = (index >= images.length - 1) ? 0 : index + 1;
$.backstretch(images[index]);
}, 30000); //轮换速度设置
