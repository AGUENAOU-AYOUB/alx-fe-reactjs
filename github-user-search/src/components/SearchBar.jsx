import fetchUserData from "../services/githubServices";
import { useState, useEffect } from "react";
function SearchBar() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          className="searchInput"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>
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
