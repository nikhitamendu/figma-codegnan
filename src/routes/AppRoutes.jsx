import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "../pages/Chat";

export default function AppRoutes({openSidebar}) {
  return (
    <Routes>
      {/* DEFAULT ROUTE */}
      <Route path="/" element={<Navigate to="/ai-chat" replace />} />

      {/* MAIN NAV ROUTES */}
      <Route path="/ai-chat" element={<Chat />} />
      <Route path="/ai-video" element={<Chat />} />
      <Route path="/ai-image" element={<Chat />} />
      <Route path="/ai-dev" element={<Chat />} />

      {/* PREVIOUS CHAT ROUTES */}
      <Route path="/chat-1" element={<Chat />} />
      <Route path="/chat-2" element={<Chat />} />
      <Route path="/chat-3" element={<Chat />} />
      <Route path="/chat-4" element={<Chat />} />

      {/* UPGRADE */}
      <Route path="/upgrade" element={<Chat />} />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/ai-chat" replace />} />
    </Routes>
  );
}