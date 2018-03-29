## CSS3新增选择器
css3选择器是在css2.0的基础上的修改创新。他增加了一些UI元素状态伪类选择器、结构伪类选择器、属性选择器等。

### 结构伪类选择器
#### <code>:first-child</code>
<code>:first-child</code>是用来选择某个元素的第一个子元素。语法如下：
```
element:first-child{background-color: #fff;}
```

在这个选择器出现之前，我们只能通过给第一个子元素加上与其他元素不同的class名来给他应用不同的样式。<br>
虽然这两种最终效果是一样的，只是后面这种，我们需要在html增加一个额外的class名，前一种就不需要。我们应当避免在每一个元素前都加上类名。

#### <code>:nth-child</code><br>
<code>:nth-child</code>可以轻松选区你想要的标签并修改添加样式。
- <code>:nth-child(num)</code>选取元素集合中的某个元素，'num' 表示元素在集合中的顺序，不是元素在集合中的下标值，因此是从1开始的。例如：
```
.list li:nth-child(2){background-color:#000;}
```
上面代码会将列表中第2个li背景设为黑色。

- <code>:nth-child(n+num)</code>选取大于等于'num'的标签，n表示从整数，下同。示例：
```
.list li:nth-child(n+2){background-color:blue;}
```
上面的代码会将列表中顺序大于等于2的标签背景设置为蓝色。

- <code>:nth-child(-n+num)</code>选取小于等于'num'的标签
```
.list li:nth-child(-n+2){background-color:yellow;}
```
上面的代码会将列表中顺序小于等于2的标签背景设为黄色。

- <code>:nth-child(2n)</code>选取顺序为偶数的标签
```
.list li:nth-child(2n){background-color:red;}
```
上面的代码会将列表中顺序为偶数的标签背景设为红色。其中的'2n'替换为'even'也可以。

- <code>:nth-child(2n-1)</code>选取顺序为奇数的标签。
```
.list li:nth-child(2n-1){background-color:pink;}
```
上面的代码会将列表中顺序为奇数的标签背景设为粉色。其中的'2n-1'也可以替换为'odd'也可以。<br>

前后两个数字都必须为整数。且根据前后两个整数的不同，这个选择器的选择方式也不同，以上为常用方式，有兴趣的朋友可以自行探索。

#### <code>:empty</code>
<code>:empty</code>匹配没有子元素的元素。这个选择器匹配的元素中除了注释以外，不能有任何的内容。包括文本节点或者空的子节点。示例如下：
```
div:empty{background-color:red;}
```
上面的代码会将没有子元素的div节点背景设为红色。

### 同级元素通用选择器
在使用 ~ 链接两个元素时，他会匹配第二个元素，条件是他们必须是同级元素，拥有一个共同的父元素。示例如下：
```
div ~ ul{padding-left:2px;}
```
上面的代码会将和div同级的ul元素左内边距设为2px。

### 反选伪类
<code>:not(X)</code>,是以一个X选择器为参数的功能性标记函数。它匹配不符合参数选择器X描述的元素。X不能包含另外一个否定选择器。
