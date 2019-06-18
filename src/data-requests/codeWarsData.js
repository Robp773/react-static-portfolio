import axios from "axios";

export default function getCodeWarsData() {
  return axios
    .get(
      "https://www.codewars.com/api/v1/users/Robp773/code-challenges/completed?page=0"
    )
    .then(codeWarsData => {
      return axios
        .get("https://www.codewars.com/api/v1/users/Robp773")
        .then(codeWarsUser => {
          return {codeWarsData: codeWarsData.data, codeWarsUser: codeWarsUser.data}
        });
    });
}