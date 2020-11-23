import './assets/css/reset.scss';
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade
} from "swiper";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
swiper.use([Navigation, Pagination, Autoplay, EffectFade])
Vue.config.productionTip = false;

new Vue({
  store,
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount("#app");