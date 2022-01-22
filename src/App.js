import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, SearchResult, Home } from "./components";
import { StoreProvider } from "./store";
import "./App.css";

function App() {
  return (
    <Router>
      <StoreProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResult />} />
          </Routes>
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
