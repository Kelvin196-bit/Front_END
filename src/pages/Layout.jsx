import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="h-auto bg-light-gray-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
