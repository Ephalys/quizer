import React from 'react'
import { useTranslation } from "react-i18next";

import { CategoryStyled } from './categoryStyles'

const Category = (props) => {
  return (
    <CategoryStyled>
      {props.category.name}
    </CategoryStyled>
  )
}

export default Category
