<!--
 * @Descripttion: 
 * @version: 
 * @Author: fmy1993
 * @Date: 2021-08-26 20:25:57
 * @LastEditors: fmy1993
 * @LastEditTime: 2021-08-26 22:34:58
-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
