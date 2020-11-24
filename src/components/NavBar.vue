<template>
  <nav>
    <div class="nav-group">
      <div class="logo">
        <a href="javaScript:void(0)">
          <img src="../assets/img/logo1.png" alt=""
        /></a>
      </div>

      <ul class="link-group" v-if="windowWidth > 1024">
        <template v-for="(value, i) in linkList">
          <li class="link" :key="'link' + i">
            <a :href="value.link">{{ value.name }}</a>
          </li>
        </template>
      </ul>
      <div class="nav-ham" v-else @click="listOpen(false)">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <ul class="option-group">
      <li class="option">
        <span class="search"
          ><img src="../assets/img/search.png" alt=""
        /></span>
      </li>
      <li class="option">
        <span :class="{ choose_lang: lang == 'En' }" @click="lang = 'En'"
          >En</span
        >
      </li>
      <li class="option">
        <span :class="{ choose_lang: lang == '繁' }" @click="lang = '繁'"
          >繁</span
        >
      </li>
      <li class="option">
        <span :class="{ choose_lang: lang == '簡' }" @click="lang = '簡'"
          >簡</span
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      lang: "En",
    };
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
nav {
  z-index: 99;
  box-sizing: border-box;
  background-color: transparent;
  height: 80px;
  width: 100%;
  max-width: 1440px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  .nav-group {
    display: flex;
    > .logo {
      flex: 0 0 100px;
      padding: 1rem 2.25vw 1rem 1rem;
      > a {
        display: inline-block;
        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    > .link-group {
      display: flex;
      align-content: center;
      > .link {
        display: flex;
        align-items: center;
        > a {
          padding: 0.375rem calc(0.2rem + 0.5vw);
          text-decoration: none;
          color: white;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.12px;
          &::after {
            display: block;
            content: "";
            width: 0%;
            height: 2px;
            background-color: white;
            border-radius: 40px;
            transition: width 0.3s ease-in-out;
            margin-top: 3px;
          }
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
    > .nav-ham {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      cursor: pointer;
      > span {
        flex: 0 0 3px;
        width: 25px;
        background-color: white;
        margin: 2px 0;
        border-radius: 20px;
        opacity: 1;
        transform: translateY(-7px);
      }
    }
  }
  > .option-group {
    display: flex;
    align-content: center;
    flex: 0 0 150px;
    > .option {
      display: flex;
      align-items: center;
      flex: 1 0 20px;
      justify-content: center;

      &:first-child {
        margin-right: 5px;
      }
      > span {
        height: 20px;
        color: white;
        cursor: pointer;
        padding: 0 0 4px 0;
        &.search {
          height: 27px;
          transform: translateY(-3px);
        }
        &.choose_lang {
          padding: 0 0 2px 0;
          border-bottom: 2px solid white;
        }
        > img {
          transform: translateX(-10px);
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
