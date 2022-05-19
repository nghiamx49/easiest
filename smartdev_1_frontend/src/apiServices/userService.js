import axios from "axios";
import apiClient from "./axiosClient";
import config from "./requestConfig";

const { apiClientGet } = apiClient;

const userService = {
  changePassword: async (email) => {
    let result = await axios.post(
      `${process.env.REACT_APP_API}/authenticate/verify_mail`,
      {
        email: email,
      },
      {
        validateStatus: (status) => {
          return status < 500;
        },
      },
    );

    return result;
  },
  resetPassword: async (data) => {
    let result = await axios.put(
      `${process.env.REACT_APP_API}/authenticate/reset_password`,
      data,
      {
        validateStatus: (status) => {
          return status < 500;
        },
      },
    );
    return result;
  },
  verifyOTP: async (data) => {
    let result = await axios.post(
      `${process.env.REACT_APP_API}/authenticate/verify_otp`,
      data,
      {
        validateStatus: (status) => {
          return status < 500;
        },
      },
    );
    return result;
  },
  getOrderHistory: async (token) => {
    const response = await apiClientGet(`/user/order_history`, token);
    return response;
  },
  getOrderDetail: async (id, token) => {
    const response = await apiClientGet(`/user/order_history/${id}`, token);
    return response;
  },
  doCheckout: async (data, token) => {
    try {
      const request = await axios.put(
        `${process.env.REACT_APP_API}/user/cart/checkout`,
        JSON.stringify({
          ...data,
        }),
        config(token),
      );
      const response = await request.data;
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  submitFeedback: async (data, token) => {
    try {
      const request = await axios.post(
        `${process.env.REACT_APP_API}/user/rating_product`,
        JSON.stringify({
          ...data,
        }),
        config(token),
      );
      const response = await request.data;
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userService;
