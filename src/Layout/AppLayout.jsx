import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Main from "../ui/Main";

function AppLayout() {
  return (
    <div>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
