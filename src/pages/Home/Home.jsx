
import React from "react";
import Heading from "../../component/heading/Heading";
import ActionSections from "./ActionSections";
import StatSection from "./StatSection";
import { HomePageWrapper } from "./style";
import TransactionDetail from "./transactions/Transaction";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Heading color="#141623" size="22px" name="Hello Bennedict," />
      <div className="statSection">
        <StatSection />
      </div>

      <div className="overview">
        <div className="transactions">
          <TransactionDetail />
        </div>
        <div className="actions">
          <ActionSections />
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
