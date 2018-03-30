## 事件处理程序
事件就是用户或浏览器自身执行的某种动作。如click、load和mouseover，都是事件的名字。而响应某个事件的函数就叫做事件处理程序。事件处理程序的名字以"on"开头，因此click事件处理程序就是onclick,load事件的事件处理程序就是onload。为事件指定处理程序的方式有好几种。
## DOM 0级事件处理程序
先把节点取出来，再把事件以对象属性的方式赋值给目标节点例子如下：
```
<div id='demo'></div>


var demo =document.getElementById('demo');
demo.onclick=function(){
	alert('这是DOM0级添加的事件');
}

demo.onclcik=null //通过给对象属性赋值为null的方式可以清除事件函数。
```
DOM0级相对于每个事件只支持一个事件处理程序。

## DOM 2级事件处理程序
DOM2级事件定义了两个方法
用于处理指定和删除事件处理程序的操作:<br>
<code>addEventListener()和removeEventListner()</code>。
addEventListener()接受三个参数：要处理的事件名、作为事件处理程序的函数和布尔值。<br>
设置布尔值true表示在捕获阶段调用处理程序，false表示在冒泡阶段调用处理程序。一般设置为false,用以兼容各大浏览器。

removeEventLister()用于删除事件处理程序，用removeEventLister()删除事件处理程序的时候，必须传入添加事件的时候传入的一模一样的三个参数。
并且用addEventLister()添加的事件只能使用removeEventLister()函数来删除。<br>

在DOM2级事件处理程序中，可以通过addEventListener()函数给一个事件添加多个处理程序。
## IE事件处理程序
上面的DOM2级事件处理程序是现代浏览器所支持的方法，而IE8及以下的版本是不支持的，IE8及以下版本拥有自己的事件处理程序:
```
attachEvent();
detachEvent();
```
这两个方法接受相同的两个参数：事件处理程序名称与事件处理程序函数。由于IE8及更早版本只支持事件冒泡，所以通过attachEvent()添加的事件处理程序都会被添加到冒泡阶段。
要使用attachEvent()为按钮添加一个事件处理程序，可以使用以下代码：
```
var btn = document.getElementById('myBtn');
btn.attachEvent('onclick',function(){
	alert('click');
	});
```
注意，attachEvent()的第一个参数是"onclick",而非DOM的addEventListener()方法中的“click”。


<b>在使用DOM0级方法的情况下，事件处理程序会在其所属元素的作用域内运行；在使用attachEvent()方法的情况下，事件处理程序会在全局作用域中运行，因此this等于window。如下：</b>
```
var btn=document.getElementById('myBtn');
btn.attachEvent('onclcik',function(){
	alert(this===window); //true
	});
```
使用addachEvent()添加的多个事件不是以添加它们的顺序执行，而是以相反的顺序被触发。

为了让更好的兼容浏览器，我们可以封装一个对象视情况使用DOM0级方法、DOM2级方法或IE方法来添加或删除事件。
```
var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	},
	removeHandler:function(elemnt,type,handler){
		if(element.removeEventListener){
			element.removeEvenetListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on" + type,hanler);
		}else{
			element["on" + type]=null;
		}
	}
};
```
