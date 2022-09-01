import sendMoney from "./component/assest/images/icons/sendMoney.svg";
import fundAccount from "./component/assest/images/icons/fundAccount.svg";
import buyAirtime from "./component/assest/images/icons/buyAirtime.svg";
import money from "./component/assest/images/icons/money.svg";
import saveMoney from "./component/assest/images/icons/saveMoney.svg";
import cashBack from "./component/assest/images/icons/cashBack.svg";
import netflix from "./component/assest/images/icons/netlify.svg";
import greenArrow from "./component/assest/images/icons/greenArrow.svg";
import redArrow from "./component/assest/images/icons/redArrow.svg";

export const statData = [
  {
    id: 1,
    title: "Available Balance",
    tier: "Tier 1",
    currency: "₦",
    amount: "6,390.68",
    eyeSize: "26px",
    bg: "linear-gradient(89.79deg, #4181F9 1.82%, #0047CC 100%)",
  },
  {
    id: 2,
    title: "Car Purchase Plan",
    percent: 75,
    currency: "₦",
    amount: "6,390.68",
    interest: "20,000",
    eyeSize: "13px",
    bg: "linear-gradient(89.79deg, #D4D4FF 1.82%, #D4D4FF 100%)",
  },
  {
    id: 3,
    title: "Birthday Plan",
    percent: 75,
    currency: "₦",
    amount: "6,390.68",
    interest: "20,000",
    eyeSize: "13px",
    bg: "linear-gradient(89.79deg, #FFD4DF 1.82%, #FFD4DF 100%)",
  },
];

export const actions = [
  {
    name: "Send Money",
    link: "/sendMoney",
    image: sendMoney,
  },
  {
    name: "Fund Account",
    link: "/fundAccount",
    image: fundAccount,
  },
  {
    name: "Buy Airtime",
    link: "/buyairtime",
    image: buyAirtime,
  },
  {
    name: "Pay Bills",
    link: "/paybills",
    image: money,
  },
  {
    name: "Save Money",
    link: "/save Money",
    image: saveMoney,
  },
  {
    name: "cashback",
    link: "/cashback",
    image: cashBack,
  },
];

export const spendingItem = [
  {
    image: netflix,
    name: "Paid for",
    item: "Netflix",
    currency: "₦",
    amount: "-3,000.00",
    bg:"rgba(214, 216, 211, 0.3)"
  },
  {
    image: greenArrow,
    name: "Received From",
    item: "Ayoola Adeniji",
    currency: "₦",
    amount: "+3,000.00",
    bg:"#D9FFEF"
  },
  {
    image: redArrow,
    name: "Sent  Money with Mtag",
    item: "Car Repair",
    currency: "₦",
    amount: "-3,000.00",
    bg:"#FDCFE7"
  },
];
