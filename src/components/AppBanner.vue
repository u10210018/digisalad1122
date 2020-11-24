<template>
  <section>
    <slot></slot>
    <div class="phonePic">
      <div class="phone phone1">
        <img src="../assets/img/phone1.png" alt="phone1" data-scroll />
      </div>
      <div class="phone phone2">
        <img src="../assets/img/phone2.png" alt="phone2" data-scroll />
      </div>
    </div>

    <div class="qrcode-btn">
      <div class="qrcode">
        <a href="javaScript:void(0)"
          ><img src="../assets/img/qrcode.png" alt="qrcode"
        /></a>
      </div>
      <span>
        Download<br />
        Now!
      </span>
    </div>

    <div class="info">
      <h1 class="title">
        Langham Place APP<br />
        New Feature
      </h1>
      <p class="description">
        Download Langham Place APP now to enjoy extraordinary shopping,
        lifestyle and dining privileges! Highlight new feature such as scan
        receipt.
      </p>
      <div class="buttons">
        <button class="primary-btn directory" type="button">
          <a href="javaScript:void(0)">Learn More About LP Club</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  name: "AppBanner",
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      offset: 150,
      onShown: function(el) {
        el.animate(
          [
            { transform: "perspective(3000px) rotateX(-60deg) scale(0.9)" },
            { transform: "perspective(3000px) rotateX(0deg) scale(1)" }
          ],
          1000
        );
      },
      onHidden: function(el) {
        el.style.opacity = 1;
      }
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style scoped lang="scss">
section {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(-120deg, #ffb804 2%, #ff710e 97%);
  padding: 150px calc(50vw - 720px);
  > .phonePic {
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    width: 55%;
    max-width: 700px;
    right: calc(50vw - 600px);
    top: -30px;
    > .phone {
      flex: 0 1 auto;
      transform-style: preserve-3d;
      &.phone1 {
        z-index: 2;
        margin-bottom: -250px;
      }
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  > .qrcode-btn {
    position: absolute;
    right: 2px;
    top: 80px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    border: 1px solid white;
    background-color: rgba(255, 125, 0, 0.8);
    padding: 48px 44px 36px;
    z-index: 8;
    &:hover {
      opacity: 0.6;
    }
    > .qrcode {
      width: 6vw;
      min-width: 50px;
      max-width: 200px;
      > a {
        cursor: pointer;
        display: flex;
        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    > span {
      font-size: calc(0.5vw + 0.8rem);
      line-height: 1.5em;
      color: white;
      text-align: center;
      margin-top: 17px;
    }
  }
  > .info {
    position: relative;
    width: 30vw;
    max-width: 450px;
    padding: 0 5vw 0 8vw;
    color: white;
    > .title {
      font-weight: bold;
      font-size: 2.25rem;
      letter-spacing: 0.27px;
      font-size: 1.8rem;
      line-height: 1.28em;
      padding: 0 2vw 10px 0;
    }
    > .description {
      font-size: 1.2rem;
      line-height: 1.5em;
      padding: 0 2vw 30px 0;
    }
    > .buttons {
      display: flex;
      > .primary-btn {
        border: none;
        border-radius: 5px;
        background: linear-gradient(90deg, #ffae05 0%, #ff780d 100%);
        box-shadow: 0 20px 20px 0 #f07600;
        &:hover {
          opacity: 0.6;
        }
        &.directory {
          border: 1px solid #ff780d;
          background: white;
          > a {
            color: #ff780d;
          }
        }
        > a {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 21px;
          font-family: Muli;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}

[data-scroll] {
  transition: opacity 1s;
}
[data-scroll="in"] {
  opacity: 1;
}
[data-scroll="out"] {
  opacity: 0;
}

@media screen and (max-width: 1200px) {
  section {
    padding: 50px 0;
    overflow: hidden;
    > .phonePic {
      right: 50%;
      top: 65%;
      transform: translate(50%, -50%);
      > .phone {
        opacity: 0.3;
        flex: 0 1 auto;
        transform: translateX(-47vw);
        &.phone1 {
          transform: translateX(47vw);
          z-index: 2;
          margin-bottom: -300px;
        }
      }
    }
    > .info {
      position: relative;
      z-index: 3;
      margin: 0 auto;
      padding: 0;
      width: 80%;
    }
  }
}

@media screen and (max-width: 768px) {
  section {
    > .qrcode-btn {
      right: 2px;
      top: 2px;
      padding: 5px 2px;
    }
    > .info {
      > .title {
        font-size: 1.5rem;
        padding: 0 13vw 1rem 0;
      }
      > .description {
        font-size: 1rem;
      }
      > .buttons {
        > .primary-btn {
          > a {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
