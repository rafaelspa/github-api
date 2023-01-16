import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findGithubUser(handle: string) {
  return axios.get(`${BASE_URL}/${handle}`);
}
