import React from "react";
import { useTranslation } from "react-i18next";
import Category from '../../components/category/category'
import Input from '../../components/input/input'
import { useDispatch, useSelector } from 'react-redux';
import { searchCategory } from '../../actions/category';
import { Container, Titleh1, Titleh2, CategoryWrapper, Form } from './homeStyles'

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
  }
  console.log(category)
  return (
    <Container>
      <Titleh1>{t("ChooseCategory")} 💪🏻</Titleh1>
      <CategoryWrapper>
        {categories.map((c) => (
          <Category category={c} key={c.id} />
        ))}
      </CategoryWrapper>
      <Titleh2>{t("searchCategory")}</Titleh2>
      <Form onSubmit={(category) => handleSubmit(category)}>
        <Input placeholder="Art, Science, History..." name="search" value={category.search} arrow={true} onChange={(e) => dispatch(searchCategory(e))} />
      </Form>
    </Container>
  );
};

export default Home;
