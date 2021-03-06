---
title: CSS选择权重
date: 2018-03-08 18:58:19
tags:
---
# 什么是CSS选择器权重？

即使在不太复杂的样式表中，要寻找同一元素可能有两个或者更多规则，当同一元素被多个不同来源的样式规则设置了样式后，如何处理样式规则的冲突，显示元素最后的样式，用到的计算规则就是CSS选择器的权重规则。

根据选择器的特殊性决定规则的次序。具有更特殊选择器的规则优先于具有一般选择器的规则。如果两个规则的特殊性相同，那么后定义的规则优先。

## 特殊性

为了计算规则的特殊性，给每种选择器都分配一个数字值。然后，将规则的每个选择器的值加在一起，计算出规则的特殊性。特殊性的计算不是以10为技术的，而是采用一个更高的未指定的基数。这能确保非常特殊的选择器（比如ID选择器）不会被大量一般选择器（比如类型选择器）所超越。但是，为了简化，如果在一个特定选择器中的选择器数量少于10个，那么可以以10为基数计算特殊性。

选择器的特殊性分成4个成分等级：a, b, c 和 d。

- 如果样式是行内样式，那么a=1

- b等于ID选择器的总数

- c等于类,伪类和属性选择器的数量

- d等于类型选择器和伪元素选择的数量

使用这些规则可以计算任何CSS选择器的特殊性。下面的表格给出了一系列选择器以及相应的特殊性。

选择器                  |     特殊性 | 以10为技术的特殊性
-------------------- | ------: | :--------:
Style=" "            | 1,0,0,0 |    1000
#wrapper #content {} | 0,2,0,0 |    200
#content .name {}    | 0,1,1,0 |    110
div#ontent {}        | 0,1,0,1 |    101
#content {}          | 0,1,0,0 |    100
p.comment .name {}   | 0,0,2,1 |     21
p.comment {}         | 0,0,1,1 |     11
div p {}             | 0,0,0,2 |     2
p {}                 | 0,0,0,1 |     1

## 用style属性编写的规则总是比其他任何规则特殊。具有ID选择器的规则比没有ID选择器的规则特殊，具有类选择器的规则比只有类型选择器的规则特殊。如果两个规则的特殊性相同，那么后定义的规则优先。
