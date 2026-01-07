import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen bg-[#1f1f1f] text-white">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}
