import { addWork } from "../utils/apiRoutes";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const addWorkService = async (add) => {
  return axios
    .post(addWork, add)
    .then((res) => {
      if (res.status === 200) {
        // Gọi hàm loadData để cập nhật dữ liệu trên giao diện người dùng
      }
    })
    .catch((err) => console.log(err));
};
