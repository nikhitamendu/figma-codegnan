import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import SuggestionCard from "../components/SuggestionCard";
import ChatInput from "../components/ChatInput";

import { doc, report, content } from "../assets/icons";
import avatar from "../assets/avatar.png";

export default function Chat({ openSidebar }) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    if (!text?.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text },
    ]);
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <section className="min-h-full flex flex-col overflow-y-auto">
      <Topbar
        onMenuClick={openSidebar}
        onNewChat={handleNewChat}
      />

      {/* MAIN */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-6 gap-2 sm:gap-6 bg-[#2A2A2A]">
        <div className="flex flex-col items-center gap-5 sm:gap-6 max-w-5xl w-full">

          {/* Avatar */}
          <div className="w-24 h-24 sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden shadow">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Greeting */}
          <p className="text-sm sm:text-base font-medium text-white/70 text-center">
            Good Morning, John
          </p>

          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-[28px] font-bold text-white text-center">
            How can I assist you today?
          </h1>

          {/* CARDS (ALWAYS VISIBLE) */}
          <div
            className="
              grid
              grid-cols-2
             sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              sm:gap-4
              w-full
              max-w-5xl
              mx-auto
            "
          >
            <SuggestionCard
              icon={doc}
              title="Help me to create a personal branding and web page"
              onClick={() => navigate("ai-chat")}
              iconBg="#3982F4"
              iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
            />

            <SuggestionCard
              icon={report}
              title="Write a report based on my website data"
              onClick={() => navigate("ai-chat")}
              iconBg="#BC0E88"
              iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
            />

            <div className="col-span-2 sm:col-span-1 md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:block">
              <SuggestionCard
                icon={content}
                title="Write a tailored, engaging content, with a focus quality"
                onClick={() => navigate("ai-chat")}
                iconBg="#EB950C"
                iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
              />
            </div>
          </div>
        </div>
      </div>

      <ChatInput onSend={handleSend} />

      <p className="text-center text-xs sm:text-sm text-white/70 py-3 px-4 sm:px-6">
        Centra may display inaccurate info, so please double check the response.{" "}
        <span className="font-bold text-white underline cursor-pointer">
          Your Privacy & Centra AI
        </span>
      </p>
    </section>
  );
}
