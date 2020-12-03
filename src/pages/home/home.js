import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Axios from "axios";
import {
  editSearch,
  toggleCategory,
  getCategories,
  selectCategory,
} from "actions/category";
import { toggleLoading } from "actions/loading";
import Category from "components/category/category";
import Input from "components/input/input";
import Loader from "components/loader/loader";
import history from "config/history";
import {
  titleVariants,
  categoryWrapperVariants,
  TitleSearchVariants,
  FormVariants,
  categoryWrapperSearchVariants,
  ContainerVariants,
} from "./homeVariants";
import {
  Container,
  Titleh1,
  Titleh2,
  CategoryWrapper,
  Form,
  CategorySearchWrapper,
} from "./homeStyles";

const Home = () => {
  if (localStorage.getItem("username") === null) {
    history.push("/login");
  }
  const category = useSelector((state) => state.category);
  const categories = [
    { name: "General Knowledge", id: 9 },
    { name: "Sports", id: 21 },
    { name: "Geography", id: 22 },
    { name: "Science & Nature", id: 17 },
  ];
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  let isLoading = useSelector((state) => state.loading.isLoading);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(toggleLoading());
      }, 1500);
    }
    if (document.querySelector("h2") !== null && offset === 0) {
      setOffset(document.querySelector("h2").getBoundingClientRect().top - 56);
    }
    if (offset !== 0) {
      titleVariants.hidden.y = -offset;
      categoryWrapperVariants.hidden.y = -offset;
      TitleSearchVariants.up.y = -offset;
      FormVariants.up.y = -offset;
      categoryWrapperSearchVariants.visible.y = -offset;
    }
  }, [dispatch, isLoading, offset]);

  const onCategorySelect = (category) => {
    dispatch(selectCategory(category));
    localStorage.setItem("category", JSON.stringify(category));
    history.push(`/quiz/${category.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get("https://opentdb.com/api_category.php").then((res) => {
      const categoriesFiltered = res.data.trivia_categories.filter(
        (c) =>
          c.name.toLowerCase().indexOf(category.search.toLowerCase()) !== -1
      );
      const resultLength = 4;
      if (categoriesFiltered.length > resultLength) {
        categoriesFiltered.splice(
          resultLength,
          categoriesFiltered.length - resultLength
        );
      }
      dispatch(getCategories(categoriesFiltered));
    });
  };

  console.log(offset);
  console.log(category.listCategory);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={ContainerVariants}
        >
          <Titleh1
            animate={
              category.isVisibleCategory && category.search.length === 0
                ? "visible"
                : "hidden"
            }
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          >
            {t("ChooseCategory")} 💪🏻
          </Titleh1>
          <CategoryWrapper
            animate={
              category.isVisibleCategory && category.search.length === 0
                ? "visible"
                : "hidden"
            }
            variants={categoryWrapperVariants}
            transition={{ duration: 0.5 }}
          >
            {categories.map((c) => (
              <Category
                category={c}
                key={c.id}
                onClick={() => onCategorySelect(c)}
              />
            ))}
          </CategoryWrapper>
          <Titleh2
            animate={
              category.isVisibleCategory && category.search.length === 0
                ? "down"
                : "up"
            }
            variants={TitleSearchVariants}
            transition={{ duration: 0.5 }}
          >
            {t("searchCategory")}
          </Titleh2>
          <Form
            animate={
              category.isVisibleCategory && category.search.length === 0
                ? "down"
                : "up"
            }
            variants={FormVariants}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <Input
              placeholder="Art, Science, History..."
              name="search"
              value={category.search}
              arrow={true}
              onFocus={() => dispatch(toggleCategory())}
              onBlur={() => dispatch(toggleCategory())}
              onChange={(e) => dispatch(editSearch(e))}
            />
          </Form>
          {category.listCategory.length !== 0 && (
            <CategorySearchWrapper
              inital="hidden"
              animate={
                category.listCategory.length !== 0 ? "visible" : "hidden"
              }
              exit="hidden"
              variants={categoryWrapperSearchVariants}
              transition={{ duration: 0.5 }}
            >
              {category.listCategory.map((c) => (
                <Category category={c} key={c.id} />
              ))}
            </CategorySearchWrapper>
          )}
        </Container>
      )}
    </>
  );
};

export default Home;
