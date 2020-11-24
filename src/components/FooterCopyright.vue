<template>
  <section class="copyright-wrapper">
    <div class="left-info">
      <h5 class="copyright">
        Copyright © 2020 Eagle Property Management (CP) Limited. All Rights
        Reserved.
      </h5>
      <span class="policy">
        <a href="javaScript:void(0)">Disclaimer </a> |
        <a href="javaScript:void(0)"> Privacy Policy</a>
      </span>
    </div>
    <div class="social">
      <span>Follow Us At</span>
      <a href="javaScript:void(0)">
        <img src="../assets/img/contact1.png" alt="contact1" />
      </a>
      <a href="javaScript:void(0)">
        <img src="../assets/img/contact2.png" alt="contact2" />
      </a>
      <a href="javaScript:void(0)">
        <img src="../assets/img/contact3.png" alt="contact3" />
      </a>
      <a href="javaScript:void(0)">
        <img src="../assets/img/contact4.png" alt="contact4" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterCopyright",
};
</script>


<style scoped lang="scss">
.copyright-wrapper {
  background: #222222;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 53px;
  > .left-info {
    display: flex;
    flex-flow: row wrap;
    > .copyright {
      padding: 5px calc(5px + 4vw);
      font-size: 14px;
      line-height: 2.5em;
      color: white;
    }
    > .policy {
      display: flex;
      align-items: center;
      line-height: 1.5em;
      font-size: 14px;
      padding-left: 20px;
      color: white;
      padding: 5px 0 5px 20px;
      > a {
        font-size: 0.5rem;
        text-decoration: none;
        color: white;
        line-height: 1.5em;
        padding-right: 10px;
        &:last-child {
          padding-left: 10px;
        }
      }
    }
  }
  > .social {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 200px;
    align-items: center;
    padding: 5px 10px 5px 20px;
    > span {
      font-size: 0.5rem;
      line-height: 1.5em;
      color: white;
    }
    > a {
      flex: 0 0 20px;
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>