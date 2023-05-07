import React from "react";
import "./Leaderboard.css";
import { useState } from "react";
import LeadeBoarCard from "./LeadeBoarCard";
import ReactPaginate from "react-paginate";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";


const Leaderboard = ({ userData, itemsPerPage }) => {
  const [searchUser, setSearchUser] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  let currentItems = userData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const handleUserSearch = (e) => {
    setSearchUser(e.target.value);
  };

  const handleCountry = (e) => {
    setSearchCountry(e.target.value);
  };

  console.log("re-render");

  return (
    <div className="container mt-5">
      <h2 className="text-center">Leaderboard</h2>
      <div className="search__section mb-4">
        <Input
          id="input-with-icon-adornment"
          placeholder="User"
          onChange={(e) => handleUserSearch(e)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Input
          id="input-with-icon-adornment"
          placeholder="Country"
          onChange={(e) => handleCountry(e)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
      <table class="table table-striped bg-light">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Country</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {searchUser == "" && searchCountry == "" && (
            <>
              <LeadeBoarCard user={currentItems} />
              <ReactPaginate
                breakLabel="..."
                nextLabel="NEXT >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< PREV"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
              />
            </>
          )}

          {searchUser.length != 0 &&
            userData.map((user) => {
              if (user.name.includes(searchUser) || user.name == searchUser) {
                let arr = [];
                arr.push(user);
                return <LeadeBoarCard user={arr} />;
              }
            })}

          {searchCountry.length != 0 &&
            userData.map((user) => {
              if (
                user.country.includes(searchCountry) ||
                user.country == searchCountry
              ) {
                let arr = [];
                arr.push(user);
                return <LeadeBoarCard user={arr} />;
              }
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
