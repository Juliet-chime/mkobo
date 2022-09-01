
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import ActionItems from "../../component/actionitems/ActionItems";
import { actions } from "../../data";

const ActionSections = () => {
    return (
        <>
            <h3>Quick Actions</h3>
            <div className="action-wrapper">
                {actions.map((item, index) => (
                    <ActionItems key={index} item={item} />
                ))}
            </div>
            <div className="upgradeAccount">
                <h1>Upgrade your account</h1>
                <div>
                    <p>Upgrade your account to increase your account limits.</p>
                    <FaChevronRight />
                </div>
            </div>
        </>
    );
};

export default ActionSections;
