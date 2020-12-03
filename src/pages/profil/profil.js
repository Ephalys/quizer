import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import history from "config/history";
import Category from "components/category/category";
import { useDispatch } from "react-redux";

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

  return (
    <div>
      <button onClick={handleRedirectHome}> Home </button>

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
    </div>
  );
};

export default Profil;
