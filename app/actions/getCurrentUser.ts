import axios from 'axios';
import { parseCookies } from 'nookies';

export default function getCurrentUser() {
  try {
    const cookies = parseCookies();
    const userSession = cookies['RAMPES-SESSION'] ? JSON.parse(cookies['RAMPES-SESSION']) : null;
    axios
      .get(`http://127.0.0.1:8080/user/${userSession}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
