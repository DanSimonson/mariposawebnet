<template>
    <div id="blog-post">
        <h1 class='my-title'>{{ post.data.title }}</h1>
        <h4 class='author'>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
        <div class='blog-body' v-html="post.data.body"></div>

        <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="meta-button">
            <!--{{ post.meta.previous_post.title }}-->previous&nbsp&nbsp&nbsp
        </router-link>
        <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="meta-button">
            <!--{{ post.meta.next_post.title }} -->next
        </router-link>
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

    .post-container {

        h1,
        h2,
        h3,
        h4,
        h5 {
            font-weight: 600;
            margin-bottom: 1em;
            margin-top: 1.5em;
        }
    }

    .my-title,
    .author {
        text-align: center
    }

    .blog-body {
        padding: 20px 20px;

    }

    .meta-button {
        text-decoration: none;
        color: $Black;
        padding-bottom: 20px;
        margin: 0 auto;
    }
</style>