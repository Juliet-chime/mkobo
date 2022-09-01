
import React, { useState } from "react";
import HorizontalTab from "../../../component/horizontalTab";
import { transactionData, transactionOptions } from "./utils";

const TransactionDetail = () => {
    const [transactions, setTransactions] = useState("SPENDINGACCOUNT");

    const onChangeWalletTransaction = (value) => {
        console.log(value);
        const selectedValue = value;
        setTransactions(selectedValue);
    };

    return (
        <div>
            <HorizontalTab
                options={transactionOptions}
                onChange={onChangeWalletTransaction}
                width="100%"
            />
            <div>{transactionData[transactions]}</div>
        </div>
    );
};

export default TransactionDetail;
