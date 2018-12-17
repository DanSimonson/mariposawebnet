<template>
  <div class="about">

    <Head></Head>
    <Logo></Logo>

    <div class='wrapper'>
      <div class='inner-wrapper'>
        <h1>About mariposaweb</h1>
        <h4>mariposaweb is a company run by me, Dan Simonson, to provide awesome web development services optimized for
          a great user experience.</h4>
        <div class='line'>
        </div>
        <img src='https://res.cloudinary.com/dmglopmul/image/upload/v1544859804/projectPhotos/mariposaweb/cartoonme1.jpg'>

        <div class='text'>
          <p class='my-name' data-aos="slide-right" data-aos-duration="1000">Who
            is
            Dan Simonson?</p>
          <p class='my-question' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">How
            does he know
            about this stuff?</p>
          <p class='paragraph'>I'm a family guy who grew up in the heart of silicon valley with the dream of one day
            becoming a programmer.
            Life got in the way though. I did manage to get an Associates in Programming and a Bachelor of Science in
            Computer Science
            (cum laude/3.65 GPA).</p>
          <p class='paragraph'>But I ended up doing networking type of work until I retired
            early to the Philippines.</p>
          <p class='paragraph'> Retirement didn't suit me so I have
            returned to my initial idea made so many years ago -- become a programmer -- or in this case a
            web
            developer/software engineer.</p>
          <p class='paragraph'>Over the last year and a half I have invested thousands of hours
            honing my craft. I am pursuing my childhood dream.</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
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
    /*https: //res.cloudinary.com/dmglopmul/image/upload/v1544859804/projectPhotos/mariposaweb/cartoonme1.jpg*/


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
      border-radius: 4px;
    }

    .my-name {
      color: red;
      font-size: 2rem;


    }

    .my-question {
      font-size: 3.5rem
    }

    .paragraph {
      font-size: 2rem;
    }
  }

  div.line {
    width: 50vw;
    margin-top: 2rem;
    border-top: 1px solid #999;
  }

  .text {
    margin-bottom: 20px;
  }
</style>