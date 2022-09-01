
import React, { useState } from "react";
import HorizontalTab from "../../../component/horizontalTab";
import { RangeStyle, SpendingTab } from "./style";
import { spendingData, spendingOptions } from "./utils";
import timeDate from "../../../component/assest/images/pictures/time-date.svg";
import rangeLine from "../../../component/assest/images/pictures/rangeline.svg";

const SpendingDetails = () => {
    const [spending, setSpending] = useState("ALL");

    const onChangeWalletTransaction = (value) => {
        console.log(value);
        const selectedValue = value;
        setSpending(selectedValue);
    };

    return (
        <div>
            <SpendingTab>
                <div className="spendingtab">
                    <HorizontalTab
                        options={spendingOptions}
                        onChange={onChangeWalletTransaction}
                        width="30%"
                    />
                </div>
                <div className="time">
                    <img src={timeDate} alt="" />
                </div>
            </SpendingTab>
            <RangeStyle>
                <img src={rangeLine} alt="" />
            </RangeStyle>
            <div>{spendingData[spending]}</div>
        </div>
    );
};

export default SpendingDetails;
