<template>
    <div>

        <Head></Head>
        <Logo></Logo>

        <div id="blog-home" class="cards">
            <!-- <h1>{{ page_title }}</h1> -->
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
                                <img v-if="post.featured_image" :src="post.featured_image" alt="" />
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
    /*import {
        butter
    } from '@/buttercms'*/
    import butter from "@/buttercms";
    export default {
        name: "blog-home",
        data() {
            return {
                page_title: "Blog",
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
            }
        },
        created() {
            this.getPosts();
        }
    };
</script>
<style scoped lang="scss">
    @import "../../public/styles.scss";

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
            background: #4eb1ba;
            padding: 12px 24px;
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


        /*justify-content: flex-end;
        display: grid;
        grid-template-columns: repeat(1, 1fr);*/
        h a {
            text-decoration: none
        }
    }

    .one {
        /*border: 5px solid deepskyblue;*/
        width: 100%;
        text-align: center;
        padding: 10px;


        img:hover {
            transform: scale(.95);
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