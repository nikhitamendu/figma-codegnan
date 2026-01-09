import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "../pages/Chat";

export default function AppRoutes({ openSidebar }) {
  return (
    <Routes>
      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/ai-chat" replace />} />

      {/* MAIN NAV */}
      <Route
        path="/ai-chat"
        element={<Chat openSidebar={openSidebar} />}
      />
      <Route
        path="/ai-video"
        element={<Chat openSidebar={openSidebar} />}
      />
      <Route
        path="/ai-image"
        element={<Chat openSidebar={openSidebar} />}
      />
      <Route
        path="/ai-dev"
        element={<Chat openSidebar={openSidebar} />}
      />

      {/* PREVIOUS CHATS */}
      <Route
        path="/chat-1"
        element={<Chat openSidebar={openSidebar} />}
      />
      <Route
        path="/chat-2"
        element={<Chat openSidebar={openSidebar} />}
      />
      <Route
        path="/chat-3"
        element={<Chat openSidebar={openSidebar} />}
      />
      <Route
        path="/chat-4"
        element={<Chat openSidebar={openSidebar} />}
      />

      {/* UPGRADE */}
      <Route
        path="/upgrade"
        element={<Chat openSidebar={openSidebar} />}
      />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/ai-chat" replace />} />
    </Routes>
  );
}
