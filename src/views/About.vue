<template>
  <div class="about">

    <Head></Head>
    <Logo></Logo>

    <div class='wrapper'>
      <div class='inner-wrapper'>
        <h1>About mariposaweb.net</h1>
        <h4>mariposaweb is a company run by me, Dan Simonson, to provide awesome web development services optimized for
          a great user experience.</h4>
        <div class='line'>
        </div>
        <img src='https://res.cloudinary.com/dmglopmul/image/upload/v1544859804/projectPhotos/mariposaweb/cartoonme1.jpg'>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
  @import "../../public/styles.scss";

  .wrapper {
    /*border: 5px solid brown;*/
    width: 100vw;
    margin-top: 10rem;
    display: flex;
    justify-content: center;

  }

  .inner-wrapper {
    /*border: 5px solid green;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 50vw;
    color: $Black;

    h1 {
      font-size: 4rem;
    }

    h4 {
      font-size: 2.5rem;
    }

    img {
      width: 50vw;
      height: 40vw;
      margin-top: 2.5rem;
    }
  }

  div.line {
    width: 50vw;
    margin-top: 2rem;
    border-top: 1px solid #999;
  }
</style>