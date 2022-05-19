import axiosClient from "./axiosClient";
import axios from "axios";
import config from "./requestConfig";

const { apiClientGet } = axiosClient;

const cartService = {
  getAllProductInCart: async (token) => {
    const data = await apiClientGet("/user/cart", token);
    return data;
  },
  cartAction: async (action, { id, token }) => {
    try {
      const request = await axios.put(
        `${process.env.REACT_APP_API}/user/cart/${id}/${action}`,
        null,
        config(token),
      );
      const response = await request.data;
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (data, token) => {
    try {
      const request = await axios.post(
        `${process.env.REACT_APP_API}/user/cart/add`,
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

export default cartService;
