import React from "react";
import ThemeSelector from "../themeSelector/themeSelector";
import LanguageSelector from "../languageSelector/languageSelector";

const header = (props) => {
  return (
    <div>
      <ThemeSelector />
      <LanguageSelector />
    </div>
  );
};

export default header;
