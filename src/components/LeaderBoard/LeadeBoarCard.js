import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

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
                  <h6>{data.name}</h6>
                </div>
              </td>
              <td>{data.rating}</td>
              <td>
                <div className="user-profile">
                  <Tooltip title={data.country}>
                    <Avatar alt="" src={data.countryFlag} />
                  </Tooltip>
                </div>
              </td>
              <td>{data.rating}</td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default LeadeBoarCard;
