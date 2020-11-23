<template>
  <div class="banner">
    <div class="slogan-group">
      <div class="slogan slogan1" data-scroll>
        <img src="../assets/img/slogan1.png" alt="" />
      </div>
      <div class="slogan slogan2" data-scroll>
        <img src="../assets/img/slogan2.png" alt="" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  name: "Banner",
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      onShown: function (el) {
        el.animate(
          [{ transform: "translateY(50px)" }, { transform: "translateY(0)" }],
          1000
        );
      },
      onHidden: function (el) {
        el.style.opacity = 1;
      },
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>


<style scoped lang="scss">
[data-scroll] {
  transition: opacity 2s;
}
[data-scroll="in"] {
  opacity: 1;
}
[data-scroll="out"] {
  opacity: 0;
}

.banner {
  position: relative;
  box-sizing: border-box;
  background: linear-gradient(90deg, #ffae05 0%, #ff780d 100%);
  height: 100vh;
  max-width: 100%;
  > .slogan-group {
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95vw;
    max-width: 1800px;
    > .slogan {
      display: block;

      &.slogan1 {
        padding: 2rem 10rem;
        border-bottom: 1px solid white;
      }
      &.slogan2 {
        padding: 2rem 18rem;
      }
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .banner {
    > .slogan-group {
      > .slogan {
        &.slogan1 {
          padding: 1rem 0.5rem;
        }
        &.slogan2 {
          padding: 1rem 5rem;
        }
      }
    }
  }
}
</style>