React的<code>createElement()<code>方法获得元素的说明并返回简单的JavaScript对象
<br><br>

React的<code>createElement(type, props, content)</code>方法接受三个参数。<br>

第一个参数<code>type</code>接收的是节点的类型，如 div 或者 ul等<br>

第二个参数<code>props</code>接收的是节点的属性， 组件的属性可以接受任意值，字符串、对象、函数等等都可以。
创建属性时使用的是键值，如 <code>className:'demo'</code>
注意，因为React本身是JS，而<code>code</code>在es6中被列为关键字,我们写React代码时是在JS脚本中写的，所以创建类名的时候要用<code>className</code>而不是<code>class</code>。<br>

第三个参数<code>content</code>接收的是节点中具体的内容。

<b>在创建这些节点的时候，我们在描述DOM节点的对象，而非HTML字符串。</b>

<b>使用<code>creatElement()</code>方法时，并没有真正的创建这个节点，只是描述出了他的内容，只有使用<code>render()</code>方法时，才会在HTML文档中把这个节点加入进去。</b>

<code>this.props</code>对象的属性与组件的属性一一对应，但是有一个例外，就是<code>this.props.children</code>属性。他表示组件的所有子节点。

<b>要注意的是，<code>this.props.children</code>的值有三种可能：如果当前组件没有子节点，他就是<code>undefined</code>;如果有一个子节点，数据类型是<code>object</code>;如果有多个子节点，数据类型就是<code>array</code>。所以，处理<code>this.props.children</code>的时候要小心。</b>

有时，我们需要验证一种机制，验证别人使用组件时，提供的参数是否符合要求<code>PropTypes</code>属性，就是用来验证组件实例的属性是否符合要求。

组件的生命周期分成三个状态:<br>
<li>Mounting:已插入真实DOM</li><br>
<li>Updating:正在被重新渲染</li><br>
<li>Unmounting:已移出真实DOM</li><br>

React为每个状态都提供了两种处理函数，<code>will</code>函数在进入状态之前调用,<code>did</code>函数在进入状态之后调用，三种状态共计五种处理函数。
<li>componentWillMount()</li><br>
<li>componentDidMount()</li><br>
<li>componentWillUpdate(object nextProps,object nextState)</li><br>
<li>componentDidUpdate(object prevProps, object prebState)</li><br>
<li>componentWillUnmount()</li><br>

<b>
注意！组件的style属性的设置方式不能使用html的语法，如</b>

```
style="opacity:{this.state.opacity};"</b>
```
<b>要用下面的写法:</b>
```
style={{opacity: this.state.opacity}}
```
<b>这是因为React组件样式是一个对象，所以第一重大括号表示这是JavaScript语法，第二重大括号表示样式对象
</b>
