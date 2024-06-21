import { BrowserRouter, Route, Routes } from "react-router-dom";

import All from "./pages/All";
import Assigned from "./pages/Assigned";
import Completed from "./pages/Completed";
import Important from "./pages/Important";
import MyDay from "./pages/MyDay";
import Tasks from "./pages/Tasks";
import AppLayout from "./Layout/AppLayout";
import Login from "./pages/Login";
import Planned from "./pages/Planned";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route pathe="/" element={<AppLayout />}>
            <Route index element={<MyDay />} />
            <Route path="myday" element={<MyDay />} />
            <Route path="important" element={<Important />} />
            <Route path="assigned" element={<Assigned />} />
            <Route path="planned" element={<Planned />} />
            <Route path="completed" element={<Completed />} />
            <Route path="all" element={<All />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
