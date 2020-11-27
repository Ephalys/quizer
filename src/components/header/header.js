import React from "react";
import ThemeSelector from "components/themeSelector/themeSelector";
import LanguageSelector from "components/languageSelector/languageSelector";

const header = (props) => {
  return (
    <div>
      <ThemeSelector />
      <LanguageSelector />
    </div>
  );
};

export default header;
