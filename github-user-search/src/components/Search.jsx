import fetchUserData from "../services/githubService";
import { useState, useEffect } from "react";
function SearchBar() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="searchBar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="searchInput"
          onChange={handleChange}
        />
        <button type="submit" >
          Search
        </button>
      </form>
      <div className="result">
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {userData && (
          <div>
            <h1>{userData.login}</h1>
            <img src={userData.avatar_url} />
            <a href={userData.html_url}>Link</a>
          </div>
        )}
      </div>
    </>
  );
}
export default SearchBar;
