import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1f1f1f] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 min-w-0">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}
