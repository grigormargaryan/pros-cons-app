import axios from "axios";

const instance = axios.create({
  baseURL: "https://avetiq-test.firebaseapp.com/"
});

export default instance;
