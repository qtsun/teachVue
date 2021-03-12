<template>
  <div class="admin">
    <h1>This is an admin page</h1>
  </div>
</template>
<script>
export default {
  //组件独享路由守卫
  beforeRouteEnter (to, from, next) {
      if(window.isLogin){
        next()
      }else{
        next('/login?redirect='+to.fullPath)
      }
  }
}
</script>
