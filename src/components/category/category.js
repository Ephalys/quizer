import React from "react";
import { CategoryStyled } from "./categoryStyles";
import { CategoryStyledVariants } from "./categoryVariants"

const Category = (props) => {
  return (
    <CategoryStyled variants={CategoryStyledVariants} onClick={props.onClick} exit="hidden">
      {props.category.name}
    </CategoryStyled>
  );
};

export default Category;
