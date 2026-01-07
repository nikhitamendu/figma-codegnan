import { useState } from "react";
import Topbar from "../components/Topbar";
import SuggestionCard from "../components/SuggestionCard";
import ChatInput from "../components/ChatInput";

import { doc, report, content } from "../assets/icons";
import avatar from "../assets/avatar.png";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    if (!text?.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text },
    ]);
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <Topbar />

      <div className="flex-1 flex flex-col px-4">
        {/* ================= CENTER AREA ================= */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Avatar with glow */}
          <div className="relative mb-3">
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-pink-500 to-blue-500 rounded-full opacity-50" />
            <img
              src={avatar}
              alt="AI Avatar"
              className="relative w-20 h-20 rounded-full"
            />
          </div>

          <h1 className="text-2xl font-semibold mb-6 text-center">
            How can I assist you today?
          </h1>

          {/* ================= SUGGESTION CARDS ================= */}
          {messages.length === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
              <SuggestionCard
                icon={doc}
                title="Help me create a branding page"
                onClick={() =>
                  handleSend(
                    "Help me create a personal branding and web page"
                  )
                }
              />
              <SuggestionCard
                icon={report}
                title="Write a report from data"
                onClick={() =>
                  handleSend(
                    "Write a report based on my website data"
                  )
                }
              />
              <SuggestionCard
                icon={content}
                title="Write engaging content"
                onClick={() =>
                  handleSend(
                    "Write tailored, engaging content with a focus on quality"
                  )
                }
              />
            </div>
          )}
        </div>

        {/* ================= CHAT INPUT ================= */}
        <div className="pb-6 flex justify-center">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
