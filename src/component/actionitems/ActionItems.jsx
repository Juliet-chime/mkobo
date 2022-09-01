
import React from "react";
import { NavLink } from "react-router-dom";
import { ActionItem } from "./style";

const ActionItems = ({ item }) => {
  return (
    <ActionItem key={item.name}>
      <NavLink to={item.link}>
        <img src={item.image} alt="" />
        <h3>{item.name}</h3>
      </NavLink>
    </ActionItem>
  );
};

export default ActionItems;
