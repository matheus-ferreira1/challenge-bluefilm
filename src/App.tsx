import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import ActorDetail from "./pages/ActorDetail";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/movieDetail/:movieId" element={<MovieDetail />} />
          <Route path="/actorDetail/:actorId" element={<ActorDetail />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
