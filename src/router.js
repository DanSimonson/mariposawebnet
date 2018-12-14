import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cards from "@/views/Cards";
import Contact from "@/views/Contact";
import BlogHome from "@/views/BlogHome.vue";
import BlogPost from "@/views/BlogPost.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cards/",
      name: "cards",
      component: Cards
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/blog/",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
