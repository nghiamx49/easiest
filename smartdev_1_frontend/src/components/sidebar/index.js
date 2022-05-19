import React from "react";
import logo from "../../assests/img/logo.png";
import { SideBarContainer, SideBarLogo, SideBarUl } from "./style";
import LinkSideBar from "./components/LinkSideBar";
import {listLi , listLiAdmin} from "./contant"
import { connect } from "react-redux";
// sidebar cho admin
function SideBar({authenticateReducer}) {
  const { account } = authenticateReducer;
  return (
    <SideBarContainer>
      <SideBarLogo>
        <img src={logo} alt="" /> <p>Dashborad {account.role === "provider" ? "Provider" : "Admin"}</p>
      </SideBarLogo>
      <div>
        <SideBarUl>
          {account.role === "provider" && listLi.map((item, index) => (
            <LinkSideBar key={index} Icons={item.icons} text={item.text} link={item.link} />
          ))}
          {account.role === "admin" && listLiAdmin.map((item, index) => (
            <LinkSideBar key={index} Icons={item.icons} text={item.text} link={item.link} />
          ))}
        </SideBarUl>
      </div>
    </SideBarContainer>
  );
}

const mapStateToProps = (state) => {
  const { authenticateReducer } = state;
  return { authenticateReducer: authenticateReducer };
};

export default connect(mapStateToProps)(SideBar);

