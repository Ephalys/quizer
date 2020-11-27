import React from "react";
import { useTranslation } from "react-i18next";
import Axios from 'axios';
import Category from '../../components/category/category'
import Input from '../../components/input/input'
import { useDispatch, useSelector } from 'react-redux';
import { editSearch, toggleCategory, getCategories, selectCategory } from '../../actions/category';
import { Container, Titleh1, Titleh2, CategoryWrapper, Form } from './homeStyles'
import history from "config/history";

const Home = () => {
  const { t, i18n } = useTranslation();

  const categories = [
    { name: "General Knowledge", id: 9 },
    { name: "Sports", id: 21 },
    { name: "Geography", id: 22 },
    { name: "Science & Nature", id: 17 }
  ]
  const category = useSelector(state => state.category)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get("https://opentdb.com/api_category.php")
      .then(res => {
        const categoriesFiltered = res.data.trivia_categories.filter(c => c.name.toLowerCase().indexOf(category.search.toLowerCase()) !== -1)
        const resultLength = 4;
        if (categoriesFiltered.length > resultLength) {
          categoriesFiltered.splice(resultLength, categoriesFiltered.length - resultLength);
        }
        dispatch(getCategories(categoriesFiltered))
      })
  }

  // let offset = document.querySelector('h2').offsetTop

  const titlevariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -360 },
  }

  const categoryWrapperVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -360 },
  }

  const TitleSearchVariants = {
    down: { y: 0 },
    up: { y: -360 },
  }

  const FormVariants = {
    down: { y: 0 },
    up: { y: -360 },
  }

  const categoryWrapperSearchVariants = {
    visible: { opacity: 1, y: -340 },
    hidden: { opacity: 0, y: 0 }
  }

  const onCategorySelect = (category) => {
    dispatch(selectCategory(category))
    console.log(category);
    localStorage.setItem("category", JSON.stringify(category))
    history.push(`/quiz/${category.id}`)
  }

  return (
    <Container>
      <Titleh1 animate={category.isVisibleCategory && category.search.length === 0 ? "visible" : "hidden"} variants={titlevariants} transition={{ duration: 0.5 }}>{t("ChooseCategory")} 💪🏻</Titleh1>
      <CategoryWrapper animate={category.isVisibleCategory && category.search.length === 0 ? "visible" : "hidden"} variants={categoryWrapperVariants} transition={{ duration: 0.5 }}>
        {categories.map((c) => (
          <Category category={c} key={c.id} onClick={() => onCategorySelect(c)} />
        ))}
      </CategoryWrapper>
      <Titleh2 animate={category.isVisibleCategory && category.search.length === 0 ? "down" : "up"} variants={TitleSearchVariants} transition={{ duration: 0.5 }}>{t("searchCategory")}</Titleh2>
      <Form animate={category.isVisibleCategory && category.search.length === 0 ? "down" : "up"} variants={FormVariants} transition={{ duration: 0.5 }} onSubmit={handleSubmit}>
        <Input placeholder="Art, Science, History..." name="search" value={category.search} arrow={true} onFocus={() => dispatch(toggleCategory())} onBlur={() => dispatch(toggleCategory())} onChange={(e) => dispatch(editSearch(e))} />
      </Form>
      {category.listCategory.length !== 0 && (
        <CategoryWrapper animate={category.listCategory.length !== 0 ? "visible" : "hidden"} variants={categoryWrapperSearchVariants} transition={{ duration: 0.5 }}>
          {category.listCategory.map(c => <Category category={c} key={c.id} />)}
        </CategoryWrapper>
      )}
    </Container>
  );
};

export default Home;
