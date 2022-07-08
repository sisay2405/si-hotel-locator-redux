import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { lighten } from "../Utils/styleMethods";

const HotelWrapper = styled.header`
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px orange;
  padding: 0.5rem;
  &:hover {
    ${lighten("#009900", 0.8)}
    cursor: pointer;
    p {
      color: #000099;
    }
  }
  .hotelListwebsite{
    color:green;
  }
  .hotelList{
    font-family: cursive;
    margin:1px;
  }
  .classNameTitle{
    font-family: cursive;
   color:#ff4500;
   margin:1px;
  }
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #85cdd2;
    `}
`;

const PlaceDetails = ({ place, setSelected }) => {
  const {
    name,
    display_phone: phone,
    location: { display_address: address },
  } = place;
  const navigate = useNavigate();
  const displayHotel = (e) => {
    navigate(`/HotelDetail/${place.id}`);
  };
  return (
    <HotelWrapper setSelected={setSelected} onClick={displayHotel}>
      <h3 className="classNameTitle"> {name}</h3>
      <p className="hotelList">
        <span>{phone} </span>
        <span
          className="hotelListwebsite"
          onClick={() => {
            window.open(place.url, "_blank");
          }}
        >
          {" "}
          <button>website</button>{" "}
        </span>{" "}
      </p>
      <section>
        <p>
          <i className="fa-solid fa-location-dot" />
          {address.join(" ")}
        </p>
      </section>
    </HotelWrapper>
  );
};
export default PlaceDetails;
