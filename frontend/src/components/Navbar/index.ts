import { connect } from "react-redux";
import { Navbar } from "./Navbar";

const mapStateToProps = (state: { menu: { isMenuOpen: boolean } }) => ({
  isMenuOpen: state.menu.isMenuOpen,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
