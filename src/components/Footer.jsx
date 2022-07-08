import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  top: 930px;
  width: 100%;
  background-color: #344;
  color: orange;
  padding: 1rem 0;
  text-align: center;

`;

const Footer = () => {
  return (
    <FooterWrapper>Sisay A & Abel © {new Date().getFullYear()}</FooterWrapper>
  );
};

export default Footer;
