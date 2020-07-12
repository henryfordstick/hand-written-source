# hand-written-source
手写源码系列

### 一、Promise
Promise 是异步编程的解决方案，主要解决各种回调函数和回调事件。 [详情](./MyPromise/README.md)

### 二、防抖（debounce）和节流（throttle）
##### 防抖 [详情](debounceAndThrottle/README.md)
在时间被触发n秒后再执行回调，如果在n秒内又被触发，则重新计时。
##### 节流
规定在单位时间内，只能触发一次函数

### 三、手写 new 操作符 [详情](MyNew.js)
new 操作符做了这些事：

1、创建一个全新的对象

2、它会被执⾏行行 (也就是 __proto__ )链接。

3、它使 this 指向新创建的对象。

4、通过new创建的每个对象最终被[[prototype]]链接到函数的 prototype 对象上。

5、如果对象没有返回对象类型Object（包含Function，Array，Date，RegExp，Error），那么new 表达式的函数将返回该对象引用。

### 四、手写JSON.stringify [详情](json-stringify.js)
1、类型会⾃自动转换成对应的原始值。

2、undefined、任意函数以及symbol，会被忽略略(出现在⾮非数组对象的属性值中时)，或者被转换
  成 null  (出现在数组中时)。
  
3、不可枚举的属性会被忽略。

4、如果⼀个对象的属性值通过某种间接的方式指回该对象本身，即循环引⽤用，属性也会被忽略。