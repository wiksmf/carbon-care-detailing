import { Outlet } from "react-router-dom";

import SideNavigation from "./SideNavigation";

function PrivateLayout() {
  return (
    <>
      <div className="grid min-h-screen grid-cols-[16rem_1fr] overflow-hidden">
        <SideNavigation />
        <div className="max-h-screen overflow-y-auto p-5 px-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PrivateLayout;
