import fetchUserData from "../services/githubService";
import { useState } from "react";


const ITEMS_PER_PAGE = 6;
function SearchBar() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [location, setLocation] = useState("");
  const [repo, setRepo] = useState("");
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
    setRepo(e.target.value);
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
        repo,
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
        repo,
        nextPage,
        ITEMS_PER_PAGE
      );
      setUsers((prevUsers) => [...prevUsers, ...items]);
      setPage(nextPage);
    } catch (error) {
      console.error("no more");
    } finally {
      setLoading(false);
    }
  };
  const showUsers = users && users.length > 0;
  /* return (
    <div className="container">
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
  ); */
   return (
    <div className="flex w-full h-screen bg-[#0d2b3e] font-sans">
      {/* Search Bar section */}
      <form
        className="w-1/3 h-screen bg-[#f4f4f4] flex flex-col items-center p-8 box-border rounded-r-[40px] shadow-[8px_0_15px_rgba(0,0,0,0.2)]"
        onSubmit={handleSubmit}
      >
        <div className="w-full text-center text-[#0D2B3E] mb-8">
          <h1 className="tracking-[0.5rem] text-[2.5rem] font-extrabold m-0">GITHUB</h1>
          <h2 className="tracking-[0.2rem] m-0 text-[1.2rem] font-semibold">USER SEARCH</h2>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center mt-20">
          <input
            type="text"
            placeholder="Username"
            className="mb-10 w-4/5 h-12 rounded-lg px-4 text-base border-none shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] bg-[#e0e0e0] focus:outline-none"
            onChange={handleChangeUsername}
          />
          <input
            type="text"
            placeholder="Location"
            className="mb-10 w-4/5 h-12 rounded-lg px-4 text-base border-none shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] bg-[#e0e0e0] focus:outline-none"
            onChange={handleChangeLocation}
          />
          <input
            type="text"
            placeholder="MinRepo"
            className="mb-10 w-4/5 h-12 rounded-lg px-4 text-base border-none shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] bg-[#e0e0e0] focus:outline-none"
            onChange={handleChangeRepo}
          />
        </div>
        <button
          type="submit"
          className="w-4/5 h-16 rounded-lg border-none text-lg font-medium bg-[#013758] text-white shadow-[inset_5px_5px_8px_3px_rgba(1,3,83,0.377)] transition-all duration-500 hover:shadow-[inset_5px_0px_8px_3px_rgba(255,255,255,0.377),0px_5px_8px_3px_rgba(0,0,0,0.336)] hover:bg-[#01588f]"
        >
          Search
        </button>
      </form>
      
      {/* Results section */}
      <div className="w-2/3 h-screen overflow-y-auto flex flex-col items-center p-8 box-border">
        {loading && users.length === 0 && <p className="text-white">Loading...</p>}
        {error && <p className="text-white">Looks like we can't find the user</p>}
        
        {showUsers && (
          <ul className="w-full list-none p-0 m-0">
            {users.map((user) => (
              <li
                key={user.id}
                className="w-full flex items-center justify-between text-white bg-[#0b2233] p-4 rounded-lg mb-4 shadow-md"
              >
                <img
                  src={user.avatar_url}
                  className="w-16 h-16 rounded-full mr-6 bg-gray-300"
                  alt={`${user.login}'s avatar`}
                />
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold m-0">{user.login}</h3>
                  {user.location && <p className="text-sm font-light m-0">Location: {user.location}</p>}
                  {user.public_repos && <p className="text-sm font-light m-0">Repositories: {user.public_repos}</p>}
                </div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f4f4f4] text-[#0D2B3E] px-4 py-2 rounded-md font-semibold whitespace-nowrap no-underline"
                >
                  Discover
                </a>
              </li>
            ))}
          </ul>
        )}
        
        {!loading && users.length === 0 && !error && (
          <p className="text-white">No users found with the provided criteria.</p>
        )}
        
        {hasMoreResult && (
          <button
            className="bg-transparent text-white border border-white px-6 py-2 rounded-md text-base cursor-pointer mt-4 transition-all duration-300 hover:bg-white hover:text-[#0D2B3E] disabled:opacity-50 disabled:cursor-not-allowed"
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
export default SearchBar;
