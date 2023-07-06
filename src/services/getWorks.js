import { getWork } from "../utils/apiRoutes";

import axios from "axios";
export const getWorkService = async () => {
  return axios.get(getWork);
};
