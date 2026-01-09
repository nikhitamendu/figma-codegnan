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
  const [showCards, setShowCards] = useState(true);

  const handleSend = (text) => {
    if (!text?.trim()) return;

    setMessages((prev) => [...prev, { id: Date.now(), text }]);
    setShowCards(false);
  };

  const handleNewChat = () => {
    setMessages([]);
    setShowCards(true);
  };

  return (
    <section className="min-h-full flex flex-col">
      <Topbar onMenuClick={openSidebar} onNewChat={handleNewChat} />

      <div className="flex-1 flex flex-col items-center justify-center px-6 bg-[#2A2A2A]">
        <div className="flex flex-col items-center gap-6 max-w-5xl w-full">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-[16px] font-medium text-white/70 text-center">
            Good Morning, John
          </p>

          <h1 className="text-[28px] font-bold text-white text-center">
            How can I assist you today?
          </h1>

          {showCards && (
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                w-full
                max-w-5xl
                mx-auto
              "
            >
              {/* CARD 1 */}
              <SuggestionCard
                icon={doc}
                title="Help me to create a personal branding and web page"
                onClick={() =>
                  navigate("ai-chat")
                }
                iconBg="#3982F4"
                iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
              />

              {/* CARD 2 */}
              <SuggestionCard
                icon={report}
                title="Write a report based on my website data"
                onClick={() =>
                  navigate("ai-chat")}
                iconBg="#BC0E88"
                iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
              />

              {/* CARD 3 — CENTER ONLY ON TABLET */}
              <div className="md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:block">
                <SuggestionCard
                  icon={content}
                  title="Write a tailored, engaging content, with a focus quality"
                  onClick={() =>
                    navigate("ai-chat")
                  }
                  iconBg="#EB950C"
                  iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <ChatInput onSend={handleSend} />

      <p className="text-center text-[14px] text-white/70 py-4 px-6">
        Centra may display inaccurate info, so please double check the response.{" "}
        <span className="font-bold text-white underline cursor-pointer">
          Your Privacy & Centra AI
        </span>
      </p>
    </section>
  );
}
