<template>
  <div  class="pg-index">
    <div class="index-container">
      <img src="../assets/logo.png" class="logo">
      <!-- <p class="title">数智源前端组件库</p> -->
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'start'}" class="go-btn">开始使用</router-link>
        <a class="github-btn" href="" target="_blank">
          <svg aria-labelledby="simpleicons-github-dark-icon" lang="" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon" lang="en">GitHub Dark icon</title><path fill="#7F8C8D" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
          GITHUB
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        height: document.documentElement.clientHeight
      }
    }
  }
</script>
<style scoped>
  .logo{
    display: block;
    padding-top: 260px;
    padding-bottom: 50px;
    margin: 20px auto;
  }
  .title{
    color: #2c3e50;
    font-size: 50px;
    font-weight: bold;
    padding-top: 200px;
    padding-bottom: 50px;
  }
  .go-btn{
    width: 140px;
    height: 40px;
    line-height: 40px;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
    background: #fff;
    color: #42b983;
  }
  .go-btn:hover{
    background: #4fc08d;
    color: #fff;
  }
  .github-btn{
    border-radius: 2em;
    display: inline-block;
    -webkit-transition: all 0.15s ease;
    transition: all 0.15s ease;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #c5c7c7;
    background-color: #f6f6f6;
    color: #7f8c8d;
    position: relative;
    width: 140px;
    height: 40px;
    line-height: 40px;
  }
  .github-btn svg{
    position: absolute;
    left: 0.4em;
    top: 0.35em;
    width: 1.6em;
  }
  .about a{
    margin: 0 10px;
  }
</style>
