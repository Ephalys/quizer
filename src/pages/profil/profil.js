import React from "react";
import { useDispatch, useSelector } from "react-redux";
import history from "config/history";
import Category from "components/category/category";
import {
  Container,
  HomeButton,
  CategoryWrapper,
  Subtitle,
  ScoreContainer,
  ScoreCategory,
  Score,
} from "./profilStyles";
import { selectCategory } from "actions/category";

const Profil = () => {
  const dispatch = useDispatch();
  let username = useSelector((state) => state.username.username);
  let scoreTable = useSelector((state) => state.score.scoreTable);
  let favoritesCategories = useSelector(
    (state) => state.category.FavoritesCategories
  );

  const onCategorySelect = (category) => {
    dispatch(selectCategory(category));
    localStorage.setItem("category", JSON.stringify(category));
    history.push(`/quiz/${category.id}`);
  };

  const handleRedirectHome = () => {
    history.push("/");
  };

  return (
    <Container exit="hidden">
      <HomeButton onClick={handleRedirectHome}>{"< Home"}</HomeButton>

      <h1>Hello, {username} !</h1>
      <Subtitle>Favorites categories</Subtitle>
      <CategoryWrapper>
        {favoritesCategories.map((c) => (
          <Category
            category={c}
            key={c.id}
            onClick={() => onCategorySelect(c)}
          />
        ))}
      </CategoryWrapper>
      <Subtitle>Last Scores</Subtitle>
      {scoreTable.map((s, index) => (
        <ScoreContainer key={index}>
          <Score>
            {s.goodAnswerCount} / {s.questCount}
          </Score>
          <ScoreCategory>{s.category}</ScoreCategory>
        </ScoreContainer>
      ))}
    </Container>
  );
};

export default Profil;
