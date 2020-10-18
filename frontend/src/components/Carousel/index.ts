import { connect } from "react-redux";

import { updateCarousel } from "store/actionCreators";
import { Carousel } from "./Carousel";

const mapStateToProps = (state: { currentSlide: number }) => ({
  currentSlide: state.currentSlide,
});

const mapDispatchToProps = {
  updateCarousel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
