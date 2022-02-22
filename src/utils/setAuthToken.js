//to store authentication token into storage.
//and the same token provide it to ur axios as well.
import api from "./api";

//Store your JWT in LS and set axios headers if we do have a token

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
