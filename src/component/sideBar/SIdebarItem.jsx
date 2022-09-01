
import React from "react";
import { NavLink } from "react-router-dom";
import { ListHolder } from "./style";

const SidebarItem = ({ item, gap, color, marginbottom, marginTop }) => {
    return (
        <ListHolder
            gap={gap}
            color={color}
            marginbottom={marginbottom}
            marginTop={marginTop}
        >
            {item.map((items) => (
                <li key={item.name}>
                    <NavLink
                        to={items.link}
                        style={({ isActive }) => ({
                            backgroundColor: isActive ? "#fff" : "#E5E5E5",
                            color: isActive ? "#0047CC" : "#8B9298",
                            borderRadius: isActive ? "5px 0px 0px 5px" : "none",
                        })}
                    >
                        <div>
                            <img src={items.image} alt="" />
                        </div>
                        <p>{items.name}</p>
                    </NavLink>
                </li>
            ))}
        </ListHolder>
    );
};

export default SidebarItem;
