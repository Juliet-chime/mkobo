
import styled from "styled-components";

export const HorizontalTabWrapper = styled.div`
  margin: 0 auto 40px auto;
  width: 100%;
  ul {
    margin: 0;
    padding: 3px 10px;
    box-sizing: border-box;
    color: black;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    gap: 60px;
    cursor: pointer;
    overflow-x: auto;
    background: #eff2f8;
    border-radius: 10px;
    ::-webkit-scrollbar {
      visibility: hidden;
    }
    li {
      list-style: none;
      text-align: center;
      width: ${(props) => props.width};
      padding: 10px;
      color: #0047cc;
      &:hover {
        color: #cacaca;
      }

      &.activeTab {
        color: white;
        background: #0047cc;
        border-radius: 10px;
      }
    }
    @media (max-width: 576px) {
      gap: 5px;
      font-size: 10px;
    }
  }
`;
