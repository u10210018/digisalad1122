<template>
  <div class="balls">
    <span class="ball ball1 left1 animation ani-top1 ani-time6"></span>
    <span class="ball ball2 left2 animation ani-top4 ani-time8"></span>
    <span class="ball ball3 left3 animation ani-top3 ani-time6"></span>
    <span class="ball ball4 left4 animation ani-top5 ani-time10"></span>
    <span class="ball ball2 left5 animation ani-top8 ani-time8"></span>
  </div>
</template>


<script>
export default {
  name: "FloatBalls",
};
</script>

<style scoped lang="scss">
.balls {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  .ball {
    background-image: url("../assets/img/balls.png");
    position: absolute;
    background-repeat: no-repeat;
    background-origin: content-box;
    background-size: cover;
    width: calc(200px + 15vw);
    height: calc(200px + 15vw);
    transform: rotate(0deg);
    $ballType: (
      "1": 0 50%,
      "2": 36.5% 50%,
      "3": 77% 50%,
      "4": 119% 50%,
    );
    @each $num, $pos in $ballType {
      &.ball#{$num} {
        background-position: $pos;
      }
    }
    $lefts: (
      "1": -15%,
      "2": 15%,
      "3": 35%,
      "4": 65%,
      "5": 80%,
    );
    @each $num, $pos in $lefts {
      &.left#{$num} {
        left: $pos;
      }
    }

    &.animation {
      @for $i from 1 through 10 {
        &.ani-top#{$i} {
          animation-name: UpAndDown#{$i};
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        &.ani-time#{$i} {
          animation-duration: #{$i * 2}s;
        }
      }
    }

    @for $i from 1 through 10 {
      @keyframes UpAndDown#{$i} {
        0% {
          top: $i * 10% - 5%;
          transform: rotate(0deg);
        }
        50% {
          top: $i * 10% + 5%;
          transform: rotate(180deg);
        }
        100% {
          top: $i * 10% - 5%;
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>