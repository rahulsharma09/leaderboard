import React from "react";
import "./Leaderboard.css";
import { useState } from "react";
import LeadeBoarCard from "./LeadeBoarCard";
import ReactPaginate from "react-paginate";

const Leaderboard = ({ userData, itemsPerPage }) => {
  const [searchUser, setSearchUser] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = userData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const handleUserSearch = (e) => {
    console.log(e.target.value);
    setSearchUser(e.target.value);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Leaderboard</h2>
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
          {searchUser == "" && (
            <>
              <LeadeBoarCard user={currentItems} />
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
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
          {searchUser != "" &&
            userData.map((user) => {
              if (user.name.includes(searchUser) || user.name == searchUser) {
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
