// 思路：将要改变this指向的方法挂到目标this上执行并返回

/**
 * 1、首先context为可选参数，如果不穿默认上下文为window
 * 2、接下来给context创建一个fn属性，并将值设为需要调用的函数
 * 3、因为call需要传入多个参数作为调用函数的参数，所以需要将参数剥离出来
 * 4、然后调用函数并将对象上的函数删除
 */

Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError("not function");
  }

  context = context || window;
  context.fn = this;
  let arg = [...arguments].slice(1);
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};

// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError("not function");
  }

  context = context || window;
  context.fn = this;

  let result;

  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;

};

Function.prototype.mybind = function (context) {
  if (typeof this != "function") {
    throw Error("not a function")
  }

  const fn = this;
  const args = [...arguments].slice(1);
  return function F() {
    // 因为返回了一个函数F，这个函数可以用 new F() 的方式调用，所以需要判断
    if(this instanceof F){
      return new fn(...args,...args);
    }
    return fn.apply(context,args.concat(...arguments));
  }
};



function Person(name) {
  this.name = name;
}

Person.prototype.say = function () {
  console.log(this.name);
};

function China(name) {
  Person.myapply(this, name);
}

China.prototype = Object.create(Person.prototype);
China.prototype.constructor = Person;

let xiaoming = new China('小明');
xiaoming.say();

