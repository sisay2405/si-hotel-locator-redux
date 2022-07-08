import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setLocations } from "../store/searchSlice";
import Announcer from "./Announcer";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  align-items: center;
  background-color: #344;
  color: #fefefe;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  & > a {
    text-decoration: none;
  }
  .searchHotel {
    font-family: cursive;
    color: orange;
    margin: 0.5px;
  }
  .searchHotelfor {
    margin: 0.3px;
  }
  .searchHotelinput {
    margin: 0.5px;
    padding: 2px;
  }

  h2 {
    font-family: cursive;
    color: #fefe;
    margin: 0.5px;
  }
  .searchHotelButton {
    margin: 0.5px;
    padding: 2px;
    margin-bottom: 5px;
  }
  input {
    padding: 0.5rem;
  }
  input:hover {
    border-color: red;
  }
`;

function SearchBar({ filteredPosts }) {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const locations = useSelector((state) => state.search.locations);

  const onSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchRef.current.value;
    if (searchTerm) {
      dispatch(setLocations(searchTerm));
    }
  };

  return (
    <HeaderWrapper>
      <h2>Hotel Search Map</h2>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
          <h4 className="searchHotelfor">
            FOR: <span className="searchHotel">{locations}</span>
          </h4>
        </label>
        <input
          className="searchHotelinput"
          type="text"
          ref={searchRef}
          placeholder="Type to search....."
          defaultValue={locations}
          onChange={(e) => setLocations(e.target.value)}
        />
        <button className="searchHotelButton" type="submit">
          Search
        </button>
        <Announcer message={`There are ${filteredPosts.length} Hotels.`} />
      </form>
    </HeaderWrapper>
  );
}
export default SearchBar;
