<template>
  <section>
    <div class="left-info">
      <h1 class="title">Experiencing LP Tower</h1>
      <p class="description">
        Short description about LP Tower, like what customer can experience
        there. Pellentesque mattis tellus sit amet ultrices fermentum.
        Pellentesque tortor nibh, volutpat eget sem ut, facilisis aliquam lorem.
        Vivamus dui nibh, accumsan at eros ut, finibus finibus neque.
      </p>
      <div class="buttons">
        <button class="primary-btn explore" type="button">
          <a href="javaScript:void(0)">Explore More</a>
        </button>
        <button class="primary-btn directory" type="button">
          <a href="javaScript:void(0)">LP Tower Directory</a>
        </button>
      </div>
    </div>
    <div class="right-info">
      <img src="../assets/img/banner2.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ContentSection"
};
</script>

<style scoped lang="scss">
section {
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 10vh auto;
  background-color: transparent;
  height: 650px;
  display: flex;
  > .left-info {
    flex: 1 1 40%;
    padding: 0 5vw 0 8vw;
    > .title {
      color: #222222;
      font-weight: 700;
      font-size: 2.25rem;
      line-height: 1.5em;
      padding: 0 2vw 10px 0;
      letter-spacing: 0.27px;
    }
    > .description {
      color: #222222;
      font-size: 1.25rem;
      line-height: 1.5em;
      letter-spacing: 0.15px;
      padding: 0 2vw 30px 0;
    }
    > .buttons {
      display: flex;
      height: 40px;
      > .primary-btn {
        display: flex;
        align-items: center;
        border: none;
        padding: 0;
        border-radius: 5px;
        background: linear-gradient(102deg, #ffb700 0%, #ff7d00 100%);
        &:hover {
          opacity: 0.6;
        }
        &.directory {
          border: 1px solid #ff7800;
          background: white;
          margin-left: 30px;
          > a {
            color: #ff7800;
          }
        }
        > a {
          font-family: muli, sans-serif;
          display: flex;
          align-items: center;
          height: 40px;
          text-decoration: none;
          color: white;
          padding: 7px 21px;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.13px;
        }
      }
    }
  }
  > .right-info {
    flex: 1 1 60%;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 1200px) {
  section {
    > .left-info {
      flex: 1 1 40%;
      padding: 0 0 0 8vw;
      margin-right: -65vw;
      z-index: 2;
      > .title {
        padding: 0 2vw 1rem 0;
      }
      > .description {
        padding: 0.5rem 2vw 2rem 0;
      }
      > .buttons {
        flex-flow: column nowrap;
        align-items: baseline;
        > .primary-btn {
          &.directory {
            margin-left: 0;
            margin-top: 20px;
          }
        }
      }
    }
    > .right-info {
      flex: 0 1 70vw;
      filter: opacity(0.5);
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 13% 100%);
    }
  }
}

@media screen and (max-width: 768px) {
  section {
    > .left-info {
      > .title {
        font-size: 1.5rem;
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
