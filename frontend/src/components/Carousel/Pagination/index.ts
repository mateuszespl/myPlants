import { connect } from "react-redux";
import { Pagination } from "./Pagination";
import { updateCarousel } from "store/actionCreators";

const mapStateToProps = (state: { currentSlide: number }) => ({
  currentSlide: state.currentSlide,
});

const mapDispatchToProps = {
  updateCarousel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
