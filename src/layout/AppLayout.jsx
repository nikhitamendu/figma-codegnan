import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const tablet = window.innerWidth < 1024;
      setIsTablet(tablet);

      if (!tablet) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-[#121212]">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <Sidebar
          isOpen={sidebarOpen}
          isTablet={isTablet}
          onClose={() => setSidebarOpen(false)}
        />

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto bg-[#2A2A2A]">
          {typeof children === "function"
            ? children(() => setSidebarOpen(true))
            : children}
        </main>
      </div>

      {/* OVERLAY */}
      {isTablet && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm"
        />
      )}
    </div>
  );
}