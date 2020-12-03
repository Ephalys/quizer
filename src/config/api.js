import axios from "axios";

export async function getQuestionsByParams({
  count = 10,
  categoryId = null,
  difficulty = null,
  type = null,
}) {
  let isError = false;
  let isCategory = false;
  let isDifficulty = false;
  let isType = false;

  if (typeof count !== "number") {
    console.warn("First parameter have to be a number.");
    isError = true;
  }

  if (count < 1 || count >= 50) {
    console.warn("First parameter have to be between 1 and 50.");
    isError = true;
  }

  if (categoryId !== null) {
    categoryId = Number(categoryId);
    if (isNaN(categoryId)) {
      console.warn("Second parameter have to be a number.");
      isError = true;
    }

    await axios.get("https://opentdb.com/api_category.php").then((datas) => {
      let categories = datas.data.trivia_categories;

      const filter = categories.filter(
        (category) => category.id === categoryId
      );

      if (filter.length === 0) {
        console.warn(
          "Invalid second parameter. Please read the API documentation."
        );
        isError = true;
      }

      isCategory = true;
    });
  }

  if (difficulty !== null) {
    if (typeof difficulty !== "string") {
      console.warn("Third parameter have to be a string.");
      isError = true;
    }
    const difficulties = ["easy", "medium", "hard"];

    if (difficulties.indexOf(difficulty) === -1) {
      console.warn(
        'Third parameter have to be either "easy", or "medium", or "hard".'
      );
      isError = true;
    }
    isDifficulty = true;
  }

  if (type !== null) {
    if (typeof type !== "string") {
      console.warn("Forth parameter have to be a string.");
      isError = true;
    }
    const types = ["multiple", "boolean"];

    if (types.indexOf(type) === -1) {
      console.warn(
        'Forth parameter have to be either "multiple", or "boolean".'
      );
      isError = true;
    }
    isType = true;
  }

  if (isError) {
    return;
  }

  return axios.get(
    `https://opentdb.com/api.php?amount=${count}${isCategory ? `&category=${categoryId}` : ""
    }${isDifficulty ? `&difficulty=${difficulty}` : ""}${isType ? `&type=${type}` : ""
    }`
  );
}

export function getCategories() {
  return axios.get("https://opentdb.com/api_category.php");
}

export function getGlobalStats() {
  return axios.get("https://opentdb.com/api_count_global.php");
}
