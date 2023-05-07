import React from "react";
import { useParams } from "react-router-dom";
import { userData } from "../../data";
import "./UserDetails.css";
import Chart from "../PracticeBadge/Chart";

const UserDetail = () => {
  const { id } = useParams();
  console.log("name", id);
  let user = {};
  userData.map((data) => {
    if (data.id == id) {
      user = data;
    }
  });
  console.log(user);
  return (
    <div>
      <div className="row mt-5 ml-5 user-section">
        <div className="col-lg-4 col-md-4">
          <div className="custom-card">
            <img className="profile" src={user.profilePicture} alt="" />
            <h2 className="mt-3 mb-3">
              <b>{user.name}</b>
            </h2>
            <h6>{user.username}</h6>
            <h6>{user.country}</h6>
            <h6>{user.profession}</h6>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="custom-card">
            <div className="level text-center">
              <h3>Level</h3>
              {
                user.rating <= 1200 &&
                <p>Beginer</p>
              }
              {
                user.rating > 1200 && user.rating <= 1800 &&
                <p>Intermediate</p>
              }
              {
                user.rating >= 1800 &&
                <p>Advanced</p> 
              }
            </div>
            <hr />
            <div className="stats">
              <div>
                <p>Problem Solved</p>
                <h5>
                  <b>{user.problemsSolved}</b>
                </h5>
              </div>
              <div>
                <p>Solutions Submitted</p>
                <h5>
                  <b>{user.solutionsSubmittes}</b>
                </h5>
              </div>
              <div>
                <p>Contest Ratings</p>
                <h5>
                  <b>{user.rating}</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="custom-card mt-3">
            <h5>Practice Badges</h5>
            <div className="badges">
              {user.practiceBadges.map((data, index) => {
                return <div className="mt-4">
                  <h6><b>{data}</b></h6>
                </div>;
              })}
            </div>
          </div>
          <div className="chart mt-3 custom-card">
            <h5>Contest Ratings</h5>
            <Chart points={user.contestRating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
