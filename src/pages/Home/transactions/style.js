
import styled from "styled-components";

export const SpendingTab = styled.div`
  display: flex;
  justify-content: space-between;
  .spendingtab {
    width: 400px;
  }
  .time {
    margin-top: 10px;
  }
`;

export const RangeStyle = styled.div`
  img {
    width: 100%;
  }
`;

export const TransactionItemContianer = styled.div`
border-left: 1px solid rgba(0, 71, 204, 0.2);
padding: 0px 63px;
margin-left: 15px;
@media (max-width: 768px) {
      padding: 15px;
    }
`
export const ViewTransaction = styled.div`
display: flex;
justify-content: center;
margin-top: 35px;
button{
    background: #0047CC;
border-radius: 5px;
font-weight: 400;
font-size: 16px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
width: 325px;
height: 58px;
border: none;
}
`
export const TotalWrapperContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const TotalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .itemSquare{
  width: 9px;
  height: 9px;
  background: ${props => props.bg};
  }
  h1{
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: ${props => props.color};
}
`