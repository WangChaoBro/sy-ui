<template>
  <div id="app">
    <Top v-if="!isIndex"></Top>
    <div class="container" v-if="!isIndex">
        <LeftNav></LeftNav>
        <router-view class="nav-show"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
  </div>
</template>

<script>

import LeftNav from './components/LeftNav.vue'
import Top from './components/Top.vue'

export default {
    name: 'app',
    data () {
      return {
        isIndex: true
      }
    },
    watch: {
      $route () {
        this.isIndex = this.$route.name === 'Index'
      }
    },
    mounted () {
      
    },
    components: {
      LeftNav,
      Top
    }
  }
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
}

.container .nav-show {
  float: left;
  width: calc(100% - 315px);
  padding: 32px 48px 48px;
  box-sizing: border-box;
  text-align: left;
}
.container:after {
  content: "";
  clear: both;
  display: block;
}

.nav-show pre {
    margin: 16px 0;
    padding: 16px;
    background-color: #F7F7F7;
    overflow: auto;
}

.nav-show pre span{
  font-size: 14px;
}
</style>
