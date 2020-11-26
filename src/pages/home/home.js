import React from "react";
import { useTranslation } from "react-i18next";
import Category from "../../components/category/category";
import Input from "../../components/input/input";
import { useDispatch, useSelector } from "react-redux";
import { editSearch } from "../../actions/search";
import { Titleh1, Titleh2, CategoryWrapper, InputWrapper } from "./homeStyles";

const Home = () => {
  const { t, i18n } = useTranslation();

  const categories = [
    { name: "General Knowledge", id: 9 },
    { name: "Sports", id: 21 },
    { name: "Geography", id: 22 },
    { name: "Science & Nature", id: 17 },
  ];
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  return (
    <div>
      <Titleh1>{t("ChooseCategory")} 💪🏻</Titleh1>
      <CategoryWrapper>
        {categories.map((c) => (
          <Category category={c} key={c.id} />
        ))}
      </CategoryWrapper>
      <Titleh2>{t("searchCategory")}</Titleh2>
      <InputWrapper>
        <Input
          placeholder="Art, Science, History..."
          value={search.search}
          arrow={true}
          onChange={(e) => dispatch(editSearch(e))}
        />
      </InputWrapper>
    </div>
  );
};

export default Home;
