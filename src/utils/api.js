import axios from "axios";

axios.defaults.baseURL = SERVER_URL;
axios.defaults.withCredentials = true;

export async function login(user) {
  try {
    const { data } = await axios.post("/auth/login", user);
    return data;
  } catch (e) {
    return { success: false, message: e.response.data.message };
  }
}

export async function logout() {
  try {
    const { data } = await axios.get("/auth/logOut");
    return data;
  } catch (e) {
    return { success: false, message: e.response.data.message };
  }
}

export async function registerUser(user) {
  console.log(user);

  try {
    const { data } = await axios.post("/auth/register", user);
    return data;
  } catch (e) {
    return { success: false, message: e.response.data.message };
  }
}

export async function initialize() {
  try {
    const { data } = await axios.get("/misc/initialize");
    return data;
  } catch (e) {
    return { success: false, message: e.response.data.message };
  }
}
