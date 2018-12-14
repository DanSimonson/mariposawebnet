import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Logo from "./components/Logo.vue";
import Head from "./components/Head.vue";
import Footer from "./components/Footer.vue";

Vue.component("Logo", Logo);
Vue.component("Head", Head);
Vue.component("Footer", Footer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
