// import { toast } from "react-toastify";
import getCLient from "./axiosClient"

const adminService = {
  getAllProvider: async (status ,token ,page) => {
    try{
      const request = await getCLient.apiClientGet(`/admin/providers/${status}?page=${page}`, token);
      let response = await request;
      return response;
    }catch(e){
    }
  },
  getAllUser: async (status , token , page) => {
    try{
      const request = await getCLient.apiClientGet(`/admin/users/${status}?page=${page}`, token);
      let response = await request;
      return response;
    }catch(e){
      return e ;
    }
  },
  getAllProduct: async (status ,token , page) => {
    try{
      const request = await getCLient.apiClientGet(`/admin/product_requests/${status}?page=${page}`, token);
      let response = await request;
      return response;
    }catch(e){
    }
  },

  searchProduct: async (status ,token , searchValue) => {
    try{
      const request = await getCLient.apiClientGet(`/admin/product_requests/${status}?keyword=${searchValue}`, token);
      let response = await request;
      return response;
    }catch(e){
    }
  },
};


export default adminService;
