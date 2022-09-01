
import React from "react";
import { useAppContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import { SidebarWrapper } from "../../style";
import { helpSupport, sideBarMenuItem } from ".";
import logo from "../assest/images/pictures/mkoboLogo.svg";
import SidebarItem from "./SIdebarItem";
import { HelpSupport } from "./style";

const Sidebar = () => {
    const { active, setActive, screenSize } = useAppContext();

    const handleClose = () => {
        if (active && screenSize <= 900) {
            setActive(false);
        }
    };
    console.log(sideBarMenuItem);
    return (
        <div>
            {active && (
                <SidebarWrapper>
                    <FaTimes onClick={handleClose} className="fatimes" />
                    <img src={logo} alt="" />
                    <SidebarItem item={sideBarMenuItem} />
                    <div>
                        <HelpSupport>Help & Support</HelpSupport>
                        <SidebarItem
                            item={helpSupport}
                            gap="5px"
                            color="#0047CC"
                            marginbottom="-15px"
                            marginTop="0px"
                        />
                    </div>
                </SidebarWrapper>
            )}
        </div>
    );
};

export default Sidebar;
