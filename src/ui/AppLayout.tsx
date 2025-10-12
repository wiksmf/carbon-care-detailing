import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Contact from "./Contact";

function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Contact />
      <Footer />
    </>
  );
}

export default AppLayout;
