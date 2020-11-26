import React from 'react'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from 'actions/category';
import { CategoryStyled } from './categoryStyles'

const Category = (props) => {
  const onCategorySelect = (category) => {
    dispatch(selectCategory(category))
    
  }
  const category = useSelector(state => state.category)
  const dispatch = useDispatch();
  return (
    <CategoryStyled onClick={() => onCategorySelect(props.category)}>
      {props.category.name}
    </CategoryStyled>
  )
}

export default Category
