<template>
    <div>

        <Head></Head>
        <Logo></Logo>
        <!-- <span class="spin">-->
        <h1 class='coolH1'>{{ page_title }}</h1>

        <div id="blog-home" class="cards">
            <!--
        Create v-for and apply a key for Vue. Example is using a combination of the slug and index
      -->
            <div class="card" v-for="(post,index) in posts" :key="post.slug + '_' + index">
                <router-link :to="'/blog/' + post.slug" style="text-decoration:none;">
                    <article class="media">
                        <div class="one">
                            <figure>
                                <!-- Bind results using a ':' -->
                                <!-- Use a v-if/else if their is a featured_image -->
                                <img class='hover-animation' v-if="post.featured_image" :src="post.featured_image" alt="" />
                                <img v-else src="http://via.placeholder.com/250x250" alt="" />
                            </figure>
                        </div>
                        <div class="two">
                            <h2>{{ post.title }}</h2>
                        </div>
                        <div class="three">
                            <p>{{ post.summary }}</p>
                        </div>
                        <div class="four"><button>Read More</button></div>
                    </article>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import butter from "@/buttercms";
    export default {
        name: "blog-home",
        data() {
            return {
                page_title: "Dan's Awesome Blog",
                posts: []
            };
        },
        methods: {
            getPosts() {
                butter.post
                    .list({
                        page: 1,
                        page_size: 10
                    })
                    .then(res => {
                        // console.log(res.data)
                        this.posts = res.data.data;
                    });
            },
            loadMe() {
                console.log('title: ', myTitle)

                let myTitle = document.querySelector(".coolH1");
                myTitle.classList.add('spin');

            }
        },
        mounted() {
            let selfie = this;
            this.getPosts();
            this.$nextTick(() => {
                selfie.loadMe();
            })
            /*this.$nextTick()
                .then(function () {
                    // DOM updated
                    this.loadMe();
                })
            //window.addEventListener('load', () => {

            // run after everything is in-place
            //})*/

        }
    };
</script>
<style scoped lang="scss">
    @import "../../public/styles.scss";

    /*.my-title {
        margin: 50px 0;
        border: 5px solid green;
        text-align: center;
    }*/

    .coolH1 {
        color: #0D47A1;
        font-size: 5rem;
        /*border: 5px solid brown;*/
        margin: 50px 0;
        text-align: center;

    }

    .spin {

        /*-webkit-transform: rotateX(360deg);
        transform: rotateX(360deg);
        transition: all 1s ease-in-out;*/
        animation-duration: 5s;
        /* the duration of the animation */
        animation-timing-function: ease-out;
        /* how the animation will behave */
        animation-delay: .5s;
        /* how long to delay the animation from starting */
        animation-iteration-count: 1;
        /* how many times the animation will play */
        animation-name: spinMe;
        /* the name of the animation we defined above */
    }

    @keyframes spinMe {
        0% {
            /*transform: translateX(-100%);*/
            transform: rotateX(180deg);
        }

        25% {}

        50% {
            transform: rotateX(-180deg);
            transform: scaleY(1.5);
            transform: scaleX(1.5);
            color: red;
        }

        75% {}

        100% {
            /*transform: translateX(0);*/
            transform: rotateX(360deg);
            transform: scaleY(1);
            transform: scaleX(1);
            color: #0D47A1;

        }
    }

    .spin:hover {
        -webkit-transform: rotateX(360deg);
        transform: rotateX(360deg);

    }

    .cards {
        /*border: 5px solid orangered;*/
        grid-column: center-start / center-end;
        margin: 7rem 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 5rem;
        justify-content: center;
    }

    .media {
        display: flex;
        flex-basis: 100%;
        flex-wrap: wrap;
        justify-content: center;
        transition: all .2s;


        button {
            font-family: Arial, Hevetica, sans-serif;
            font-size: 17px;
            padding: 12px 24px;
            background: #4eb1ba;
            color: #0d47a1;
            text-decoration: none;
            border-radius: 3px;
            transition: background 0.3s linear 0s, color 0.3s linear 0s;
        }

        button:hover {
            background: #0d47a1;
            color: #4eb1ba;
            cursor: pointer;
            box-shadow: 0 1rem 2rem rgba($Black, 0.15);
            transform: translateY(-2px);
        }

        button:active {
            box-shadow: 0 0.5rem 1rem rgba($Black, 0.15);
            transform: translateY(0);
        }
    }

    .card {
        /*border: 5px solid fuchsia;*/
        background: linear-gradient(#a1c4fd, #c2e9fb);
        border-radius: 4%;

        a {
            text-decoration: none;
            color: $Black;
        }
    }

    .one {
        /*border: 5px solid deepskyblue;*/
        width: 100%;
        text-align: center;
        padding: 10px;
        transition: all .2s;
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




    .two {
        /*border: 5px solid deepskyblue;*/
        width: 100%;
        text-align: center;
        padding: 10px;
    }

    .three {
        /*border: 5px solid deepskyblue;*/
        width: 100%;
        text-align: center;
        padding: 10px;
    }

    .four {
        /*border: 5px solid deepskyblue;*/
        width: 100%;
        text-align: center;
        padding: 10px;
    }
</style>