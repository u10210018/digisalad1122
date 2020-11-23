<template>
  <div class="background-wrapper">
    <div class="background-top"></div>
    <div class="background-bottom"></div>
    <div class="slogan-top"></div>
    <div class="slogan-bottom"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackgroundWrapper",
};
</script>


<style scoped lang="scss">
.background-wrapper {
  width: 100vw;
  position: relative;
  overflow: hidden;
  > .background-top,
  > .background-bottom,
  > .slogan-top,
  > .slogan-bottom {
    position: absolute;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-size: contain;
  }
  > .background-top,
  .background-bottom {
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/bg-center.png");
  }

  > .background-top {
    top: 0;
    background-position: 75% 0%;
    transform: translateX(-30%);
  }
  > .background-bottom {
    bottom: 0;
    background-position: 75% 0%;
    transform: translateX(30%) scale(-1, -1);
  }
  > .slogan-top,
  > .slogan-bottom {
    width: 100vw;
    height: calc(100px + 8vw);
  }
  > .slogan-top {
    top: 0;
    background-image: url("../assets/img/dining.png");
  }
  > .slogan-bottom {
    top: 50%;
    background-image: url("../assets/img/shopping.png");
    transform: translateX(30%);
  }
}
</style>