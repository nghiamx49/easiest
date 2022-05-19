import axios from "axios";
import requestConfig from "./requestConfig";

const config = {
  validateStatus: function (status) {
    return status <= 500;
  },
};

const authenticateService = {
  login: async ({ username, password }) => {
    let request = await axios.post(
      `${process.env.REACT_APP_API}/authenticate/login`,
      {
        username,
        password,
      },
      config,
    );
    let response = await request.data;
    return response;
  },
  check: async (token) => {
    let request = await axios.get(
      `${process.env.REACT_APP_API}/authenticate/check`,
      requestConfig(token),
    );
    let response = await request.data;
    return response;
  },
  getUserDetail: async () => {},
  logout: async () => {},
  forgotPassword: async () => {},
  registerAsUser: async (requestBody) => {
    let request = await axios.post(
      `${process.env.REACT_APP_API}/authenticate/register/user`,
      requestBody,
      config,
    );
    let response = await request.data;
    return response;
  },
  registerAsProvider: async (requestBody) => {
    let request = await axios.post(
      `${process.env.REACT_APP_API}/authenticate/register/provider`,
      requestBody,
      config,
    );
    let response = await request.data;
    return response;
  },
};

export default authenticateService;
