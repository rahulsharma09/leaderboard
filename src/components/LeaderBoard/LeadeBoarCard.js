import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const LeadeBoarCard = ({ user }) => {
  console.log("User data: ", user);
  return (
    <>
      {user.map((data, index) => {
        return (
          <>
            <tr>
              <td>
                <div className="user-profile">
                  <Avatar alt="" src={data.profilePicture} />
                  <Link to={`user-details/${data.id}`}><h6>{data.name}</h6></Link>
                </div>
              </td>
              <td>{data.rating}</td>
              <td>
                <div className="">
                  <Tooltip title={data.country}>
                    <div className="country">
                      <Avatar alt="" src={data.countryFlag} />
                      <p>{data.country}</p>
                    </div>
                  </Tooltip>
                </div>
              </td>
              <td>{data.username}</td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default LeadeBoarCard;
