import React from "react";
import ThemeSelector from "components/themeSelector/themeSelector";
import LanguageSelector from "components/languageSelector/languageSelector";
import ProfilImg from "assets/icons/profil.svg";
import history from "config/history";
import { useSelector } from "react-redux";

const Header = (props) => {
  let scoreTable = useSelector((state) => state.score.scoreTable);

  const onProfil = (category) => {
    history.push(`/profil`);
  };

  return (
    <header>
      {scoreTable.length > 0 ? (
        <img src={ProfilImg} onClick={onProfil} />
      ) : null}
      <ThemeSelector />
      <LanguageSelector />
    </header>
  );
};

export default Header;
