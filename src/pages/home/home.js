import React from "react";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p>{t("ChooseCategory")} 💪🏻</p>
    </div>
  );
};

export default Home;
