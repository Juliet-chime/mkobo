
import styled from "styled-components";

export const ListHolder = styled.ul`
  padding: 0;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "20px")};
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: ${(props) => (props.gap ? props.gap : "20px")};
    width: 100%;
    line-height: 24px;
    padding: 0px 10px;
    margin-bottom: ${(props) =>
        props.marginbottom ? props.marginbottom : "5px"};
    color: ${(props) => (props.color ? props.color : "#8B9298")};
  }
  li {
    list-style: none;
  }
`;

export const HelpSupport = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  color: #000000;
`;
