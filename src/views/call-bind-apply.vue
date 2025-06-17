<!-- call/bind/apply -->
<template>
  <div>
    call 、 apply 、 bind
    作⽤是改变函数执⾏时的上下⽂，简⽽⾔之就是改变函数运⾏时 的 this 指向
    那么什么情况下需要改变 this 的指向呢？下⾯举个例⼦
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
