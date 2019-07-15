import axios from "axios";

export default function getDevToData() {
 return axios.get("https://dev.to/api/articles?username=robp773&page=0").then(res => {
    return res.data;
  });
}
