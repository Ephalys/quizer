import React from "react";
import ThemeSelector from "components/themeSelector/themeSelector";
import LanguageSelector from "components/languageSelector/languageSelector";
import {Header} from './headerStyles'

const header = () => {
  return (
    <Header>
      <ThemeSelector />
      <LanguageSelector />
    </Header>
  );
};

export default header;
