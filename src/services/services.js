import axios from "axios";
const apiUrl = "https://exams-application-server.herokuapp.com/api/";

export function getWords() {
  return axios.get(apiUrl + "words");
}
export function postScoreAndGetRank(score) {
  return axios.post(apiUrl + "rank", { score });
}
