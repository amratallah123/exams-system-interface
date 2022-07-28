import axios from "axios";
const apiUrl = "http://localhost:1000/api/";

export async function getWords() {
  return await axios.get(apiUrl + "words");
}
