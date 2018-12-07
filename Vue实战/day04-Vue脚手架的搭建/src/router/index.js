import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' // @代表 src目录 没有提示
import HelloWorld from '../components/HelloWorld' // 相对路径有提示

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
