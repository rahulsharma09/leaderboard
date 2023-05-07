import React from "react";
import Leaderboard from "./components/LeaderBoard/Leaderboard";
import { userData } from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./components/User/UserDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Leaderboard userData={userData} itemsPerPage={4} />}
          />
          <Route path="user-details/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
