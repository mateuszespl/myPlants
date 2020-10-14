const constants = {
  logo: {
    text: "mySneakers",
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
      fontSize: "${({theme}) => theme.fonts.l}",
      fontWeight: "bold",
      fontFamily: "{({theme}) => theme.fonts.secondary}",
    },
    listData: ["Men", "Women", "Accesories"],
    height: "30%",
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
};

export default constants;
