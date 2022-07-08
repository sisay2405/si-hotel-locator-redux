import React from "react";
import styled from "styled-components";

const FooterWrapperm = styled.div`
  color: orange;
  text-align: center;
`;

const Announcer = ({ message }) => {
  return <FooterWrapperm>{message}</FooterWrapperm>;
};

export default Announcer;
