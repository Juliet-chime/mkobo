import styled from "styled-components";

export const HomePageWrapper = styled.div`
  .statSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-bottom: 41px;
    border-bottom: 1px solid rgba(0, 71, 204, 0.2);
    @media (max-width: 768px) {
      display: block;
    }

    .chevronLeft {
      @media (max-width: 768px) {
        position: absolute;
        bottom: 45px;
        left: 40%;
      }
    }

    .chevronRight {
      @media (max-width: 768px) {
        margin-top: 10px;
        position: relative;
        left: 50%;
      }
    }

    .statPageWrapper {
      margin-top: 20px;
      display: flex;
      gap: 41px;
      @media (max-width: 768px) {
        flex-wrap: wrap;
      }
    }
  }

  .overview {
    display: flex;
    padding: 20px 0px;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
    }
    .transactions {
      flex: 2;
      padding: 0px 30px 0px 0px;
    }
    .actions {
      flex: 0.5;
      border-left: 1px solid rgba(0, 71, 204, 0.2);
      padding: 0px 30px;
      @media (max-width: 768px) {
        padding: 0px;
      }
      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #717171;
      }
      .action-wrapper {
        margin-top: 27px;
        display: grid;
        grid-template-columns: repeat(2, minmax(155px, 1fr));
        row-gap: 23px;
        column-gap: 30px;
        @media (max-width: 768px) {
          column-gap: 0px;
          row-gap: 5px;
        }
      }
    }
  }

  .upgradeAccount {
    border: solid;
    margin-top: 38px;
    background: #0047cc;
    box-shadow: 0px 4px 16px rgba(32, 32, 35, 0.1);
    border-radius: 4px;
    color: white;
    padding: 10px 16px;
    h1 {
      font-weight: 700;
      font-size: 14px;
      line-height: 23px;
    }
    div {
      display: flex;
      align-items: center;
      gap: 30px;
      p {
        font-weight: 400;
        font-size: 11px;
        line-height: 18px;

        color: #c7deff;
      }
    }
  }
`;
