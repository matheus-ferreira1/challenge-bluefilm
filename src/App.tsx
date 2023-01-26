import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import ActorDetail from "./pages/ActorDetail";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search/:term" element={<Search />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/actor-detail/:id" element={<ActorDetail />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
