import {
  AppContainer,
  FullBarContainer,
  RenderSidebar,
  RouteContainer,
  TopNavContainer,
} from "./style";
import Sidebar from "./component/sideBar/Sidebar";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./component/fullBar/TopNav";
import HomePage from "./pages/Home/Home";

function App() {
  const { active, setActive, screenSize, setscreenSize } = useAppContext();

  useEffect(() => {
    const handleResize = () => setscreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [screenSize]);

  return (
    <AppContainer>
      <BrowserRouter>
        <RenderSidebar active={active}>
          <Sidebar />
        </RenderSidebar>
        <FullBarContainer active={active}>
          <TopNavContainer>
            <div>
              <FaBars
                className="faBars"
                onClick={() => setActive((prev) => !prev)}
              />
            </div>
            <TopNav />
          </TopNavContainer>

          <RouteContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </RouteContainer>
        </FullBarContainer>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
