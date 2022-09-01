
import styled from "styled-components";

export const MyDashboardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 363px;
  margin-left: auto;
  padding: 0px 35px;
  @media (max-width: 768px) {
    margin: 0px;
    gap: 10px;
  }
  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #141623;
    @media (max-width: 768px) {
      font-size: 10px;
      line-height: 12px;
    }
  }
  .user-active {
    display: flex;
    align-items: center;
    gap: 20px;
    background: #0047cc;
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
    @media (max-width: 768px) {
      gap: 5px;
    }
    .user-name {
      display: flex;
      align-items: center;
      gap: 5px;
      h3 {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        @media (max-width: 768px) {
          font-size: 10px;
          line-height: 12px;
        }
      }
    }
  }
`;
