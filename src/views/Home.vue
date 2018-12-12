<template>
  <div class="home">
    <!--<h1>this is the Home page</h1> -->
    <Header></Header>
    <Slider></Slider>
    <Logo></Logo>
    <Parahome></Parahome>
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
  import Parahome from '@/components/Parahome.vue'
  import Slider from '@/components/Slider.vue'
  import Parallax from "vue-parallaxy";


  export default {
    name: 'home',
    components: {
      //HelloWorld
      Slider,
      Parallax,
      Parahome
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