import { getTitle } from "../utils/apiRoutes";

import axios from "axios";
export const getTitleService = async () => {
  return axios.get(getTitle);
};
