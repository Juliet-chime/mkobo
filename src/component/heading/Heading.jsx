
import React from "react";
import { HeaderStyle } from "./style";

const Heading = ({ name, size, color }) => {
    return <HeaderStyle size={size} color={color} className="username">{name}</HeaderStyle>;
};

export default Heading;
