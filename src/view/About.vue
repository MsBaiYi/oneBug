<template>
  <h1>This is an About page</h1>
</template>
<script>
export default {
  name: 'About',
  created() {
    console.log('About 创建')
  },
  beforeUnmount() {
    console.log('About 销毁')
  }
}
</script>