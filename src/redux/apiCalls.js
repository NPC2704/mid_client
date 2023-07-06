import {
  loginFailure,
  loginStart,
  loginSuccess,
  signupStart,
  signupSuccess,
  signupFailure,
} from "./userRedux";

import { publicRequest } from "../requestMethods";
import { register, login1 } from "../utils/apiRoutes";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(login1, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const signup = async (dispatch, user) => {
  dispatch(signupStart());
  try {
    const res = await publicRequest.post(register, user);
    dispatch(signupSuccess(res.data));
  } catch (err) {
    dispatch(signupFailure());
  }
};
