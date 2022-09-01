
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StatCard from "../../component/statCard/StatCard";
import { statData } from "../../data";

const StatSection = () => {
    return (
        <>
            <FaChevronLeft className="chevronLeft" />
            <div className="statPageWrapper">
                {statData.map((item, index) => (
                    <StatCard key={item.id} item={item} index={index} />
                ))}
            </div>
            <FaChevronRight className="chevronRight" />
        </>
    );
};

export default StatSection;
