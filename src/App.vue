<template>
  <div id="app" :class="{ overflow: !isListClose }">
    <NavBar></NavBar>
    <NavHam></NavHam>
    <Banner>
      <FloatBalls></FloatBalls>
    </Banner>
    <SliderTop :slide-pic="slidePic1"></SliderTop>
    <BackgroundWrapper>
      <SliderCenter
        :slide-pic="slidePic2"
        :title="title2"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      ></SliderCenter>
      <SliderCenter
        :slide-pic="slidePic3"
        :title="title3"
        data-aos="fade-left"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-easing="ease-in-sine"
      ></SliderCenter>
    </BackgroundWrapper>
    <ContentSection></ContentSection>
    <AppBanner>
      <FloatBalls></FloatBalls>
    </AppBanner>
    <FooterSection></FooterSection>
    <FooterCopyright></FooterCopyright>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NavHam from "./components/NavHam.vue";
import Banner from "./components/Banner.vue";
import SliderTop from "./components/SliderTop.vue";
import SliderCenter from "./components/SliderCenter.vue";
import ContentSection from "./components/ContentSection.vue";
import AppBanner from "./components/AppBanner.vue";
import FooterSection from "./components/FooterSection.vue";
import FooterCopyright from "./components/FooterCopyright.vue";
import BackgroundWrapper from "./components/BackgroundWrapper.vue";
import FloatBalls from "./components/FloatBalls.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NavHam,
    Banner,
    SliderTop,
    SliderCenter,
    ContentSection,
    AppBanner,
    FooterSection,
    FooterCopyright,
    BackgroundWrapper,
    FloatBalls,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.getWindowWidth);
    });
  },
  methods: {
    getWindowWidth() {
      this.$store.dispatch("setWindowWidth", window.innerWidth);
    },
  },
  computed: {
    isListClose() {
      return this.$store.getters.getListClose;
    },
    slidePic1() {
      return this.$store.getters.getSlidePic(1);
    },
    slidePic2() {
      return this.$store.getters.getSlidePic(2);
    },
    slidePic3() {
      return this.$store.getters.getSlidePic(3);
    },
    title2() {
      return this.$store.getters.getSlideTitle(2);
    },
    title3() {
      return this.$store.getters.getSlideTitle(3);
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>

<style lang="scss">
#app {
  position: relative;
  background-color: white;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  &.overflow {
    width: 100%;
    height: 100vh;
  }
}
</style>
