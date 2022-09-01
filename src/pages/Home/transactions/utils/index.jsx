
import AllTransaction from "../AllTransaction";
import SpendingDetails from "../Spending";

const transactionData = {
  SPENDINGACCOUNT: <SpendingDetails />,
  LINKEDACCOUNT: <h1>linked</h1>,
};

const transactionOptions = [
  { label: "Spending Account", value: "SPENDINGACCOUNT" },
  { label: "Linked Account", value: "LINKEDACCOUNT" },
];

const spendingData = {
  ALL: (<AllTransaction/>),
  CREDIT: <h1>CREDIT</h1>,
  DEBIT: <h1>DEBITT</h1>,
};

const spendingOptions = [
  { label: "All", value: "ALL" },
  { label: "Debit", value: "CREDIT" },
  { label: "Credit", value: "DEBIT" },
];

export { transactionData, transactionOptions, spendingData, spendingOptions };
