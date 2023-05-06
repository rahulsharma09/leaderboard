import React from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

const LeadeBoarCard = ({user}) => {
  return (
    <>
      <tr>
        <td>
          <div className="user-profile">
            <Avatar alt="" src={user.profilePicture} />
            <h6>{user.name}</h6>
          </div>
        </td>
        <td>{user.rating}</td>
        <td>
          <div className="user-profile">
            <Tooltip title={user.country}>
              <Avatar alt="" src={user.countryFlag} />
            </Tooltip>
          </div>
        </td>
        <td>1.k</td>
      </tr>
    </>
  );
};

export default LeadeBoarCard;
