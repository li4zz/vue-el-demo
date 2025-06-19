<!-- js篇 -->
<template>
  <div>
    <h3>一、闭包</h3>
    <p>
      当一个函数中的内部函数被拿到函数外部调用，又因为在js中内层作用域总是能访问外层作用域的变量，那么内部函数存在对外部函数中变量的引用，这些变量的集合称之为闭包。
    </p>
    <p>function foo() {</p>
    <p>let a = 1</p>
    <p>let b = 2</p>
    <p>function bar() {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(a); // 这里的a就是闭包</p>
    <p>}</p>
    <p>return bar</p>
    <p>}</p>
    <p>let baz = foo()</p>
    <p>baz() // 1</p>
    <p>
      应用场景：1，创建私有变量 （全局变量不易维护）,2，延长变量的生命周期
      ,3，实现柯里化（颗粒）
    </p>
    <p>缺点：内存泄露：函数的执行上下文销毁的不彻底，内存空间变小</p>
    <h3>二、什么是柯里化（颗粒化）</h3>
    <p>将一个接受多个参数的函数转变成多个只接受一个参数的函数</p>
    <p>function add(a, b, c) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;return a + b + c</p>
    <p>}</p>
    <p>function add(a) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;return function(b) {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return function(c) {</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
      a + b + c
    </p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</p>
    <p>&nbsp;&nbsp;&nbsp;}</p>
    <p>}</p>
    <p>const res = add(1)(2)(3)</p>
    <p>console.log(res); // 6</p>
    <h3>三、作用域</h3>
    <p>作用域是什么：变量和函数能够生效的区域，这个区域叫作用域</p>
    <p>
      全局作用域：
      在V8执行代码的过程中会进行预编译，预编译会生成一个全局执行上下文，
      这个全局执行上下文就是全局作用域，里面定义了声明在最外层的变量和函数
    </p>
    <p>
      函数体作用域：
      在代码的执行过程中，遇到函数的调用时会生成一个函数的执行上下文，这个函数执行上下文就是函数体的作用域，里面定义了声明在函数内部的变量和函数
    </p>
    <p>块级作用域： let或const和{}形成的区域就叫做块级作用域</p>
    <p>
      作用域链：作用域只能从内到外的访问，这种访问规则形成的链状关系我们称之为作用域链
    </p>
    <p>词法作用域：指的是函数或变量定义的区域</p>
    <img src="@/assets/images/3.png" />
    <h3>
      四、call 、 apply 、 bind
      作⽤是改变函数执⾏时的上下⽂，简⽽⾔之就是改变函数运⾏时 的 this 指向
      那么什么情况下需要改变 this 的指向呢？
    </h3>
    <p>var name = "lucy";</p>
    <p>
      var obj = { name: "martin", say: function () { console.log(this.name)} };
    </p>
    <p>obj.say(); // martin，this 指向 obj 对象</p>
    <p>setTimeout(obj.say,0); // lucy，this 指向 window 对象</p>
    <p>
      从上⾯可以看到，正常情况 say ⽅法输出 martin 但是我们把 say 放在
      setTimeout ⽅法中，在定时器中是作为回调函数来执⾏的，因此回到主栈执
      ⾏时是在全局执⾏上下⽂的环境中执⾏的，这时候 this 指向 window ，所以输出
      lucy 我们实际需要的是 this 指向 obj 对象，这时候就需要该改变 this 指向了
    </p>
    <p>setTimeout(obj.say.bind(obj),0); //martin，this指向obj对象</p>
    <div style="margin-top: 30px"></div>
    <p style="font-weight: bold">apply</p>
    <p>
      apply 接受两个参数，第⼀个参数是 this
      的指向，第⼆个参数是函数接受的参数，以数组的形式传 ⼊ 改变 this
      指向后原函数会⽴即执⾏，且此⽅法只是临时改变 this 指向⼀次
    </p>
    <p>function fn(...args){ console.log(this,args); }</p>
    <p>let obj = { myname:"张三" }</p>
    <p>
      fn.apply(obj,[1,2]); // this会变成传⼊的obj，传⼊的参数必须是⼀个数组；
    </p>
    <p>fn(1,2) // this指向window</p>
    <p>当第⼀个参数为 null 、 undefined 的时候，默认指向 window (在浏览器中)</p>
    <p>fn.apply(null,[1,2]); // this指向window</p>
    <p>fn.apply(undefined,[1,2]); // this指向window</p>
    <p style="font-weight: bold">call</p>
    <p>
      call ⽅法的第⼀个参数也是 this 的指向，后⾯传⼊的是⼀个参数列表 跟 apply
      ⼀样，改变 this 指向后原函数会⽴即执⾏，且此⽅法只是临时改变 this 指向⼀次
    </p>
    <p>function fn(...args){ console.log(this,args); }</p>
    <p>let obj = { myname:"张三" }</p>
    <p>fn.call(obj,1,2); // this会变成传⼊的obj，传⼊的参数必须是⼀个数组；</p>
    <p>fn(1,2) // this指向window</p>
    <p>
      同样的，当第⼀个参数为 null 、 undefined 的时候，默认指向 window
      (在浏览器中)
    </p>
    <p>fn.call(null,[1,2]); // this指向window</p>
    <p>fn.call(undefined,[1,2]); // this指向window</p>
    <p style="font-weight: bold">bind</p>
    <p>
      bind⽅法和call很相似，第⼀参数也是 this
      的指向，后⾯传⼊的也是⼀个参数列表(但是这个参数列表 可以分多次传⼊) 改变
      this 指向后不会⽴即执⾏，
    </p>

    <p>let obj = { myname:"张三" }</p>
    <p>
      const bindFn = fn.bind(obj); // this 也会变成传⼊的obj
      ，bind不是⽴即执⾏需要执 ⾏⼀次
    </p>
    <p>
      function fn(...args){ console.log(this,args); } bindFn(1,2) // this指向obj
    </p>
    <p>fn(1,2) // this指向window</p>
    <p style="font-weight: bold">⼩结</p>
    <p>从上⾯可以看到， apply 、 call 、 bind 三者的区别在于：</p>
    <p>三者都可以改变函数的 this 对象指向</p>
    <p>
      三者第⼀个参数都是 this 要指向的对象，如果如果没有这个参数或参数为
      undefined 或 nul l ，则默认指向全局 window
    </p>
    <p>
      三者都可以传参，但是 apply 是数组，⽽ call 是参数列表，且 apply 和 call
      是⼀次性传 ⼊参数，⽽ bind 可以分为多次传⼊
    </p>
    <p>bind 是返回绑定this之后的函数， apply 、 call 则是⽴即执⾏</p>
    <img src="@/assets/images/4.png" />
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped></style>
