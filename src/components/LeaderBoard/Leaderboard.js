import React from "react";
import "./Leaderboard.css";
import { useState } from "react";
import LeadeBoarCard from "./LeadeBoarCard";

const Leaderboard = ({ userData }) => {
  const [searchUser, setSearchUser] = useState("");
  const handleUserSearch = (e) => {
    console.log(e.target.value);
    setSearchUser(e.target.value);
  };
  console.log("re-render");
  return (
    <div className="container mt-5">
      <input
        type="text"
        placeholder="User"
        onChange={(e) => handleUserSearch(e)}
        className="form-control m-4"
      />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Country</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {searchUser == "" &&
            userData.map((user, index) => {
              return <LeadeBoarCard user={user} />;
            })}
          {searchUser != "" &&
            userData.map((user) => {
              if (user.name.includes(searchUser) || user.name == searchUser) {
                return <LeadeBoarCard user={user} />;
              }
            })}
        </tbody>
      </table>

      {/* {userData.map((user, index) => {
        return (
          <div key={index}>
            
            <div className="name-profile">
              <div>
                <img className="profile-pic" src={user.profilePicture} alt="" />
              </div>
              <div>
                <h4>{user.name}</h4>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Leaderboard;
