const constants = {
  logo: {
    text: "PLAN'ts",
    className: "logo",
  },
  navbar: {
    className: "navbar",
  },
  aside: {
    className: "aside",
  },
  socialList: {
    className: "socialList",
    listData: ["Instagram", "Facebook", "Twitter", "YouTube"],
    height: "20%",
    margin: "auto 0 0 0",
  },
  categoryList: {
    className: "categoryList",
    text: {
      fontSize: "${({theme}) => theme.fonts.m}",
      fontWeight: "normal",
      fontFamily: "{({theme}) => theme.fonts.secondary}",
    },
    listData: ["Plants", "Pre Potted Plants", "Accesories"],
    height: "33%",
    margin: "15% 0 15% 0",
  },
  menuButton: {
    className: "menuButton",
    text: "Menu",
    height: "10%",
    width: "100px",
  },
  hamburger: {
    className: "hamburger",
    openText: "Open",
    closeText: "Close",
  },
  collectionSlide: {
    className: "collectionSlide",
  },
};

export default constants;
