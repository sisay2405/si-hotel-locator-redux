import React from "react";
import styled from "styled-components";
import Announcer from "../announcer";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  align-items: center;
  background-color: #344;
  color: #fefefe;
  justify-content: space-between;
  padding: 0.7rem 1.5rem;
  & > a {
    text-decoration: none;
  }
  .searchHotel {
    font-family: cursive;
    color: orange;
    margin: 0.5px;
  }
  .searchHotelfor {
    margin: 0.5px;
  }
  .searchHotelinput {
    margin: 0.5px;
    padding: 2px;
  }
  .searchHotelButton {
    margin: 0.5px;
    padding: 2px;
    margin-bottom: 5px;
  }

  h2 {
    font-family: cursive;
    color: #fefe;
    // margin: 0.5px;
  }
  input {
    padding: 0.5rem;
  }
  input:hover {
    border-color: red;
  }
`;

const Header = ({ locations, setLocations, runSearch, filteredPosts }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    runSearch();
  };
  return (
    <HeaderWrapper>
      <h2>Hotel Search On Map</h2>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
          <h4 className="searchHotelfor">
            {" "}
            FOR: <spam className="searchHotel">{locations}</spam>
          </h4>
        </label>
        <input
          className="searchHotelinput"
          type="text"
          placeholder="Type to search....."
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
        />
        <button className="searchHotelButton" type="submit">
          Search
        </button>
        <Announcer message={`There are ${filteredPosts.length} Hotels.`} />
      </form>
    </HeaderWrapper>
  );
};
export default Header;
