import React from "react";
import ThemeSelector from "components/themeSelector/themeSelector";
import LanguageSelector from "components/languageSelector/languageSelector";
import { useSelector } from "react-redux";
import {
  HeaderStyled,
  StyledTitle,
  StyledContainerIcones,
} from "./headerStyles";
import ProfilSelector from "components/profilSelector/profilSelector";

const Header = () => {
  let scoreTable = useSelector((state) => state.score.scoreTable);

  return (
    <HeaderStyled>
      <StyledTitle>Quizer</StyledTitle>
      {scoreTable.length > 0 && <ProfilSelector />}
      <StyledContainerIcones>
        <ThemeSelector />
        <LanguageSelector />
      </StyledContainerIcones>
    </HeaderStyled>
  );
};

export default Header;
