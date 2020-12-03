import React from "react";
import { useSelector } from "react-redux";
import history from "config/history";
import Category from "components/category/category";
import { Container, HomeButton } from "./profilStyles";

const Profil = () => {
  let username = useSelector((state) => state.username.username);
  let scoreTable = useSelector((state) => state.score.scoreTable);
  let favoritesCategories = useSelector(
    (state) => state.category.FavoritesCategories
  );

  const handleRedirectHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <HomeButton onClick={handleRedirectHome}>{"< Home"}</HomeButton>

      {username}

      {favoritesCategories.map((c) => (
        <Category category={c} key={c.id} />
      ))}
      {scoreTable.map((s, index) => (
        <div key={index}>
          <p>{s.category}</p>
          <p>
            {s.goodAnswerCount} / {s.questCount}
          </p>
        </div>
      ))}
    </Container>
  );
};

export default Profil;
