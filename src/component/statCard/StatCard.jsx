
import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import range from "../assest/images/icons/range.svg";
import { StatItems } from "./style";
import spiral from "../assest/images/pictures/spiral.svg";

const StatCard = ({ item, index }) => {
  return (
    <StatItems size={item.eyeSize} background={item.bg} index={index}>
      <div className="stat-title-percent">
        {item.title && <h5 className="title">{item.title}</h5>}
        {item.percent && (
          <div className="percent">
            <h5>{item.percent}% Achieved</h5>
            <img src={range} alt="" />
          </div>
        )}
        {item.tier && <h5 className="tier">{item.tier}</h5>}
      </div>
      <div className="display-amount">
        {item.amount && (
          <div className="amount">
            <p>{item.currency}</p>
            <h5>{item.amount}</h5>
          </div>
        )}
        <FaEyeSlash className="faeye" />
      </div>
      <div>
        {item.interest && (
          <h5 className="interest">
            Interest as at today: :{item.currency}
            {item.interest}
          </h5>
        )}
      </div>
      <img src={spiral} alt="" className="spiral" />
    </StatItems>
  );
};

export default StatCard;
