<template>
    <div class="top-box">
        <router-link :to="{name: 'Index'}" class="home-link">
            <img src="../assets/logo.png" class="logo">
        </router-link>
        <div class="quick-box">
            <router-link :to="{name: 'Index'}">使用</router-link>
            <router-link :to="{name: 'Index'}">组件</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return{

        }
    },
    methods: {

    },
    mounted(){
        
    }
}
</script>

<style scoped>
.top-box{
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
    position: relative;
}
.home-link{
    color: #2c3e50;
    line-height: 60px;
    width: 100px;
    float: left;
    font-size: 26px;
    margin-left: 50px;
}
.home-link img{
    width: 90px;
    display: block;
    padding-top: 13px;
}
.quick-box{
    position: absolute;
    top: 0;
    right: 30px;
}
.quick-box a{
    color: #2c3e50;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    display: inline-block;
}
</style>