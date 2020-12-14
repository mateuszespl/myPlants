import { connect } from "react-redux";

import { updateMenuStatus } from "./../../store/actionCreators";
import { Menu } from "./Menu";

const mapStateToProps = (state: { menu: { isMenuOpen: boolean } }) => ({
  isMenuOpen: state.menu.isMenuOpen,
});

const mapDispatchToProps = { updateMenuStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
