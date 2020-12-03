import { combineReducers } from "redux";
import username from "./username";
import category from "./category";
import theme from "./theme";
import loading from "./loading";
import score from "./score";

export default combineReducers({
  username,
  category,
  theme,
  loading,
  score,
});
