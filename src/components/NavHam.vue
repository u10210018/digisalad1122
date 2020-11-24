<template>
  <nav v-if="windowWidth <= 1024">
    <transition name="fade">
      <ul class="link-group" v-if="!isListClose">
        <div class="nav-ham" @click="listOpen(true)">
          <span></span>
          <span></span>
        </div>
        <template v-for="(value, i) in linkList">
          <li class="link" :key="'link' + i">
            <a :href="value.link">{{ value.name }}</a>
          </li>
        </template>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "NavHam",
  data: function () {
    return {};
  },
  methods: {
    listOpen(bool) {
      this.$store.dispatch("setListClose", bool);
    },
  },
  computed: {
    linkList() {
      return this.$store.getters.getLinkList;
    },
    windowWidth() {
      return this.$store.getters.getWindowWidth;
    },
    isListClose() {
      return this.$store.getters.getListClose;
    },
  },
};
</script>


<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  animation: clipCircle 0.7s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  animation: clipCircle 0.7s ease-in-out reverse;
}
@keyframes clipCircle {
  from {
    opacity: 0.3;
    clip-path: circle(20%);
  }
  to {
    opacity: 1;
    clip-path: circle(100%);
  }
}
nav {
  pointer-events: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  > .link-group {
    pointer-events: initial;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    background: linear-gradient(90deg, #ffae05 0%, #ff780d 100%);
    padding: 0 5rem;
    clip-path: circle(100%);
    > .link {
      display: flex;
      > a {
        padding: 0.375rem calc(0.2rem + 0.5vw);
        text-decoration: none;
        color: white;
        font-size: 6vw;
        cursor: pointer;
        &::after {
          display: block;
          content: "";
          width: 0%;
          height: 4px;
          background-color: white;
          border-radius: 10px;
          transition: width 0.3s ease-in-out;
          margin-top: 3px;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
    > .nav-ham {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      cursor: pointer;
      position: absolute;
      right: 10%;
      top: 5%;
      height: 50px;

      > span {
        flex: 0 0 5px;
        width: 35px;
        background-color: white;
        margin: 3px 0;
        border-radius: 20px;
        opacity: 1;
        &:first-child {
          transform: translateY(10px) rotate(45deg);
        }
        &:last-child {
          transform: rotate(-45deg);
        }
      }
      &:hover > span {
        background-color: rgb(197, 197, 197);
      }
    }
  }
}
</style>
