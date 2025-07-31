const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

async function githubUsers() {
  try {
    const response = await fetch("https://api.github.com/users", {
      headers: { Authorization: `token ${apiKey}` },
    });
    const data = await response.json();
  } catch (error) {
    alert(`Error... ${error}`)
  }
}
 export default githubUsers;