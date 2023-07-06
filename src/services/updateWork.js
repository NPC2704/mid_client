import { updateWork } from "../utils/apiRoutes";
import axios from "axios";
export const updateWorkService = async (update) => {
  return axios
    .put(updateWork, update)
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
