import React from 'react'
import { CategoryStyled } from './categoryStyles'

const Category = (props) => {
  return (
    <CategoryStyled onClick={props.onClick}>
      {props.category.name}
    </CategoryStyled>
  )
}

export default Category
