import fetchUserData from "../services/githubService";
import { useState } from "react";

const ITEMS_PER_PAGE = 6;
function SearchBar() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const hasMoreResult = users.length < totalCount;
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleChangeRepo = (e) => {
    setMinRepos(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);
    setTotalCount(0);
    try {
      const data = await fetchUserData(
        username,
        location,
        minRepos,
        1,
        ITEMS_PER_PAGE
      );
      setUsers(data.items);
      setTotalCount(data.total_count);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleLoadMore = async () => {
    setLoading(true);

    try {
      const nextPage = page + 1;
      const { items } = await fetchUserData(
        username,
        location,
        minRepos,
        nextPage,
        ITEMS_PER_PAGE
      );
      setUsers((prevUsers) => [...prevUsers, ...items]);
      setPage(nextPage);
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false);
    }
  };
  const showUsers = users && users.length > 0;
 return (
    <div className="container flex flex-row">
      <form className="searchBar" onSubmit={handleSubmit}>
        <div className="titles">
          <h1>GITHUB</h1>
          <h2>USER SEARCH</h2>
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="Username"
            className="searchInput"
            onChange={handleChangeUsername}
          />
          <input
            type="text"
            placeholder="Location"
            className="searchInput"
            onChange={handleChangeLocation}
          />
          <input
            type="text"
            placeholder="MinRepo"
            className="searchInput"
            onChange={handleChangeRepo}
          />
        </div>
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="result">
        {loading && users.length === 0 && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {showUsers && (
  <ul className="userList">
    {users.map((user) => (
      <li key={user.id} className="list">
        <img
          src={user.avatar_url}
          className="picture"
          alt={`${user.login}'s avatar`}
        />
        <div className="userInfo">
        <h3>{user.login}</h3>
        {user.location && <p>Location: {user.location}</p>}

       
        {user.public_repos && <p>Repositories: {user.public_repos}</p>}
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="discoverLink"
        >
          Discover
        </a>
      </li>
    ))}
  </ul>
)}
        {!loading && users.length === 0 && !error && (
          <p>No users found with the provided criteria.</p>
        )}
        {hasMoreResult && (
          <button
            className="loadMore"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More..."}
          </button>
        )}
      </div>
    </div>
  ); 

}
export default SearchBar
