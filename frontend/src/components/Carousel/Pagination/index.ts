import { connect } from "react-redux";

import { Pagination } from "./Pagination";

const mapStateToProps = (state: any) => ({
  currentSlide: state.carousel.currentSlide,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
