# hand-written-source
手写源码系列

### 一、[手写`Promise`](MyPromise/README.md)
Promise 是异步编程的解决方案，主要解决各种回调函数和回调事件。 

### 二、[防抖（`debounce`）和节流（`throttle`）](debounceAndThrottle/README.md)
##### 防抖 
在时间被触发n秒后再执行回调，如果在n秒内又被触发，则重新计时。
##### 节流
规定在单位时间内，只能触发一次函数

### 三、[手写 `new` 操作符](MyNew.js)
new 操作符做了这些事：

1、创建一个全新的对象

2、它会被执⾏行行 (也就是 `__proto__` )链接。

3、它使 this 指向新创建的对象。

4、通过new创建的每个对象最终被`[[prototype]]`链接到函数的 `prototype` 对象上。

5、如果对象没有返回对象类型Object（包含Function，Array，Date，RegExp，Error），那么new 表达式的函数将返回该对象引用。

### 四、[手写`JSON.stringify`](json-stringify.js)
1、类型会自动转换成对应的原始值。

2、undefined、任意函数以及symbol，会被忽略略(出现在⾮非数组对象的属性值中时)，或者被转换
  成 null  (出现在数组中时)。
  
3、不可枚举的属性会被忽略。

4、如果⼀个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。

### 五、[手写`JSON.parse`](json-parse.js)
1、用来解析json字符串，构造由字符串描述的javascript值或者对象。提供可选的reviver函数⽤以在返回之
前对所得到的对象执⾏变换(操作)。

2、避免在不必要的情况下使⽤ eval ，eval() 是⼀个危险的函数， 他执⾏的代码拥有着执⾏者的
  权利。如果你⽤ eval()运⾏的字符串代码被恶意⽅（不怀好意的⼈）操控修改，您最终可能会
  在您的⽹⻚/扩展程序的权限下，在⽤户计算机上运⾏恶意代码。

### 六、[手写`call` , `apply` 和 `bind`](call-apply-bind.js)
1、call,apply和bind的用法
    
func.call(thisArg, arg1, arg2, ...) ，调⽤⼀个函数, 其具有⼀个指定的this值和分别地
提供的参数(参数的列表)。

func.apply(thisArg, [argsArray]) ，调⽤⼀个函数，以及作为⼀个数组（或类似数组对
象）提供的参数。

bind 会创建⼀个新函数。当这个新函数被调⽤时，bind() 的第⼀个参数将作为它运⾏时的 this，之
后的⼀序列参数将会在传递的实参前传⼊作为它的参数。

2、call的核心
- 将函数设为对象的属性
- 执行和删除这个函数
- 指定`this`到函数并传入给定参数执行函数
- 如果不传入参数，默认指向window

3、apply 和 call 的 类似，只是型参方式不同

### 七、[手写函数柯里化（currying）和反柯里化（unCurrying）](curring.js)

1、什么是柯⾥化？

函数柯里化，是固定部分参数，返回一个接受剩余参数的函数，也称为部分计算函数，目的是为了缩小适用范围，创建一个针对性更强的函数。

*函数柯⾥化的主要作⽤和特点就是参数复⽤、提前返回和延迟执⾏。*

2、反柯里化

那么反柯里化函数，从字面讲，意义和用法跟函数柯里化相比正好相反，扩大适用范围，创建一个应用范围更广的函数。使本来只有特定对象才适用的方法，扩展到更多的对象。

### 八、[手写js深拷贝](deepCopy.js)
### 九、[手写instanceOf原理](instanceof.js)
### 十、[手写map和reduce]()
### 十一、[手写实现拖拽](drag.html)

### 十二、[使用setTimeout模拟setInterval](setInterval.js)
可避免setInterval因执行时间导致的间隔执行时间不一致
### 十三、[手写实现Object.create()的基本原理](create.js)
将传入的对象作为原型