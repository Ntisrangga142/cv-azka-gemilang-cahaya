import { Outlet } from "react-router";
import Navigation from "../components/Navigation";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
