import axios from "axios";

export const apiClientPatch =  async (endpoint, token , id , status) => {
  let response = await axios.put(`${process.env.REACT_APP_API}${endpoint}`,
        JSON.stringify({
          id : id , status : status,
          }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        validateStatus: function (status) {
          return status < 500;
        },
      },
  )
    // ).then((response)=>{
    //   return response
    // }).catch((error)=>{
    //   return error
    // })
    return response
};

export const apiClientPatchUser =  async (endpoint, token) => {
  let response = await axios.put(`${process.env.REACT_APP_API}${endpoint}`,
  {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        validateStatus: function (status) {
          return status < 500;
        },
      },
    )
    // .then((response)=>{
    //   return response
    // }).catch((error)=>{
    //   return error
    // })
    return response
};

