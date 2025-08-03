import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

async function fetchUserData(username, location, repo, page = 1, per_page = 5) {
  const queryArray = [];
  if (username) {
    queryArray.push(username);
  }
  if (location) {
    queryArray.push(`location:${location}`);
  }
  if (repo) {
    queryArray.push(`repos:>=${repo}`);
  }
  if (queryArray.length === 0) {
    return { items: [], total_cout: 0 };
  }
  const queryString = queryArray.join("+");
  const searchResponse = await axios.get(
    `https://api.github.com/search/users?q=${queryString}&page=${page}&per_page=${per_page}`,
    {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    }
  );
  const users = searchResponse.data.items;
  const detailedUsersPromises = users.map(async (user) => {
    const detailedResponse = await axios.get(user.url, {
      headers: {
        Authorization: `tokaen ${apiKey}`,
      },
    });
    return{...user, ...detailedResponse.data};
  });
  const detailedUsers = await Promise.all(detailedUsersPromises)
  return {
    items: detailedUsers,
    total_count: searchResponse.data.total_count,
  };
  
}

export default fetchUserData;
