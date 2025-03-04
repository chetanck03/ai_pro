import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import AnimatedBackground from "../ui/animated-background";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}