<template>
  <!--style="background: url('https://res.cloudinary.com/dmglopmul/image/upload/v1544596930/projectPhotos/mariposaweb/butterfly/butterfly.jpg');height: 380px;" -->
  <div id="parahome">
    <div class='pimg1'></div>
    <div class="parallax-one">
      <h1 class="test">Build Your Application Today</h1>
      <h3 class="test">______________________</h3>
      <h3 class="test">MARIPOSAWEB DEVELOPMENT</h3>
    </div>
    
    <div class="container vueProjects">
      <h1 class="myBtn align-me">Featured Vue.js Projects</h1>
      <Slide></Slide>
    </div>
    <!--style="background: url('https://res.cloudinary.com/dmglopmul/image/upload/v1544596956/projectPhotos/mariposaweb/butterfly/butterfly2.jpg');height: 380px;" -->
    <!--<div      
      class="parallax-two gradientMe"
      ></div>-->
    <div class="pimg2"></div>

    <p class="myBtn align-me">Some More Projects</p>

    <div class="grid myBtn">
      <div class="flex-card">
        <!-- image container -->
        <div class="flex-card-image hover-animation">
          <img
            src="https://res.cloudinary.com/dmglopmul/image/upload/v1541889537/scrabbleResize.jpg"
          >
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading">Spelling Game</h3>
          <p>A spelling game to practice spelling and have fun, powered with Vanilla Javascript.</p>
          <a
            href="https://dansimonson.github.io/spelling-game/"
            target="
                                  _blank"
            class="flex-card-button"
          >
            <span class="spin myBtn">
              See
              More
            </span>
          </a>
        </div>
      </div>
      <div class="flex-card">
        <!-- image container -->
        <div class="flex-card-image hover-animation">
          <img
            src="https://res.cloudinary.com/dmglopmul/image/upload/v1537117177/projectPhotos/simon.jpg"
          >
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading">Simon Game</h3>
          <p>
            An application simulating the 70's simon game, created with vanilla
            Javascript, CSS3, HTML.
          </p>
          <a
            href="https://dansimonson.github.io/simongame/"
            target="_blank"
            class="flex-card-button"
          >
            <span class="spin">
              See
              More
            </span>
          </a>
        </div>
      </div>
      <div class="flex-card">
        <!-- image container -->
        <div class="flex-card-image hover-animation">
          <img
            src="https://res.cloudinary.com/dmglopmul/image/upload/v1537118049/projectPhotos/wikipedia.jpg"
          >
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading">Wikipedia Search</h3>
          <p>
            A Wikipedia search engine that uses the Wikipedia API, vanilla
            Javascript, CSS3, HTML.
          </p>
          <a
            href="https://dansimonson.github.io/wikiviewer/"
            target="_blank"
            class="flex-card-button tilt myBtn"
          >
            See
            More
          </a>
        </div>
      </div>
      <div class="flex-card">
        <!-- image container -->
        <div class="flex-card-image hover-animation">
          <img
            src="https://res.cloudinary.com/dmglopmul/image/upload/v1546490747/projectPhotos/musicproject.jpg"
          >
        </div>
        <!-- content container -->
        <div class="flex-card-content">
          <h3 class="flex-card-heading">Drum Machine</h3>
          <p>
            An application that plays drum sounds with visual effects, applying
            Vue, CSS3, HTML.
          </p>
          <a
            href="https://cocky-khorana-ef49fc.netlify.com/"
            target="_blank"
            class="flex-card-button increase myBtn"
          >
            See
            More
          </a>
        </div>
      </div>
    </div>

    <!--<div class="parallax-three"></div>-->
    <div class="pimg3"></div>

    <div class="last-row">
      <div class="left">
        <p>Web Development with an emphasis on designing, building, and managing web solutions</p>
      </div>
      <div class="center">
        <p>We are passionate about the digital experience, creating stuff real people will really love</p>
      </div>
      <div class="right">
        <p>We offer a visually rich, engaging interactive experience that focuses on user experience</p>
      </div>
    </div>
    <div class="dividertwo"></div>
  </div>
</template>

<script>
import image1 from "../assets/butterfly/butterfly.jpg";
import imagetwo from "../assets/butterfly/butterfly2.jpg";
import imagethree from "../assets/butterfly/butterfly3.jpg";
import Slide from "./Slide.vue";
export default {
  name: "Parahome",
  components: {
    Slide
  },
  data() {
    return {
      image1: image1,
      imagetwo: imagetwo,
      imagethree: imagethree
    };
  },
  methods: {
    parallaxMe() {
      //removed parallax effect and added fixed div with images'
      //let offset = window.scrollY;
      //let one = document.querySelector(".parallax-one");
      //let two = document.querySelector(".parallax-two");
      //let three = document.querySelector(".parallax-three");
      //one.style.backgroundPositionY = offset * 1.05 + "px";
      //two.style.backgroundPositionY = offset * 0.95 + "px";
      //three.style.backgroundPositionY = offset * 0.7 + "px";
    }
  },
  created() {
    //window.addEventListener("scroll", this.parallaxMe);
  }
};
</script>

<style scoped lang='scss'>
@import "../../public/styles.scss";
@import url("https://fonts.googleapis.com/css?family=Gravitas+One");
@import url("https://fonts.googleapis.com/css?family=Abril+Fatface");

* {
  border: 0;
  margin: 0;
  padding: 0;
}

.pimg1{
   background-image: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544596970/projectPhotos/mariposaweb/butterfly/butterfly.jpg");
   min-height:400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position:relative;
}
.pimg2{
   background-image: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544596970/projectPhotos/mariposaweb/butterfly/butterfly2.jpg");
   min-height:300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position:relative;
}
.pimg3{
   background-image: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544596970/projectPhotos/mariposaweb/butterfly/butterfly3.jpg");
   min-height:300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position:relative;
}

.parallax-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: $White;

  h3 {
    margin-bottom: 10px;
  }

  /*height: 900px;
        width: 100vw;
        background: url('https://res.cloudinary.com/dmglopmul/image/upload/v1544596930/projectPhotos/mariposaweb/butterfly/butterfly.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        /*background-position: center;
        background-attachment: fixed;
        style="height: 900px;background: url('https://res.cloudinary.com/dmglopmul/image/upload/v1544625042/projectPhotos/mariposaweb/butterfly/butterflybig.jpg');"*/
}
/*.parallax-one {
  height: 400px;
  /*width: 100vw;*/
  /*background: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544596970/projectPhotos/mariposaweb/butterfly/butterfly.jpg");
  /*background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}*/

/*.parallax-two {
  height: 400px;
  /*width: 100vw;
  background: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544596970/projectPhotos/mariposaweb/butterfly/butterfly2.jpg");
  /*background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*height: 300px;
        width: 100vw;
        background: url('https://res.cloudinary.com/dmglopmul/image/upload/v1544624680/projectPhotos/mariposaweb/butterfly/butterfly2big.jpg');
        background-size: cover;
        /*background-position: center;
        background-repeat: no-repeat;
}*/

.parallax-three { 
  //height: 400px;
  /*width: 100vw;*/
  background: url("https://res.cloudinary.com/dmglopmul/image/upload/v1544596970/projectPhotos/mariposaweb/butterfly/butterfly3.jpg");
  background-attachment: fixed;
  /*background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*background-size: cover;
  background-position: center;*/
  //background-repeat: no-repeat;
}

.myBtn {
  color: $White;
  /*#BDBDBD;*/
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-weight: 900;
}

p.myBtn {
  font-size: 2.5em;
}

#parahome {
  background: #00b4db;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0083b0, #00b4db);
}

.align-me {
  text-align: center;
}

.vueProjects {
  /*padding: 20px;*/
  background: #00b4db;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0083b0, #00b4db);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*border: 5px solid black;*/
  height: 600px;
  margin: 0 auto;
  padding: 5px;
}

/*javascript cards*/
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 5px;
  margin-top: 20px;
}

img {
  height: 50%;
  width: 50%;
  border-radius: 16%;
}

.flex-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: all 2s;
}

flex-card-content p {
  margin: 5px;
}

span.spin {
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-weight: 900;
  font-size: 1em;
}

span.spin:hover {
  color: wheat;
}

.flex-card-button {
  width: 115px;
  height: 25px;
  padding-top: 2px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.2em;
}

.flex-card-button:hover {
  color: wheat;
}

a.flex-card-button.tilt.myBtn:hover {
  color: wheat;
}

/*******************/

/*animated button*/
.card
  .card-action
  a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
  color: #0d47a1;
  font-size: 16px;
  font-weight: 400;
}

.tilt {
  display: inline-block;
  transition: 0.3s;
  text-decoration: none;
}

.tilt:hover {
  transform: rotate(15deg);
  color: #78909c;
}

.border {
  color: #0083b0;
  font-weight: 500;
  -webkit-transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  display: inline-block;
  text-decoration: none;
  position: relative;
}

.border:hover {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

.border::before {
  position: absolute;
  top: -2px;
  left: -7px;
  box-sizing: content-box;
  padding: 0 5px;
  width: 100%;
  height: 100%;
  border: 2px solid #0083b0;
  content: "";
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;
  transition: opacity 0.2s, transform 0.2s;
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

.border:hover::before {
  opacity: 1;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.increase {
  display: inline-block;
  transition: 0.3s;
  font-weight: bold;
  text-decoration: none;
}

.increase:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.spin {
  display: inline-block;
  color: #0d47a1;
  font-size: 16px;
}

.spin {
  transition: all 1s ease-in-out;
}

.spin:hover {
  -webkit-transform: rotateX(360deg);
  transform: rotateX(360deg);
}

/*end javascript card stuff*/

/*#last-row {
              margin: 0;
          }*/

.dividertwo {
  height: 2px;
  background: #00d2ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #928dab, #00d2ff);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #928dab, #00d2ff);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.btn {
  margin-bottom: 5px;
  padding: 5px 5px;
  font-size: 16px;
}

.last-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #333;
  align-items: center;
}

.left {
  font-family: "Abril Fatface", cursive;
  font-weight: bold;
  font-size: 20px;
  background: #2193b0;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6dd5ed, #2193b0);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 5px;
}

.center {
  font-family: "Abril Fatface", cursive;
  font-weight: bold;
  font-size: 20px;
  background: #00b4db;
  padding: 5px;
}

.right {
  font-family: "Abril Fatface", cursive;
  font-weight: bold;
  font-size: 20px;
  background: #2193b0;
  padding: 5px;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6dd5ed, #2193b0);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/*hover animation*/
.hover-animation {
  animation-name: hover-out;
  -webkit-animation-duration: 0.9s;
  animation-duration: 0.9s;
}

.hover-animation:hover {
  animation-iteration-count: 2;
  transform: scale(1);
  -webkit-animation-name: hover-in;
  animation-name: hover-in;
  -webkit-animation-duration: 0.9s;
  animation-duration: 0.9s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: 2;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@keyframes hover-in {
  from {
    -webkit-transform: scale(1);
  }

  to {
    -webkit-transform: scale(1.05);
  }
}

@keyframes hover-out {
  from {
    -webkit-transform: scale(1.05);
  }

  to {
    -webkit-transform: scale(1);
  }
}

/*media queries*/
@media only screen and (max-width: 380px) {
  .vueProjects {
    height: 850px;
  }
}

@media only screen and (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
/*@media only screen and (max-width: 380px) {
  .vueProjects {
    height: 850px;
  }
}*/

@media only screen and (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }

  .last-row {
    grid-template-columns: 1fr;
  }

  .vueProjects {
    height: 625px;
  }
}
</style>