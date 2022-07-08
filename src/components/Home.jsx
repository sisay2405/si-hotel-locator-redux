import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Map from "./Map";
import { getLocation } from "../store/searchSlice";
import SearchBar from "./SearchBar";
import { nanoid } from "nanoid";
import PlaceDetails from "./PlaceDetails";
import LoadingSpinner from "../components/LoadingSpinner";
const HomeWrapper = styled.div`
  display: flex;
  .map {
    margin-left: 860px;
  }
`;
const Home = () => {
  const dispatch = useDispatch();
  const { loading, locations, places, selected } = useSelector(
    (state) => state.search,
    shallowEqual
  );
  useEffect(() => {
    document.title = `Hotel Search for ${locations}`;
    dispatch(getLocation(locations));
  }, [locations, dispatch]);
  const filteredPosts = places;
  return (
    <>
      <SearchBar filteredPosts={filteredPosts} />
      <HomeWrapper>
        {!loading ? (
          <>
            <div>
              {" "}
              <Map places={places} />
            </div>
            <div className="map">
              {places?.map((place, i) => (
                <div key={nanoid()}>
                  <PlaceDetails
                    id={place.id}
                    place={place}
                    setSelected={place === selected}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </HomeWrapper>
    </>
  );
};

export default Home;
