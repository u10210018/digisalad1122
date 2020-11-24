<template>
  <footer>
    <section class="site-map">
      <div class="list-group">
        <ul class="link-list">
          <li><a href="javaScript:void(0)">What's Hot</a></li>
          <li><a href="javaScript:void(0)">Promotions</a></li>
          <li><a href="javaScript:void(0)">New Shops</a></li>
        </ul>
        <ul class="link-list">
          <li><a href="javaScript:void(0)">What To Do</a></li>
          <li><a href="javaScript:void(0)">Dining</a></li>
          <li><a href="javaScript:void(0)">Shopping</a></li>
          <li><a href="javaScript:void(0)">LP Office Tower</a></li>
          <li><a href="javaScript:void(0)">Cinema</a></li>
        </ul>
        <ul class="link-list">
          <li><a href="javaScript:void(0)">LP Club</a></li>
          <li><a href="javaScript:void(0)">About LP Club</a></li>
          <li><a href="javaScript:void(0)">Bonus Points Rewards</a></li>
          <li><a href="javaScript:void(0)">Special Offer</a></li>
        </ul>
        <ul class="link-list">
          <li><a href="javaScript:void(0)">Useful Infomation</a></li>
          <li><a href="javaScript:void(0)">Floorplan</a></li>
          <li><a href="javaScript:void(0)">Parking & Location</a></li>
          <li><a href="javaScript:void(0)">LP Service</a></li>
          <li><a href="javaScript:void(0)">About LP</a></li>
          <li><a href="javaScript:void(0)">Contact Us</a></li>
        </ul>
      </div>
      <div class="download-group">
        <h4 class="title">Download LP App</h4>
        <a href="javaScript:void(0)">
          <img src="../assets/img/qrcode.png" alt="qrcode" />
        </a>
        <div class="download">
          <a href="javaScript:void(0)">
            <img src="../assets/img/appstore.png" alt="appstore" />
          </a>
          <a href="javaScript:void(0)">
            <img src="../assets/img/googleplay.png" alt="googleplay" />
          </a>
        </div>
      </div>
      <a href="javaScript:void(0)">
        <img src="../assets/img/logo2.png" alt="logo" />
      </a>
    </section>
    <span class="gotoTop" @click="gotoTop">
      <span class="arrow top"></span>
    </span>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  methods: {
    gotoTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped lang="scss">
footer {
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  padding: 25px calc((100vw - 1440px) / 2) 50px;
  display: flex;
  flex-flow: column nowrap;
  > .site-map {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    > .list-group {
      flex: 5 1 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      > .link-list {
        display: flex;
        flex-flow: column nowrap;
        > li {
          &:first-child {
            font-weight: bold;
            > a {
              cursor: initial;
            }
          }
          > a {
            display: inline-block;
            text-decoration: none;
            font-family: Muli;
            font-size: 14px;
            color: #222222;
            cursor: pointer;
            padding: 0.375rem;
          }
        }
      }
    }
    > .download-group {
      flex: 0 1 auto;
      max-width: 319px;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: space-between;
      padding-top: 6px;
      > .title {
        font-size: 14px;
        font-weight: bold;
      }
      > a {
        border: 1px solid #222222;
        border-radius: 10px;
        overflow: hidden;
        padding: 10px;
        height: 60px;
        width: 60px;
        margin: 12px 0 20px;

        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: invert(100%);
        }
      }
      > .download {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        > a {
          flex: 0 0 150px;
          > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
    > a {
      flex: 0 1 189px;
      padding: 50px 102px;
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  > .gotoTop {
    position: absolute;
    right: 5%;
    bottom: 20px;
    display: flex;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 5px;
    background: linear-gradient(-45deg, #ff780d 0%, #ffae05 100%);
    box-shadow: 0px 1px 7px 0px rgba(50, 50, 50, 0.35);
    &:hover {
      opacity: 0.6;
    }
    > .arrow {
      margin: 16px auto;
      width: 8px;
      height: 8px;
      border-top: 2px solid rgb(255, 255, 255);
      border-left: 2px solid rgb(255, 255, 255);

      &.top {
        transform: translateY(2px) rotate(45deg);
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  footer {
    > .site-map {
      > .download-group {
        padding: 6px 120px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  footer {
    > .site-map {
      > .list-group {
        flex-flow: row wrap;
        margin-bottom: 50px;
        > .link-list {
          padding-top: 20px;
          flex: 1 0 150px;
          > li {
            &:first-child {
              font-weight: 700;
              > a {
                cursor: initial;
              }
            }
          }
        }
      }
      > .download-group {
        align-items: center;
        > a {
          margin: 20px 0;
        }
      }
    }
  }
}
</style>
