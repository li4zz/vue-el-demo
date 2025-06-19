<!-- vue篇 -->
<template>
  <div>
    <img src="@/assets/images/2.gif" />
    <h3>一、Vue 3 的常用 API</h3>
    <p>
      ref：用于创建基本数据类型（如字符串、数字、布尔值等）的响应式引用。ref
      通过 .value 来访问和修改数据。
    </p>
    <p>
      reactive：用于创建对象或数组的响应式数据，直接对对象进行响应式代理。修改对象的属性时，可以直接通过属性名来访问和修改。
    </p>
    <p>
      computed
      用于创建计算属性，计算属性会基于它所依赖的响应式数据进行缓存。只有依赖的响应式数据发生变化时，才会重新计算。适用于衍生数据或需要基于其他数据计算的场景。
    </p>
    <p>
      watch
      用于监听某个响应式数据的变化，并执行副作用操作。适合用于异步操作或其他副作用（如数据存储、API
      请求等）。
    </p>
    <p>
      生命周期函数（组合式 API）
      onMounted、onUpdated、onUnmounted：这些生命周期函数在组件的不同生命周期阶段执行，类似于
      Vue 2 的生命周期钩子。 它们与 Vue 2 的选项式 API
      生命周期钩子不同，采用了组合式 API，更加灵活和清晰。
    </p>
    <p>
      defineComponent 用于定义组件，是 Vue 3 的标准组件定义方式。它支持组合式
      API 和 TypeScript 类型推导，增强了组件的可读性和类型安全。
    </p>
    <p>
      provide 和 inject provide 和 inject 是 Vue 3 中用于跨层级组件通信的
      API。父组件通过 provide 提供数据，子组件通过 inject
      获取数据，适用于多层级嵌套的组件树中。
    </p>
    <p>
      nextTick 用于在 DOM 更新后执行某些操作。通常在修改数据后，Vue 会异步更新
      DOM，而 nextTick 可以保证 DOM 更新完成后执行回调函数。
    </p>
    <p>
      useContext 用于获取当前组件的上下文，适用于函数式组件中访问 Vue
      的上下文信息。
    </p>
    <h3>二、ref 和 reactive 的区别</h3>
    <p>
      ref
      用于创建基本数据类型的响应式引用，它会包装原始数据，如字符串、数字等，访问时需要通过
      .value。
    </p>
    <p>
      reactive
      用于创建对象或数组的响应式数据，直接对对象进行响应式代理，可以直接通过属性名来访问。
    </p>
    <p>
      这两者可以结合使用，例如： const count = ref(0); const user = reactive({
      name: 'Alice', age: 25 });
    </p>
    <h3>三、computed 和 watch 的区别</h3>
    <p>
      computed：适用于需要衍生数据或缓存计算结果的场景。它只会在依赖的数据变化时重新计算，避免不必要的性能开销。
      适用场景：表单的校验规则、动态标题、数据转换等。
    </p>
    <p>
      watch：用于侦听响应式数据的变化，并执行副作用操作。适用于异步操作或复杂的副作用，如数据提交、API
      请求等。
    </p>
    <p>适用场景：请求外部 API、表单提交、页面跳转等。</p>
    <h3>四、Vue 2 的 mixin 和 Vue 3 的 hooks 的相似之处和区别</h3>
    <p>
      相似之处： mixin 和 hooks
      都可以用于逻辑复用，将多个组件中共享的功能提取到外部，使得代码更加模块化和可维护。
    </p>
    <p>
      区别：Mixin：Vue 2 的 mixin
      是将多个组件选项中的逻辑混入当前组件，可能导致命名冲突或代码可维护性差，尤其在大型应用中。
      Hooks（Vue 3） ：Vue 3 提供的组合式 API
      允许更加灵活和模块化的代码组织，避免了 mixin
      中的命名冲突，逻辑更加清晰和可组合。
    </p>
    <h3>五、Vue 3 组件生命周期及替代 API</h3>
    <p>
      在 Vue 3 中，组件生命周期方法与 Vue 2 略有不同。Vue 2
      中的生命周期方法包括：beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed。这些方法描述了组件从创建到销毁的各个阶段。
    </p>
    <p>beforeCreate: 在实例创建之前被调用。</p>
    <p>created: 实例创建后调用，数据观测和事件配置已完成，但 DOM 尚未挂载。</p>
    <p>beforeMount: 在挂载开始之前调用，此时 DOM 尚未被渲染。</p>
    <p>mounted: 组件挂载完成后调用，DOM 已渲染并可访问。</p>
    <p>beforeUpdate: 在组件数据变化时调用，DOM 尚未更新。</p>
    <p>updated: 在组件数据变化后，DOM 更新完毕后调用。</p>
    <p>beforeDestroy: 在组件销毁前调用。</p>
    <p>destroyed: 在组件销毁后调用。</p>
    <p>
      在 Vue 3 中，组合式 API 替代了传统的生命周期方法。常用的替代方法包括：
      onMounted: 替代 mounted，用于在组件挂载完成后执行操作。 onUpdated: 替代
      updated，用于在组件更新后执行操作。 通过组合式 API，生命周期方法可以在多个
      setup() 中进行逻辑复用，增强了代码的可维护性和复用性。
    </p>
    <h3>六、Vue 2 与 Vue 3 的区别</h3>
    <p>
      性能：Vue 3 引入了更高效的虚拟 DOM
      和响应式系统，整体性能得到了大幅提升。特别是在大型应用中，Vue 3
      的响应式性能比 Vue 2 更优。
    </p>
    <p>
      组合式 API：Vue 3 增加了组合式 API（Composition API），让开发者能通过
      setup()
      函数集中定义响应式状态、计算属性和生命周期钩子，提升了逻辑复用性和代码的可读性。
    </p>
    <p>
      TypeScript 支持：Vue 3 对 TypeScript
      的支持更加完善，提供了更好的类型推导和静态类型检查，增强了开发体验。
    </p>
    <p>
      响应式系统：Vue 3 使用了基于 Proxy 的响应式系统，相比于 Vue 2 中使用的
      Object.defineProperty，Proxy
      提供了更高的性能和更强的灵活性，能够更好地处理嵌套对象和数组。
    </p>
    <h3>七、Vue 2 响应式与 Vue 3 响应式的区别</h3>
    <p>
      Vue 2: 使用 Object.defineProperty 通过劫持对象的 getter 和 setter
      来实现响应式。这种方式的缺点包括无法检测到数组索引的变化，且对于嵌套对象的处理也相对有限。
    </p>
    <p>
      Vue 3: 使用 Proxy 实现响应式，提供了更强大的功能。Proxy
      可以直接代理整个对象，支持嵌套对象、数组及其变化的检测，并且性能也比
      Object.defineProperty 更好。
    </p>
    <h3>八、Vue 组件通信</h3>
    <p>
      父子组件通信： 父组件通过 props 向子组件传递数据。 子组件通过 $emit
      向父组件发送事件，实现双向数据流。
    </p>
    <p>
      兄弟组件通信： 通过公共父组件传递数据，父组件将数据传递给两个兄弟组件。
      或者通过 provide 和 inject 实现祖先和后代组件之间的通信。
    </p>
    <p>
      跨层级通信： 可以使用状态管理库，如 Vuex 或
      Pinia，来管理全局状态，确保跨层级的组件都能访问和修改共享的数据。
      事件总线也是一种常见的跨层级通信方式，虽然在 Vue 3 中已经不推荐使用。
    </p>
    <h3>九、Vuex 与 Pinia 的区别</h3>
    <p>
      Vuex：Vuex 是 Vue 2.x 的官方状态管理库。它使用 mutations 和 actions
      来处理状态变更，管理全局状态，并且需要通过显式的 commit 和 dispatch 操作。
    </p>
    <p>
      Pinia：Pinia 是 Vue 3 推荐的状态管理库。它基于组合式
      API，支持更好的类型推导、响应式状态管理，并且 API 更加简洁。Pinia 在 Vue 3
      中的表现更自然，并且对于 TypeScript 的支持也更加友好。
    </p>
    <p>
      总结： Vuex 适用于 Vue 2 项目，而 Pinia 更适合 Vue 3 项目。 Pinia
      提供了更简洁和现代化的 API，更好地集成了 Vue 3 的组合式 API。
    </p>
    <h3>十、选项式 API 和 组合式 API 的区别</h3>
    <p>
      选项式 API： 通过组件的选项（如 data, methods, computed, watch
      等）来组织逻辑。
      结构化明确，但对于大型或复杂的应用来说，代码容易变得繁琐且不易维护。
      适用于小型到中型的项目，易于上手。
    </p>
    <p>
      组合式 API： 通过函数来组织组件的逻辑，使用 setup() 函数进行组合。
      逻辑复用性更强，可以按功能拆分逻辑，提高可维护性和可扩展性。
      特别适用于复杂的组件，能够提高代码的模块化程度，增强可读性和测试性。
    </p>
    <p>
      总结：选项式 API 适合小型或中型项目，而组合式 API
      更适合复杂或大型项目，且具有更高的灵活性和可复用性。
    </p>
    <h3>十一、Vue 中的虚拟 DOM，diff 算法</h3>
    <p>
      虚拟 DOM： Vue 使用虚拟 DOM
      来优化页面渲染过程。当组件的数据发生变化时，Vue 会首先创建一个虚拟 DOM
      树，而不是直接修改真实的 DOM。
    </p>
    <p>
      Diff 算法： 当数据发生变化时，Vue 会用新生成的虚拟 DOM 树与旧的虚拟 DOM
      树进行比较（diff）。它通过最小化的更新策略，计算出最小的 DOM
      变更，最终应用到真实的 DOM 上。
      这一过程显著提升了渲染性能，尤其是在数据频繁变动的场景中。
    </p>
    <p>
      总结：虚拟 DOM 和 Diff 算法的结合使得 Vue 在进行 DOM
      更新时更加高效，减少了不必要的 DOM 操作，提高了性能。
    </p>
    <h3>十二、Vue 3 里面的劫持有哪些</h3>
    <p>
      Vue 3 使用 Proxy 来实现响应式系统，取代了 Vue 2 中的
      Object.defineProperty。 Proxy
      可以拦截对象的读取、设置、删除等操作，并通过代理机制来触发视图的更新。
      通过对对象进行代理，Vue 3 可以更高效地追踪数据变化，并实现响应式更新。
    </p>
    <p>
      总结：Vue 3 通过 Proxy 实现对数据的劫持和响应式更新，较 Vue 2
      提升了性能并简化了代码逻辑。
    </p>
    <h3>十三、Vue SSR 的实现原理</h3>
    <p>
      Vue SSR（服务器端渲染）通过在服务器端渲染页面，再将渲染后的 HTML
      发送给客户端，可以显著提升 SEO 和首屏加载性能。在 Vue 3 中，SSR 通过
    </p>
    <p>
      renderToString 和 createApp 实现。 createApp：用于创建 Vue 应用的实例。
    </p>
    <p>renderToString：将 Vue 应用渲染为 HTML 字符串并返回给客户端。</p>
    <p>
      这种机制让客户端能够尽早展示页面内容，而不是等待 JavaScript
      加载和执行后再渲染，从而提升了性能和 SEO。
    </p>
    <h3>十四、props和data的优先级谁高</h3>
    <p>props > methosd > data > computed > watch</p>
    <h3>十五、路由独享</h3>
    <p>{</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;path: '/mainpage',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;name: 'About',</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;component: About, // 路由独享守卫</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;beforeEnter:(to,from,next) => {</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;&nbsp;(from.name
      === '/mainpage/about'){
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("这是从about来的")
    </p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;else{</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert("这不是从about来的")
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} next(); //
      必须调用来进行下一步操作。否则是不会跳转的
    </p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
    <p>}</p>
    <h3>十六、常见的事件修饰符及其作用</h3>
    <p>
      .stop： 防止事件冒泡（等同于 JavaScript 中的 event.stopPropagation()）
    </p>
    <p>
      .prevent：
      防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）等同于
      JavaScript 中的 event.preventDefault()
    </p>
    <p>.capture ：与事件冒泡的方向相反，事件捕获由外到内；</p>
    <p>.self ：只会触发自己范围内的事件，不包含子元素；</p>
    <p>.once ：只会触发一次。</p>
    <img src="@/assets/images/1.gif" />
    <h3>十七、</h3>

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
