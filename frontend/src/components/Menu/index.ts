import { connect } from "react-redux";

import { Menu } from "./Menu";

const mapStateToProps = (state: { menu: { isMenuOpen: boolean } }) => ({
  isMenuOpen: state.menu.isMenuOpen,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
