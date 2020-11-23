<template>
  <section>
    <swiper ref="mySwiper" class="swiper" :options="swiperOption">
      <template v-for="(v, i) in slidePic">
        <swiper-slide :key="i"
          ><img :src="v.link" :alt="v.name"
        /></swiper-slide>
      </template>
    </swiper>
    <div class="info">
      <span
        class="page-number"
        >{{ (activeNow &lt; 10) ? ("0" + activeNow) : activeNow  }}</span
      >
      <h1 class="title">{{ slidePic[infoIndex].title }}</h1>
      <p class="description">
        {{ slidePic[infoIndex].description }}
      </p>
      <button class="primary-btn" type="button">
        <a href="javaScript:void(0)">Learn More</a>
      </button>
      <div class="slide-nav">
        <div class="circle-outer" @click="slidePrev">
          <div class="circle-inner">
            <span class="arrow left"></span>
          </div>
        </div>
        <div class="circle-outer" @click="slideNext">
          <svg class="outer-wapper" width="50" height="50">
            <circle
              :class="['outer']"
              cx="25"
              cy="25"
              r="23"
              transform="rotate(-90, 25, 25)"
              stroke="#e3e3e3"
              fill="transparent"
              stroke-width="2px"
            />
            <circle
              :class="['outer', { 'go-ani': isGo }]"
              cx="25"
              cy="25"
              r="23"
              transform="rotate(-90, 25, 25)"
              stroke="#ffae05"
              fill="transparent"
              stroke-width="2px"
            />
          </svg>
          <div class="circle-inner timer">
            <span class="arrow right"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "SliderTop",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["slide-pic"],
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        loop: true,
        fadeEffect: {
          crossFade: true,
        },
        effect: "fade",
      },
      activeNow: 0,
      isGo: true,
    };
  },
  mounted() {
    this.checkActiveNow();
    this.$refs.mySwiper.$swiper.on("slideChange", this.checkActiveNow);
  },
  methods: {
    checkActiveNow() {
      this.activeNow = this.$refs.mySwiper.$swiper.realIndex + 1;
      this.addGo();
    },
    slideNext() {
      this.$refs.mySwiper.$swiper.slideNext(300, this.checkActiveNow());
    },
    slidePrev() {
      this.$refs.mySwiper.$swiper.slidePrev(300, this.checkActiveNow());
    },
    addGo() {
      this.isGo = false;
      setTimeout(() => {
        this.isGo = true;
      }, 50);
    },
  },
  computed: {
    infoIndex: function () {
      return this.activeNow == 0 ? 0 : this.activeNow - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  > .swiper-container {
    flex: 2 1 auto;
    > .swiper-wrapper {
      > .swiper-slide {
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  > .info {
    position: relative;
    flex: 1 0 400px;
    padding: 30px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: baseline;
    > .page-number {
      font-size: 1.2rem;
      color: #ff7d00;
      line-height: 1.5em;
    }
    > .title {
      color: #222222;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
    > .description {
      color: #222222;
      font-size: 1.2rem;
      line-height: 1.5em;
      padding: 0.5rem 0 1rem;
    }
    > .primary-btn {
      border: none;
      border-radius: 5px;
      background: linear-gradient(90deg, #ffae05 0%, #ff780d 100%);
      &:hover {
        opacity: 0.6;
      }
      > a {
        font-size: 1.2rem;
        display: inline-block;
        text-decoration: none;
        color: white;
        padding: 0.75rem 1rem;
      }
    }
    > .slide-nav {
      display: flex;
      justify-content: space-around;
      flex-flow: row nowrap;
      height: 50px;
      width: 160px;
      position: absolute;
      right: 5px;
      bottom: 20px;
      > .circle-outer {
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        > .outer-wapper {
          position: absolute;
          > .outer {
            stroke-dasharray: 145;
            &.go-ani {
              animation: show100 4s linear;
            }
          }
        }
        > .circle-inner {
          display: flex;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transform: translate(0, -2px);
          .arrow {
            margin: 16px auto;
            width: 15px;
            height: 15px;
            border-top: 2px solid #000;
            border-left: 2px solid #000;
            cursor: pointer;
            &:hover {
              opacity: 0.6;
            }
            &.left {
              transform: translateX(5px) rotate(-45deg);
            }
            &.right {
              transform: translateX(-5px) rotate(135deg);
            }
          }
        }
      }
    }
  }
}

@keyframes show100 {
  from {
    stroke-dashoffset: 145;
  }

  to {
    stroke-dashoffset: 0;
  }
}

@media screen and (max-width: 992px) {
  section {
    flex-flow: row wrap;
    > .info {
      flex: 1 0 260px;
    }
  }
}

@media screen and (max-width: 768px) {
  section {
    > .info {
      > .title {
        font-size: 1.5rem;
      }
      > .description {
        font-size: 1rem;
      }
      > .primary-btn {
        > a {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>