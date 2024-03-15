import { env } from "../env.js";
import { http } from "./http.js";

export const getUserInfo = async () => {
  const username = localStorage.getItem("username");
  if (username) {
    const rsp = await http
      .get("http://localhost:3000/api/user/findOne", {
        params: { username },
      })
      .catch((err) => {
        console.log(err);
      });
    return rsp ? rsp.data : {};
  }
};
