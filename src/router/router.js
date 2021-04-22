import { createRouter,createWebHistory} from "vue-router";

// 路由信息
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../view/Home.vue')
  }, {
    path: '/about',
    name: 'About',
    component: () => import('../view/About.vue')
  }
]

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;