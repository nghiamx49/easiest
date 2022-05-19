export default function config(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    validateStatus: function (status) {
      return status <= 500;
    },
  };
}
