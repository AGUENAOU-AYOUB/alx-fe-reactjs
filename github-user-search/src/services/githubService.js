import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

async function fetchUserData(username) {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });

    return response.data;
 
}

export default fetchUserData;
