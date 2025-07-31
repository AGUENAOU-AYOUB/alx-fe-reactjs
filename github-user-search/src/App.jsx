import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
