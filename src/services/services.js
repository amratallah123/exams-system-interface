import axios from "axios";
const apiUrl = "http://localhost:3000/api/";

export function getWords() {
  return axios.get(apiUrl + "words");
}
export function postScoreAndGetRank(score) {
  return axios.post(apiUrl + "rank", { score });
}
