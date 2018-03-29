---
title: CSS选择权重
date: 2018-03-08 19:04:19
tags:
---
# CSS选择器

## 1\. 什么是CSS选择器？

有效且结构良好的文档为你要应用的样式提供了一个框架。要想使用CSS将样式应用于特定的HTML元素，需要想办法找到这个元素。在CSS中，执行这一任务的样式规则部分称为 _选择器 (selector)_

## 2\. 常用的选择器

最常用的选择器类型是**类型选择器**和**后代选择器**。类型选择器用来寻找特定类型的元素，如段落或标题元素，只需指定希望应用样式的元素的名称。代码实例：

```
p {color:black;}
h1 {font-weight: bold;}
```

后代选择器可用来寻找特定元素或元素组的后代。后代选择器由其他两个选择器之间的空格表示。代码示例：

```
div p {padding-left: 2em;}
```

在以上示例中，只缩进是块引用的后代的段落元素，其他所有段落不受影响。

上面的类型选择器和后代选择器适合于应用范围广的一般性样式。要想寻找更特定的元素，可以使用 **ID选择器** 和 **类选择器**。这两种选择器用于寻找那些具有指定ID或者类名的元素。 其中具有ID的元素是具有**唯一性**的，而拥有类名的元素可以有多个。ID选择器由一个 **#** 字符表示，类选择器由一个点号表示。下面实例中的第一条规则使简介段落中的文本以粗体显示，第二条规则让两个日期显示为绿色：

```
#intro {font-weight:bold;}
.date-posted {color: #ccc;}

<p id="intro">I am you</p>
<p class="date-posted">2018/2/3</p>
<p class="date-posted">2018/3/3</p>
```

## 3\. 伪类

有时候，我们需要更具文档结构之外的其他条件对元素应用样式，例如表单元素或链接的状态。这要使用 **伪类选择器** 来完成.例如以下链接的状态选择：

```
a:link {color:#FF0000;}        /* 未被访问的链接 */
a:visited {color:#00FF00;}    /* 已被访问的链接 */
a:hover {color:#FF00FF;}    /* 鼠标指针移动到链接上 */
a:active {color:#0000FF;}    /* 正在被点击的链接 */
```

当为链接的不同状态设置样式时，请按照以下次序规则：

- a:hover 必须位于 a:link 和 a:visited 之后
- a:active 必须位于 a:hover 之后

## 4\. 通用选择器

通用选择器的作用就像通配符，它匹配所有可用元素。通用选择器由一个星号表示。通用选择器用来对页面上的所有元素应用样式。例如，可以用一下规则删除每个元素上默认的浏览器内边距和外边距：

```
*{
    padding: 0;
    margin: 0;
}
```

在与其他选择器结合使用是，通用选择器可以用来对每个元素的所有后代应用样式，或者跳过一级后代。

## 5\. 子选择器和相邻同胞选择器

后代选择器选择一个元素的所有后代，而子选择器只选择元素的直接后代，即 **子元素** 。在下面的示例中，外层列表左内边距设为40px，而嵌套列表中的列表项不受影响：

```
#nav>li{
    padding-left: 40px;
}
#nav > li >  a{
    text-decoration: none;
    color: red;
}

<ul id="nav">
    <li><a href="/home/">Home</a></li>
    <li><a href="/services/">Services</a>
        <ul>
            <li><a href="/services/design/">Design</a></li>
            <li><a href="/services/development/">Development</a></li>
        </ul>
    <li><a href="/contact/">Contact</a></li>
</ul>
```

相邻选择器用于根据一个元素与另一个元素的相邻关系对它应用样式。示例代码如下：

```
ul + p{
    font-size: 1.4em;
    font-weight: bold;
    color: red;
}

<ul>
    <li>CSS</li>
    <li>HTML</li>
</ul>
<p>JavaScript</p>
```

## 6\. 属性选择器

属性选择器可以根据某个属性是否存在或属性的值来寻找元素。 示例：

[attribute] | [target] | 选择带有 target 标签的所有元素
----------- | -------: | :-----------------:
[attribute=value] | [target=_blank] | 选择 target="_blank" 的所有元素。
[attribute~=value] | [title~=flower] | 选择 title 属性包含单词 "flower" 的所有元素。
