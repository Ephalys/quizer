import React from "react";
import Lottie from "react-lottie";
import { StyledLoading } from "./loaderStyles";
import Loading from "assets/various/loader.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loader = (props) => {
  return (
    <StyledLoading>
      <Lottie options={defaultOptions} />
    </StyledLoading>
  );
};

export default Loader;
