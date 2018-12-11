<template>
  <div class="home">
    <!--<h1>this is the Home page</h1> -->
    <Header></Header>
    <Slider></Slider>
    <Logo></Logo>
    <!--<div class='test'>
      <h1>this is the Home page</h1>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  import Slider from '@/components/Slider.vue'


  export default {
    name: 'home',
    components: {
      //HelloWorld
      Slider
    }
  }
</script>
<style scoped lang='scss'>
  @import "../../public/styles.scss";

  .test {
    height: 400px;
    background: oldlace;
  }
</style>