<template>
  <div id="nav">
    <router-link to="/">home</router-link> |
    <router-link to="/about">about</router-link>
    <h3>模拟路由缓存</h3>
    <div>
      <button @click="changePageAlive('Home')">{{include.includes('Home') ? '已缓存' : '不缓存'}} Home</button> |
      <button @click="changePageAlive('About')">{{include.includes('About') ? '已缓存' : '不缓存'}} About</button>
    </div>
    <h3>include: {{ JSON.stringify(include) }}</h3>
    <h3>exclude: {{ JSON.stringify(exclude) }}</h3>
    <router-view v-slot="{Component}">
      <keep-alive :include="include" :exclude="exclude">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      include: [], // 要缓存的路由页面
      exclude: [], // 要销毁的路由页面
    }
  },
  methods: {
    changePageAlive(routeName) {
      const isInclude = this.include.includes(routeName)
      const isExclude = this.exclude.includes(routeName)
      if (isInclude) {
        this.include.splice(this.include.indexOf(routeName), 1)
        if (!isExclude) this.exclude.push(routeName)
      } else {
        if (isExclude) this.exclude.splice(this.exclude.indexOf(routeName), 1)
        this.include.push(routeName)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
