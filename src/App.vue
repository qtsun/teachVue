<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

a {
  color:$color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
}
</style>

<style scoped>
  #app {
    background-color: #ccc;
  }
  /* Home组件类 */
  .home{
    border: 4px solid rgb(25,172,123)
  }
  /* 普通css穿透 */
  /* #app >>> h1 {
    color: rgb(255,124,1)
  } */
</style>
<style scoped lang="scss">
  // 深度选择器
  #app /deep/ h1 {
    color:rgb(255,124,1)
  }
</style>
