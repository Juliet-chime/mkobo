import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
`;
export const FullBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.active ? "177px" : "0px")};
  .faBars {
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
      display: block;
      margin-top: 10px;
      color: #0047cc;
      margin-left: 20px;
    }
  }
`;

export const SidebarWrapper = styled.div`
  padding: 30px 0px 0px 30px;
  position: relative;
  .fatimes {
    cursor: pointer;
    display: none;
    position: relative;
    left: 120px;
    padding: 3px;
    border-radius: 50%;
    background-color: #0047cc;
    color: white;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const RenderSidebar = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 1;
  overflow: hidden;
  height: 100vh;
  background: #e5e5e5;
  width: ${(props) => (props.active ? "180px" : "0px")};
`;
export const TopNavContainer = styled.div`
  display: flex;
  background: #e5e5e5;
  padding: 20px 0px;
  position: fixed;
  top: 0;
  right: 0;
  left: 180px;
  width: 88%;
  z-index: 999999;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    right: 0;
  }
`;
export const RouteContainer = styled.div`
  padding: 100px 40px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;
