import React from "react";
import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import TermModal from "../../pages/component/modal/TermModal";
import PrivacyModal from "../../pages/component/modal/PrivacyModal";

const Footer = () => (
  <Container>
    <div className="ui container center aligned">
      <div style={{color: "white"}}>©on the rock株式会社 All Right Reserved.
      </div>
      <div style={{margin: "1rem"}}>
        <TermModal trigger={<Trigger><FormattedMessage id="footer.term"/></Trigger>}/>

        <div style={{margin: "0 1rem 0 1rem", display: "inline", color: "white"}}>|</div>
        <PrivacyModal trigger={<Trigger><FormattedMessage id="footer.privacy"/></Trigger>}/>
      </div>
    </div>
  </Container>);

const Container = styled.div`
  background-color: #76BB31;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vh 0 1vh 0;
`;

const Trigger = styled.span`
  color: blue;
  cursor: pointer;
`;

export default Footer;
