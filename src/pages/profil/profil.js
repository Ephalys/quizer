import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import history from "config/history";
import Category from "components/category/category";
import { useDispatch } from "react-redux";
import { selectCategory } from "actions/category";

const Profil = () => {
  const dispatch = useDispatch();
  let username = useSelector((state) => state.username.username);
  let scoreTable = useSelector((state) => state.score.scoreTable);
  let favoritesCategories = useSelector(
    (state) => state.category.FavoritesCategories
  );

  const handleRedirectHome = () => {
    history.push("/");
  };

  const onCategorySelect = (category) => {
    // dispatch(selectCategory(category));
    // localStorage.setItem("category", JSON.stringify(category));
    // history.push(`/quiz/${category.id}`);
  };

  useEffect(() => {
    console.log("Score: ", scoreTable, "fav: ", favoritesCategories);
  });
  return (
    <div>
      <button onClick={handleRedirectHome}> Home </button>

      {username}

      {favoritesCategories.map((c) => (
        <Category category={c} key={c.id} onClick={() => onCategorySelect(c)} />
      ))}
      {scoreTable.map((s, index) => (
        <div key={index}>
          <p>{s.category}</p>
          <p>
            {s.goodAnswerCount} / {s.questCount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Profil;
