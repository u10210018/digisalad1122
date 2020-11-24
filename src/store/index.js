import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
    isListClose: true,
    linkList: [
      {
        link: "javascript:void(0)",
        name: "What's Hot"
      },
      {
        link: "javascript:void(0)",
        name: "Dining"
      },
      {
        link: "javascript:void(0)",
        name: "Shopping"
      },
      {
        link: "javascript:void(0)",
        name: "LP Club"
      },
      {
        link: "javascript:void(0)",
        name: "Cinema"
      },
      {
        link: "javascript:void(0)",
        name: "LP Office Tower"
      },
      {
        link: "javascript:void(0)",
        name: "Parking & Location"
      },
      {
        link: "javascript:void(0)",
        name: "Visit Us"
      }
    ],
    slidePic: [
      {
        id: 1,
        info: [
          {
            link: require("../assets/img/banner1.jpg"),
            picName: "banner1",
            name: "innisfree",
            title: "innisfree Pop-up Shop is now open!",
            description:
              "innisfree is a natural brand that delivers the benefits of nature coming from the pristine JEJU island for your healthy beauty."
          },
          {
            link: require("../assets/img/slidePic2.jpg"),
            picName: "slidePic2",
            name: "innisfree",
            title: "innisfree Pop-up Shop is now open![Second]",
            description:
              "innisfree is a natural brand that delivers the benefits of nature coming from the pristine JEJU island for your healthy beauty."
          },
          {
            link: require("../assets/img/slidePic3.jpg"),
            picName: "slidePic3",
            name: "innisfree",
            title: "innisfree Pop-up Shop is now open![Third]",
            description:
              "innisfree is a natural brand that delivers the benefits of nature coming from the pristine JEJU island for your healthy beauty."
          },
          {
            link: require("../assets/img/slidePic4.jpg"),
            picName: "slidePic4",
            name: "innisfree",
            title: "innisfree Pop-up Shop is now open![Forth]",
            description:
              "innisfree is a natural brand that delivers the benefits of nature coming from the pristine JEJU island for your healthy beauty."
          },
          {
            link: require("../assets/img/slidePic5.jpg"),
            picName: "slidePi5",
            name: "innisfree",
            title: "innisfree Pop-up Shop is now open![Fifth]",
            description:
              "innisfree is a natural brand that delivers the benefits of nature coming from the pristine JEJU island for your healthy beauty."
          }
        ]
      },
      {
        id: 2,
        title: {
          title: "Dining",
          description:
            "Be a #LPFoodie! Explore over 40 food & bevarge outlets in Langham Place."
        },
        info: [
          {
            link: require("../assets/img/slidePic1.jpg"),
            picName: "slidePic1",
            name: "i CREMERiA Cafe",
            type: "Cafe & Deli",
            position: "L4 13"
          },
          {
            link: require("../assets/img/slidePic2.jpg"),
            picName: "slidePic2",
            name: "Bamboo Thai",
            type: "Asian",
            position: "L8 02-03"
          },
          {
            link: require("../assets/img/slidePic3.jpg"),
            picName: "slidePic3",
            name: "The Sky Bar",
            type: "Western",
            position: "L13 01"
          },
          {
            link: require("../assets/img/slidePic4.jpg"),
            picName: "slidePic4",
            name: "i CREMERiA Cafe",
            type: "Cafe & Deli",
            position: "L4 13"
          },
          {
            link: require("../assets/img/slidePic5.jpg"),
            picName: "slidePi5",
            name: "i CREMERiA Cafe",
            type: "Cafe & Deli",
            position: "L4 13"
          }
        ]
      },
      {
        id: 3,
        title: {
          title: "Shopping",
          description:
            "Create your own style! Check out the hottest fashion & beauty brands in town."
        },
        info: [
          {
            link: require("../assets/img/slidePic5.jpg"),
            picName: "slidePic5",
            name: "Sabon",
            type: "Beauty",
            position: "L4 13"
          },
          {
            link: require("../assets/img/slidePic6.jpg"),
            picName: "slidePic6",
            name: "Sisley",
            type: "Beauty",
            position: "L4 13"
          },
          {
            link: require("../assets/img/slidePic7.jpg"),
            picName: "slidePic7",
            name: "Etude House",
            type: "Beauty",
            position: "L13 01"
          },
          {
            link: require("../assets/img/slidePic8.jpg"),
            picName: "slidePic8",
            name: "innisfree",
            type: "Beauty",
            position: "L4 13"
          }
        ]
      }
    ]
  },
  mutations: {
    setWindowWidth(state, width) {
      state.windowWidth = width;
    },
    setListClose(state, bool) {
      state.isListClose = bool;
    }
  },
  actions: {
    setWindowWidth: (
      {
        //增加或是後退一週
        commit
      },
      width
    ) => {
      commit("setWindowWidth", width);
    },
    setListClose: (
      {
        //增加或是後退一週
        commit
      },
      bool
    ) => {
      commit("setListClose", bool);
    }
  },
  getters: {
    getWindowWidth: state => {
      return state.windowWidth;
    },
    getListClose: state => {
      return state.isListClose;
    },
    getLinkList: state => {
      return state.linkList;
    },
    getSlidePic: state => id => {
      let obj = state.slidePic.find(slidePic => {
        return slidePic.id == id;
      });
      return obj.info;
    },
    getSlideTitle: state => id => {
      let obj = state.slidePic.find(slidePic => {
        return slidePic.id == id;
      });
      return obj.title;
    }
  }
});
