import React from "react";
import Lottie from "react-lottie";
import { StyledLoading } from "./loaderStyles";
import { LoaderVariants } from './loaderVariants';
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
    <StyledLoading initial="hidden" animate="visible" exit="hidden" variants={LoaderVariants}>
      <Lottie options={defaultOptions} />
    </StyledLoading>
  );
};

export default Loader;
