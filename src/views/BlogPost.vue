<template>
    <div id="blog-post">

        <Head></Head>
        <Logo></Logo>
        <h1 class='my-title'>{{ post.data.title }}</h1>
        <h4 class='author'>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
        <div class='blog-body' v-html="post.data.body"></div>
        <div class='flexybox'>
            <div class='wrapper'>
                <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="meta-button1">
                    <!--{{ post.meta.previous_post.title }}-->previous&nbsp&nbsp&nbsp
                </router-link>
                <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="meta-button2">
                    <!--{{ post.meta.next_post.title }} -->next
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    /*import {
        butter
    } from '@/buttercms'*/
    import butter from '@/buttercms';
    export default {
        name: 'blog-post',
        data() {
            return {
                post: {}
            }
        },
        methods: {
            getPost() {
                butter.post.retrieve(this.$route.params.slug)
                    .then((res) => {
                        // console.log(res.data)
                        this.post = res.data
                    }).catch((res) => {
                        console.log(res)
                    })
            }
        },
        watch: {
            $route(to, from) {
                this.getPost()
            }
        },
        created() {
            this.getPost()
        }
    }
</script>
<style scoped lang='scss'>
    @import "../../public/styles.scss";

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: 600;
        margin-bottom: 1em;
        margin-top: 1.5em;
    }

    ul,
    ol {
        margin-bottom: 1.25em;

        li {
            margin-bottom: 0.25em;
        }
    }

    p {
        font-family: Georgia, Cambria, "Times New Roman", Times, serif;
        font-size: 1.25em;
        line-height: 1.58;
        margin-bottom: 1.25em;
        margin-bottom: 3em;
        font-weight: 400;
        letter-spacing: -.003em;
    }

    /* Responsive default image width */
    img {
        max-width: 100%;
        height: auto;
    }

    /* Responsive floating */
    @media only screen and (min-width: 720px) {
        .butter-float-left {
            float: left;
            margin: 0px 10px 10px 0px;
        }

        .butter-float-right {
            float: right;
            margin: 0px 0px 10px 10px;
        }
    }

    /* Image caption */
    figcaption {
        font-style: italic;
        text-align: center;
        color: #ccc;
    }


    div.blog-body {
        word-break: break-all;
        word-wrap: break-word;
        margin-bottom: 40px;

    }



    p code {
        padding: 2px 4px;
        font-size: 90%;
        color: #c7254e;
        background-color: #f9f2f4;
        word-break: break-all;
        word-wrap: break-word;
        border-radius: 4px;
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    pre {
        display: block;
        padding: 1em;
        margin: 0 0 2em;
        font-size: 1em;
        line-height: 1.4;
        word-break: break-all;
        word-wrap: break-word;
        color: #333333;
        background-color: #f5f5f5;
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    .my-title,
    .author {
        text-align: center;
        margin-top: 20px;
    }

    .blog-body {
        padding: 20px 20px;

    }

    .flexybox {
        margin: 25px 0;
        display: flex;
        /*border: 5px solid blue;*/
        justify-content: center;

        .wrapper {
            /*border: 5px solid red;*/
        }

        .meta-button1,
        .meta-button2 {
            border: 2px solid $Light-blue;
            text-decoration: none;
            color: $Light-blue;
            font-family: "proximo nova";
            font-weight: 100;
            font-size: 2rem;
            border-radius: 50px;
            padding: 10px 80px;

        }

        .meta-button2 {
            /*border: 5px solid black;*/
            margin-left: 40px;
        }

        .meta-button1:hover,
        .meta-button2:hover {
            background-color: $Light-blue;
            color: $White;
        }
    }
</style>