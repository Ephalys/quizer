import React from "react";
import { CategoryStyled } from "./categoryStyles";

const Category = (props) => {
  return (
    <CategoryStyled onClick={props.onClick} exit="hidden">
      {props.category.name}
    </CategoryStyled>
  );
};

export default Category;
