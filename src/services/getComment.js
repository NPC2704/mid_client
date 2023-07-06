import { getComment } from "../utils/apiRoutes";

import axios from "axios";
export const getCommentService = async (getCmt) => {
  return axios.get(getComment, getCmt);
};
