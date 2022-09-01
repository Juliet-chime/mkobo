import styled from "styled-components";

export const StatItems = styled.div`
width: 300px;
height: 140px;
background: ${props => props.background};
border-radius: 5px;
padding: 10px 14px;
position: relative;
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
.stat-title-percent{
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    justify-content: space-between;
    .title{
        font-weight: 400;
font-size: 12px;
line-height: 24px;
color: ${props => props.index === 0 ? "rgba(255, 255, 255, 0.5)" : " rgba(38, 50, 56, 0.5)"};
    }
    .percent{
display: flex;
gap: 11px;
    }
    .tier{
        width: 73px;
height: 34px;
background: #FFFFFF;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
color: #0047CC
    }
}
.display-amount{
    display: flex;
    align-items: center;
    position: relative;
    gap: 10px;
    margin-left:10px;
    border-bottom: ${props => props.index === 0 ? "none" : "1px solid rgba(255, 255, 255, 0.3)"};
    .amount{
        display: flex;
        align-items: center;
        color: ${props => props.index === 0 ? "#fff" : "#141623"};
        p{
            font-weight: 700;
font-size: 12.14px;
position: absolute;
top: -10px;
left: -13px;
line-height: 20px;
letter-spacing: 0.5145px;
        }
        h5{
            font-weight: 700;
font-size: 36px;
line-height: 59px;
        }
    }
    .faeye{
        font-size: ${props => props.size};
        color: ${props => props.index === 0 ? "#fff" : "#141623"};
    }
}
.interest {
    font-weight: 600;
font-size: 12px;
line-height: 24px;
color: rgba(38, 50, 56, 0.5);
margin-top: 13px;
}

.spiral{
    position: absolute;
    right: 0;
    top:0;
}
`