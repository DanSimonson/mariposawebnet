<template>
    <div class="carousel-view">
        <div class="button-prev" @click="arrowLeft" name="fade"></div>
        <transition-group class="carousel" tag="div">
            <div v-for="(slide, index) in slides" class="slide" :key="slide.id" :style="{backgroundImage: 'url(' + slides[index].imgLink + ')'}"></div>
        </transition-group>

        <div class="carousel-controls">
            <div class="squares">
                <div v-for="(slide, index) in slides" :key="slide.id"></div>
                <p class="pSlide-one">
                    {{ slides[currentMsg].title }}
                </p>
                <p class="pslide-two">
                    {{ slides[currentMsg].description }}
                </p>
                <a class='btn-link' :href="`${slides[currentMsg].url}`" target="__blank">See More &rarr;</a>
            </div>
        </div>
        <div class="button-next" @click="arrowRight"></div>
    </div>
</template>

<script>
    export default {
        name: "Slide",
        data() {
            return {
                slides: [{
                        imgLink: require("../assets/vueProjects/waterfall2big.jpg"),
                        title: "ShiningNatureLandscape",
                        description: "Landscaping website using Vue, CSSGrid, Flexbox, SASS",
                        id: 1,
                        url: "https://brave-mccarthy-f6fbb2.netlify.com"
                    },
                    {
                        imgLink: require("../assets/vueProjects/dcs.jpg"),
                        title: "Dan's Wysiwig Keeper",
                        description: "Document Control System with editor using React.js and Firestore.",
                        id: 2,
                        url: "https://romantic-agnesi-f35b5d.netlify.com/"
                    },
                    /*{
                        imgLink: require("../assets/vueProjects/handbig.jpg"),
                        title: "Spa Website",
                        description: "Spa website using Vue, Authentication, Route Guards.",
                        id: 2,
                        url: "https://user-info-ee17c.firebaseapp.com/"
                    },*/
                    {
                        imgLink: require("../assets/vueProjects/childrenKusina2.jpg"),
                      title: "Cucina Ni Nanay",
                      description:
                        "Filipino cuisine restaurant using Vue, CSS Grid, Flexbox",
                      id: 6,
                      url: "http://aberrant-tendency.surge.sh/#/"
                    },
                    {
                        imgLink: require("../assets/vueProjects/hackerNews.png"),
                        title: "Hacker-News Clone",
                        description: "A Hacker-News Clone, utilizing Vue, Axios, Firestore",
                        id: 4,
                        url: "http://extra-small-stick.surge.sh"
                    },
                    {
                        imgLink: require("../assets/vueProjects/avengers.jpg"),
                        title: "Avenger's Dossiers App",
                        description: "a full-stack app of intelligence dossiers on marvel's avengers",
                        id: 5,
                        url: "https://tender-shockley-0f4de4.netlify.com/"

                    },
                    /*{
                        imgLink: require("../assets/vueProjects/crud.jpg"),
                        title: "Customer Information App",
                        description: "crud app using Vue, Firestore, Bootstrap 4.",
                        id: 5,
                        url: "https://human-resources-cb42b.firebaseapp.com/"

                    }*/
                    /*{
                               
                                   imgLink: require("../assets/vueProjects/onlineStore.jpg"),
                        title: "Online Store",
                        description: "A Vue.js online store utilizing vuex and firebase.",
                        id: 3,
                        url: "https://vue-blog-ed03b.firebaseapp.com/"
                    }
                    /*{
                      
                       imgLink: require('../assets/vueProjects/recipeBox.jpg'),
                                  title: 'Recipe Box',
                                  description: 'Application that can create, edit, delete and save recipes, taking advantage of Vue, Firestore, MaterializeCSS, JavaScript.',
                                  id: 5,
                                  url: 'https://recipes-ddb43.firebaseapp.com/#/'
                    }*/
                ],
                stopMe: null,
                stopMsg: null,
                currentMsg: ""
            };
        },
        created() {
            let selfie = this;
            this.stopMe = setInterval(() => {
                selfie.next();
            }, 4000);
            this.stopMsg = setTimeout(() => {
                this.nextSlide();
            }, 4000);
            this.nextSlide();
        },
        methods: {
            nextSlide() {
                if (this.currentMsg + 1 < this.slides.length) {
                    this.currentMsg++;
                } else {
                    this.currentMsg = 0;
                }
            },
            next() {
                const first = this.slides.shift();
                this.slides = this.slides.concat(first);
            },
            previous() {
                const last = this.slides.pop();
                this.slides = [last].concat(this.slides);
            },
            arrowLeft() {
                clearInterval(this.stopMe);
                this.previous();
                let selfie = this;
                this.stopMe = setInterval(() => {
                    selfie.previous();
                }, 4000);
            },
            arrowRight() {
                clearInterval(this.stopMe);
                this.next();
                let selfie = this;
                this.stopMe = setInterval(() => {
                    selfie.next();
                }, 4000);
            }
        }
    };
</script>

<style scoped lang='scss'>
    @import "../../public/styles.scss";
    @import url("https://fonts.googleapis.com/css?family=Nixie+One");
    @import url("https://fonts.googleapis.com/css?family=Quattrocento+Sans");
    @import url("https://fonts.googleapis.com/css?family=Libre+Baskerville|Nixie+One");

    h4 {
        color: #fff;
    }

    .myBtn {
        color: white;
        /*#BDBDBD;*/
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-weight: 900;
    }

    .carousel-view {
        position: relative;
        height: 100%;

        /*border: 5px solid green;*/

    }

    .carousel-view .button-prev,
    .carousel-view .button-next {
        /*background-color: yellow;*/
        position: absolute;
        top: 50%;
        border: 12px solid transparent;

    }

    .carousel-view .button-prev {
        border-right-color: wheat;
        transform: rotate(-3deg);
        z-index: 1;
        transition: all .3s;
    }


    .carousel-view .button-next {
        border-left-color: wheat;
        left: 96.5%;
        transition: all .3s;
    }

    .carousel-view .button-prev:hover,
    .carousel-view .button-prev:active {
        border-right-color: purple;

    }

    .carousel-view .button-next:hover,
    .carousel-view .button-next:active {

        border-left-color: purple;

    }

    .carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;
        min-height: 75%;

        /* 63%;
        /*border: 5px solid red*/
        div.slide {
            height: 290px;
            width: 290px;
        }
    }

    .carousel-controls {
        /*border: 5px solid mediumslateblue;*/
        /*position: relative;*/
        height: 180px;
        /*position: absolute;*/
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .carousel-controls .squares {
        text-align: center;
        font-family: "Libre Baskerville", serif;
        line-height: 1.2;
        color: oldlace;
        /*border: 5px solid yellow;*/

    }

    p.pSlide-one {
        font-size: 1.5em;
    }

    p.pslide-two {
        font-size: 1.3em;
    }

    .carousel-controls .squares a {
        margin-bottom: 20px;
        font-size: 1.3em;
        color: oldlace;
    }

    .carousel-controls .squares a:hover {
        color: wheat;
        text-decoration: none;
    }

    a.btn-link {


        &:link,
        &:visited {
            font-size: 1.6rem;
            color: $White;
            /*background-color: $Medium-green;*/
            display: inline-block;
            text-decoration: none;
            /*border-bottom: 1px solid $Medium-green;*/
            padding: 3px;
            transition: all .2s;
        }

        &:hover {
            background-color: $Medium-green;
            color: $White;
            box-shadow: 0 1rem 2rem rgba($Black, .15);
            transform: translateY(-2px);
        }

        &:active {
            box-shadow: 0 .5rem 1rem rgba($Black, .15);
            transform: translateY(0);
        }
    }

    .slide {
        flex: 0 0 20em;
        height: 20em;
        margin: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0.1em solid #000;
        border-radius: 50%;
        transition: transform 0.3s ease-in-out;
    }

    .slide:first-of-type {
        opacity: 0;
    }

    .slide:last-of-type {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.8s ease;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        position: absolute;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        visibility: hidden;
    }



    /*media queries*/
    @media screen and (max-width: 320px) {
        /*.slide {
            height: 20em;
            flex: 0 0 20em;
        }*/

        .carousel-controls .squares {
            padding: 2px;
        }

        .carousel-controls .squares .pslide-one p {
            font-size: 1em;
        }

        .carousel-controls .squares .pslide-two p {
            font-size: 1em;
        }

        .carousel-controls .squares a {
            font-size: 1em;
        }
    }

    @media screen and (max-width: 375px) {
        /*.slide {
            height: 20em;
            flex: 0 0 20em;
        }*/

        .carousel-controls .squares {
            width: 250px;
        }

        .carousel-controls .squares .pslide-one p {
            font-size: 1em;
        }

        .carousel-controls .squares .pslide-two p {
            font-size: 1em;
        }

        .carousel-controls .squares a {
            font-size: 1em;
        }

        .carousel-view .button-next {
            border-left-color: white;
            left: 90%;
        }
    }

    @media screen and (max-width: 425px) {
        /*.slide {
            height: 20em;
            flex: 0 0 20em;
        }*/

        .carousel-controls .squares {
            padding: 2px;
            font-size: 1em;
            line-height: 1;
        }

        .carousel-view .button-next {
            border-left-color: white;
            left: 95%;
        }
    }

    @media screen and (max-width: 768px) {
        /*.slide {
            height: 20em;
            flex: 0 0 20em;
        }*/
    }

    @media screen and (max-width: 1024px) {
        /*.slide {
            height: 20em;
            flex: 0 0 20em;
        }*/
    }

    @media screen and (max-width: 1440px) {
        /*.slide {
            height: 20em;
            flex: 0 0 20em;
        }*/
    }

    @media screen and (max-width: 2560px) {
        /*.slide {
            height: 20em;
            flex: 0 0 20em;
        }*/
    }
</style>