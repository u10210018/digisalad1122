<template>
  <section>
    <div class="nav">
      <div class="info">
        <h1 class="title">{{ title.title }}</h1>
        <h2 class="description">
          {{ title.description }}
        </h2>
      </div>
      <div class="buttons">
        <span
          :class="['arrow left', { 'dont-touch': isBeginning }]"
          @click="slidePrev"
        ></span>
        <span
          :class="['arrow right', { 'dont-touch': isEnd }]"
          @click="slideNext"
        ></span>
        <a href="javaScript:void(0)">Discover More</a>
      </div>
    </div>
    <swiper ref="mySwiper" class="swiper" :options="swiperOption">
      <template v-for="(v, i) in slidePic">
        <swiper-slide :key="i">
          <div class="card">
            <a class="card-pic" href="javaScript:void(0)">
              <img :src="v.link" :alt="v.name" />
            </a>
            <div class="card-bottom">
              <h3 class="card_name">{{ v.name }}</h3>
              <div class="card_place">
                <h4 class="type">{{ v.type }}</h4>
                <span class="position">
                  <span class="marker"
                    ><img src="../assets/img/marker.png" alt="marker"
                  /></span>
                  <span class="floor">{{ v.position }}</span>
                </span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "SliderCenter",
  components: {
    Swiper,
    SwiperSlide
  },
  props: ["slide-pic", "title"],
  data() {
    return {
      isBeginning: false,
      isEnd: false,
      swiperOption: {
        centeredSlides: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            initialSlide: 0
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
            initialSlide: 0
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 10,
            initialSlide: 0
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            initialSlide: 0
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            initialSlide: 1
          }
        }
      }
    };
  },
  mounted() {
    this.slideIsEnd();
    this.$refs.mySwiper.$swiper.on("slideChange", this.slideIsEnd);
  },
  methods: {
    slideNext() {
      this.$refs.mySwiper.$swiper.slideNext(300);
    },
    slidePrev() {
      this.$refs.mySwiper.$swiper.slidePrev(300);
    },
    slideIsEnd() {
      this.isBeginning = this.$refs.mySwiper.$swiper.isBeginning;
      this.isEnd = this.$refs.mySwiper.$swiper.isEnd;
    }
  }
};
</script>

<style scoped lang="scss">
section {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: transparent;
  padding: 15vh 0 5vh;
  > .nav {
    display: flex;
    justify-content: space-between;

    > .info {
      display: flex;
      padding-left: 13vw;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: baseline;
      > .title {
        color: #222222;
        font-weight: bold;
        font-size: 2.25rem;
        line-height: 1.5em;
      }
      > .description {
        font-weight: normal;
        color: #222222;
        font-size: 1.25rem;
        line-height: 1.5em;
        padding: 8px 0 50px;
      }
    }
    > .buttons {
      display: flex;
      width: 260px;
      padding-right: 5vw;
      align-items: center;
      > .arrow {
        margin: 16px auto;
        width: 12px;
        height: 12px;
        border-top: 2px solid #000;
        border-left: 2px solid #000;
        cursor: pointer;
        &:hover {
          opacity: 0.6;
        }
        &.dont-touch {
          cursor: not-allowed;
          border-top: 2px solid #bdbdbd;
          border-left: 2px solid #bdbdbd;
        }
        &.left {
          transform: translateX(5px) rotate(-45deg);
        }
        &.right {
          transform: translateX(-5px) rotate(135deg);
        }
      }
      > a {
        color: #222222;
        font-size: 15px;
        text-decoration: none;
        padding: 8px 0 0;
        margin-left: 20px;
        border-bottom: 1px solid #222222;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
  > .swiper-container {
    min-height: 200px;
    flex: 2 1 auto;
    padding-bottom: 10px;
    > .swiper-wrapper {
      > .swiper-slide {
        > .card {
          position: relative;
          height: 316px;
          background-color: white;
          display: flex;
          flex-flow: column nowrap;
          box-shadow: 0px 1px 7px 0px rgba(50, 50, 50, 0.35);
          > .card-pic {
            display: inline-block;
            width: 100%;
            height: 70%;
            overflow: hidden;
            cursor: pointer;
            > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transform: scale(1);
              transition: transform 0.3s ease-in-out;
              &:hover {
                transform: scale(1.2);
              }
            }
          }
          > .card-bottom {
            padding: 20px 24px 21px;
            > .card_name {
              font-weight: 600;
              display: flex;
              align-items: center;
              height: 24px;
              font-size: 1rem;
              letter-spacing: 0.12px;
            }
            > .card_place {
              display: flex;
              height: 24px;
              justify-content: space-between;
              > .type {
                font-size: 0.88rem;
                line-height: 2em;
              }
              > .position {
                display: flex;
                align-items: center;
                > .marker {
                  height: 1.25rem;
                  > img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transform: translate(7px, 1px);
                  }
                }
                > .floor {
                  font-size: 0.88rem;
                }
              }
            }
          }
        }
      }
    }
  }
}

.swiper-slide {
  width: 60%;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}

@media screen and (max-width: 992px) {
  section {
    > .nav {
      > .buttons {
        flex-flow: row wrap;
        align-content: center;
        > .arrow {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  section {
    > .nav {
      > .info {
        > .title {
          font-size: 1.5rem;
        }
        > .description {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
