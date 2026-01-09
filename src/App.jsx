import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        {(openSidebar) => (
          <AppRoutes openSidebar={openSidebar} />
        )}
      </AppLayout>
    </BrowserRouter>
  );
}
