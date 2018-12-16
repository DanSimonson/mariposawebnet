<template>
  <div class="home">
    <!--<h1>this is the Home page</h1> -->

    <Head></Head>
    <Slider></Slider>
    <Logo></Logo>
    <Parahome></Parahome>
    <Footer></Footer>
  </div>
</template>

<script>
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