import axios from "axios";

axios.defaults.baseURL = SERVER_URL;

export async function login({ username, password }) {
  try {
    const { data } = await axios.post("/auth/login", { username, password });
    console.log("data...", data);
    return data;
  } catch (e) {
    return { success: false, message: e.response.data.message };
  }
}

export async function registerUser(user) {
  try {
    const { data } = await axios.post("/auth/register", user);
    console.log(data);
    return data;
  } catch (e) {
    return { success: false, message: e.response.data.message };
  }
}
