import React from "react";
import styled from "styled-components";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelected } from "../store/searchSlice";
const MapWrapper = styled.div`
  // width: 800px;
  // height: 300px;
  position: fixed;
  Marker {
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
const containerStyle = {
  width: "860px",
  height: "430px",
  position: "fixed",
};
function Map() {
  const dispatch = useDispatch();
  const { coordinates, places, selected } = useSelector(
    (state) => state.search,
    shallowEqual
  );
  const center = {
    lat: parseFloat(coordinates[0]),
    lng: parseFloat(coordinates[1]),
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    googleMapsApiKey: "AIzaSyDbQJhYSfcbDgAn2GxGt-gcnApQ3Ldnn_M",
  });
  const navigate = useNavigate();

  return isLoaded ? (
    <MapWrapper>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={""}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            icon={{
              path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
              fillColor: "Orange",
              fillOpacity: 2,
              strokeWeight: 0,
              rotation: 0,
              scale: 2,
            }}
            position={{
              lat: place.coordinates.latitude,
              lng: place.coordinates.longitude,
            }}
            // eventHandlers={{
            //   onclick: () => dispatch(setSelected(place)),
            //   mouseover: () => dispatch(setSelected(place)),
            //   mouseout: () => dispatch(setSelected({})),
            // }}
            onClick={() => {
              dispatch(setSelected(place));
            }}
            mouseover={() => {
              dispatch(setSelected(place));
            }}
            mouseout={() => {
              dispatch(setSelected({}));
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{
              lat: selected.coordinates.latitude,
              lng: selected.coordinates.longitude,
            }}
            onCloseClick={() => {
              dispatch(setSelected(null));
            }}
          >
            <div onClick={() => navigate(`/HotelDetail/${selected.id}`)}>
              <h2>{selected.name}</h2> <h5>Rating: {selected.rating} </h5>
              <button
                onClick={() => {
                  window.open(selected.url, "_blank");
                }}
              >
                {" "}
                Website{" "}
              </button>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </MapWrapper>
  ) : (
    <></>
  );
}

export default Map;
