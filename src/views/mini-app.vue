<!-- 小程序篇 -->
<template>
  <div>
    <h3>1.请谈谈微信小程序主要目录和文件的作用？</h3>
    <p>
      project.config.json：项目配置文件，用的最多的就是配置是否开启https校验
    </p>
    <p>App.js：设置一些全局的基础数据等</p>
    <p>App.json：底部tab，标题栏和路由等设置</p>
    <p>App.wxss：公共样式，引入iconfont等</p>
    <p>pages：里面包含一个个具体的页面</p>
    <p>index.json：配置当前页面标题和引入组件</p>
    <p>index.wxml：页面结构</p>
    <p>index.wxss：页面样式表</p>
    <p>index.js：页面的逻辑，请求和数据处理</p>
    <h3>2.请谈谈wxml与标准的html的异同？</h3>

    <p>都是用来描述页面的结构</p>
    <p>都由标签，属性等构成</p>
    <p>标签名字不一样，且小程序标签更少，单一标签更多</p>
    <p>多了一些 wx:if这样的属性以及{{}}</p>
    <p>WXML仅能在微信小程序开发者工具中预览，而HTML可以在浏览器内预览</p>
    <p>组件封装不同，WXML对组件进行了重新封装</p>
    <p>
      小程序运行在JS
      Core内，没有DOM树和windiw对象，小程序中无法使用window对象和document对象。
    </p>

    <h3>3.请谈谈WXSS和CSS的异同？</h3>
    <p>都是用来描述页面的样子</p>
    <p>WXSS具有CSS大部分的特性，也做了一些扩充和修改</p>
    <p>WXSS新增了尺寸单位，WXSS在底层支持新的尺寸单位rpx</p>
    <p>WXSS仅支持部分CSS选择器</p>
    <p>WXSS提供全局样式与局部样式</p>
    <h3>4.你是怎么封装微信小程序的数据请求的？</h3>

    <p>在根目录下创建util目录及api.js文件和apiConfig.js文件</p>
    <p>
      在apiConfig.js封装基础的get，post和put，upload等请求方法，设置请求体，带上token和异常处理等
    </p>
    <p>
      在api中引入apiConfig.js封装好的请求方法.根据页面数据请求的urls，设置对应的方法并导出
    </p>
    <p>在具体的页面中导入或将所有的接口放在统一的js文件中并导出</p>
    <p>在app.js中创建封装请求数据的方法</p>
    <p>在子页面中调用封装的请求数据</p>
    <h3>5.小程序页面之间有哪些（传值）传递数据的方法？</h3>

    <p>页面跳转或重定向时，使用url带参数传递数据</p>
    <p>使用组件模板 template传递参数</p>
    <p>使用缓存传递参数</p>
    <p>使用数据库传递参数</p>
    <p>
      给html元素添加data-*属性来传递值，然后通过e.currentTarget.dataset或onload的param参数获取（data-
      名称不能有大写字母，不可以存放对象）
    </p>
    <p>
      设置id
      的方法标识来传值，通过e.currentTarget.id获取设置的id值，然后通过设置全局对象的方式来传递数据
    </p>
    <p>在navigator中添加参数数值</p>
    <h3>6.请谈谈小程序的双向绑定和vue的异同？</h3>
    <p>
      大体相同，但小程序之间this.data的属性是不可以同步到视图的，必须调用this.setData()方法
    </p>
    <h3>7.请谈谈小程序的生命周期函数</h3>
    <p>onLoad()页面加载时触发，只会调用一次，可获取当前页面路径中的参数</p>
    <p>onShow()页面显示/切入前台时候触发，一般用来发送数据请求</p>
    <p>
      onReady()页面初次渲染完成时触发，只会调用一次，代表页面已可和视图层进行交互
    </p>
    <p>
      onHide()页面隐藏/切入后台时触发，如底部tab切换到其他页面或小程序切入后台等
    </p>
    <p>onUnload()页面卸载时触发，如redirectTO或navigateBack到其他页面时</p>
    <h3>8.请谈谈原生开发小程序，wepy，mpvue的对比？</h3>
    <p>
      个人认为，如果是新项目，且没有旧的 h5
      项目迁移，则考虑用小程序原生开发，好处是相比于第三方框架，坑少。 而如果有
      老的 h5 项目是 vue 开发 或者 也有 h5 项目也需要小程序开发，则比较适合 wepy
      或者 mpvue 来做迁移或者开发，近期看wepy几乎不更新了，所以推荐美团的mpvue。
      而如果如果团队前端强大，自己做一套框架也没问题。
    </p>
    <img src="@/assets/images/5.png" />
    <h3>9.简单描述下微信小程序的 相关文件类型</h3>
    <p>
      wxml
      模板文件，是框架设计的一套标签预言，结合基础组件，事件系统，可以构建出页面的结构
      wxss 样式文件，是一套样式语言，用于描述WXML的组件样式
      js脚本逻辑文件。逻辑处理网络请求
      json配置文件，小程序设置，如页面注册，页面标题及tabBar
    </p>
    <p>
      app.json是整个小程序的全局配置，包括： pages:所有页面路径
      网络设置（网络超时事件） 页面表现（页面注册）
      window：（背景色，导航样式，默认标题） 底部tab等
    </p>
    <p>app.js 监听并处理小程序的生命周期函数，声明全局变量</p>
    <p>app.wxss 全局配置的样式文件</p>
    <h3>10.那些方法来提高微信小程序的应用速度？</h3>
    <p>提高页面的加载速度</p>
    <p>用户行为预测</p>
    <p>减少默认的data的大小</p>
    <p>组件化方案</p>
    <h3>11.分析微信小程序的优劣势？</h3>
    优势：
    <p>容易上手，基础组件库比较全，基本不需要考虑兼容问题</p>
    <p>开发文档比较完善，开发社区比较活跃，支持插件式开发</p>
    <p>
      良好的用户体验，无需下载，通过搜索和扫一扫就可以打开，打开速度快，安卓上可以添加到桌面，与原生APP差不多
    </p>
    <p>开发成本比APP要低</p>
    <p>为用户提供良好的保障（小程序发布，严格是审查流程）</p>
    劣势：
    <p>限制较多，页面大小不能超过1M，不能打开超过5个层级的页面</p>
    <p>样式单一，部分组件已经是成型的，样式不可修改，例如：幻灯片，导航</p>
    <p>推广面窄，不能分享朋友圈，只能通过分享给朋友，附加小程序推广</p>
    <p>依托与微信，无法开发后台管理功能</p>
    <p>后台调试麻烦，因为api接口必须https请求且公网地址</p>
    <p>真机测试，个别安卓和苹果表现迥异，例如安卓的定位功能加载很慢</p>
    <h3>12.微信小程序和H5的区别？</h3>
    <p>运行环境不同（小程序在微信运行，h5在浏览器运行）</p>
    <p>开发成本不同（h5需要兼容不同的浏览器）</p>
    <p>获取系统权限不同（系统级权限可以和小程序无缝衔接）</p>
    <p>应用在生成环境的运行速度流程（h5需不断对项目优化来提高用户体验）</p>
    <h3>13.小程序关联微信公众号如何确定用户的唯一性？</h3>
    使用wx.getUserlnfo方法
    withCredentials为true时，可获取encryptedData，里面有union_id，后端需要进行对称解密
    <h3>14.使用webview直接加载要注意那些事项？</h3>
    <p>必须要在小程序后台使用管理员添加业务域名</p>
    <p>h5页面跳转至小程序的脚步必须是1.3.1以上</p>
    <p>
      微信分享只可以是小程序的主名称，如要自定义分享内容，需小程序版本在1.7.1以上
    </p>
    <p>
      h5的支付不可以是微信公众号的appid，必须是小程序的appid，而且用户的openid也必须是用户和小程序的
    </p>

    <h3>15.webview中的页面怎么跳转回小程序?</h3>
    <p>wx.miniProgram.navigateTo({  </p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;url:'pages/login/login'+'$params'</p>
    <p>})</p>
    <div>//跳转到小程序导航页面</div>
    <div>wx.miniProgram.switchTab({</div>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;url:'/pages/index/index'</p>
    <p>})</p>
    <h3>16.bindtap和catchtap的区别？</h3>
    <p>bind事件绑定不会阻止冒泡事件向上冒泡</p>
    <p>catch事件绑定可以阻止冒泡事件向上冒泡</p>
    <h3>
      17.简述wx.navigateTo(),wx.redirectTo(),wx.switchTab(),wx.navigateBack(),wx.reLaunch()的区别？
    </h3>
    <p>
      wx.navigateTo()：保留当前页面，跳转到应用内的某个页面。但是不能跳到
      tabbar页面
    </p>
    <p>
      wx.redirectTo()：关闭当前页面，跳转到应用内的某个页面。但是不能跳转tabbar
      页面
    </p>
    <p>wx.switchTab()：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p>
    <p>
      wx.navigateBack()关闭当前页面，返回上一页面或多级页面。可通过getCurrentPages()
      获取当前的页面栈，决定需要返回几层
    </p>
    <p>wx.reLaunch()：关闭所有页面，打开到应用内的某个页面</p>
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
