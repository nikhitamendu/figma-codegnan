import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      {/* APP SHELL */}
      <div className="flex h-screen w-screen bg-[#121212] text-white">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN AREA */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}