import { connect } from "react-redux";

import { Hamburger } from "./Hamburger";
import { updateMenuStatus } from "./../../store/actionCreators";

const mapStateToProps = (state: { menu: { isMenuOpen: boolean } }) => ({
  isMenuOpen: state.menu.isMenuOpen,
});

const mapDispatchToProps = { updateMenuStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
