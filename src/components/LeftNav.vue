<template>
    <div class="side-nav">
        <div v-for="title in (Object.keys(data))" class="group-container" :key="title">
            <p class="side-nav-title">{{title}}</p>

            <div class="side-nav-items" v-for="nav in data[title]"  :key="nav.desc">
                <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">{{nav.desc}}</router-link>
                <!-- <p v-else class="side-nav-group">{{nav.desc}}</p> -->

                <div v-for="item in nav.items" :key="item.name">
                    <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''" class="slid-nav-component">{{item.desc}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navList from '../nav.json'
export default {
    data() {
        return{
            data: navList
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style scoped>
.side-nav {
  width: 210px;
  display: block;
  margin: 32px 20px;
  color: #3F536E;
  background-color: #fff;
  z-index: 99;
  float: left;
}
.side-nav .group-container {
  margin-bottom: 32px;
}
.side-nav .side-nav-title {
  color: #2c3e50;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-left: 50px;
  text-align: left;
}
.side-nav .side-nav-items {
  font-size: 14px;
  font-weight: normal;
  line-height: 1.8;
}
.side-nav-items a {
  display: block;
  position: relative;
  color: #7f8c8d;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  padding-left: 50px;
  text-align: left;
}
.side-nav-items .side-nav-group {
  display: block;
  position: relative;
  padding: 6px 0 6px 24px;
  color: #2C405A;
  font-weight: bold;
}
.side-nav-items .slid-nav-component {
  display: block;
  position: relative;
  /* padding: 6px 24px 6px 32px; */
  color: #7f8c8d;
}
.side-nav-items .active {
  color: #42b983;
}

</style>
