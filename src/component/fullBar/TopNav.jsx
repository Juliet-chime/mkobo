
import React from "react";
import { FaChevronDown, FaRegBell } from "react-icons/fa";
import person from "../assest/images/icons/person.svg";
import { MyDashboardContainer } from "./style";

const TopNav = () => {
  return (
    <MyDashboardContainer>
      <h1>MY DASHBOARD</h1>
      <div className="user-active">
        <FaRegBell />
        <img src={person} alt="" />
        <div className="user-name">
          <h3>Benedict Ulinfo</h3>
          <FaChevronDown />
        </div>
      </div>
    </MyDashboardContainer>
  );
};

export default TopNav;
