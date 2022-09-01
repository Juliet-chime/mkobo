import styled from "styled-components";

export const TransactionItemWrapper = styled.div`
border-bottom: 1px solid #E7E7E7;
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px 0px;
.item-icon-text{
    display: flex;
    align-items: center;
    gap: 43px;
    @media (max-width: 768px) {
      gap: 15px;
    }
    .item-img-container{
    width: 48px;
    height: 48px;
    background: ${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}
h5{
    font-weight: 400;
font-size: 14px;
line-height: 22px;
color: rgba(38, 50, 56, 0.5);
@media (max-width: 768px) {
      max-width: 100px;
    }
}
h1{
    font-weight: 400;
font-size: 16px;
line-height: 25px;
color: #263238
}
}
.item-amount{
    display: flex;
    h5{
        font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #141623;
    }
    h1{
        font-weight: 700;
font-size: 18px;
line-height: 30px;
color: #141623;
    }
}
`