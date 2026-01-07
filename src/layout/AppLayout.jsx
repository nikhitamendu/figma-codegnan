import Sidebar from "../components/Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="flex h-screen w-full bg-[#121212]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-[#121212]">
        {children}
      </div>
    </div>
  );
}
