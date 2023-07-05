<template>
  <the-header></the-header>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'
import TheHeader from './components/base/TheHeader.vue'
export default {
  name: 'App',
  components:{
    TheNavigation,
    TheHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0
}
*{
  box-sizing: border-box;
}
</style>
