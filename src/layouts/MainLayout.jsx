import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WaFloatingButton from "../components/WaFloatingButton";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <WaFloatingButton />

      <Navigation />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
