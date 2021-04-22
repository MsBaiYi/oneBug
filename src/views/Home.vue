<template>
  <h1>This is an Home page</h1>
  <div>{{count}}</div>
  <button @click="count++">count++</button>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      count: 0
    }
  },
  created() {
    console.log('home 创建')
  },
  unmounted() {
    console.log('home 销毁')
  }
}
</script>
