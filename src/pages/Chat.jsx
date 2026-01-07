import { useState } from "react";
import Topbar from "../components/Topbar";
import SuggestionCard from "../components/SuggestionCard";
import ChatInput from "../components/ChatInput";

import { doc, report, content } from "../assets/icons";
import avatar from "../assets/avatar.png";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [showCards, setShowCards] = useState(true);

  const handleSend = (text) => {
    if (!text?.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text },
    ]);
  };

  const handleNewChat = () => {
    setMessages([]);
    setShowCards(true);
  };

  return (
    // ⛔ NO padding / NO background here
    <section className="flex flex-col flex-1 self-stretch">
      {/* ================= TOP BAR ================= */}
      <Topbar onNewChat={handleNewChat} />

      {/* ================= MAIN CONTENT (THIS gets bg) ================= */}
      <div
        className="
          flex
          flex-col
          flex-1
          self-stretch
          items-center
          justify-end
          px-[30px]
          bg-[#2A2A2A]
        "
      >
        {/* ================= MIDDLE SECTION ================= */}
        <div className="flex flex-col items-center gap-[25px] self-stretch">
          {/* Avatar */}
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Greeting */}
          <p className="text-[16px] font-medium tracking-[-0.32px] capitalize text-white/70 text-center self-stretch">
            Good Morning, John
          </p>

          {/* Assistant text */}
          <h1 className="text-[28px] font-bold tracking-[-0.56px]  text-white text-center self-stretch">
            How can I assist you today?
          </h1>

          {/* 42px gap */}
          <div className="h-[42px]" />

          {/* ================= SUGGESTION CARDS ================= */}
          {showCards && (
            <div className="flex flex-wrap justify-center items-center content-center gap-6 self-stretch">
              <SuggestionCard
                icon={doc}
                title="Help me to create a personal branding and web page"
                onClick={() =>
                  handleSend(
                    "Help me to create a personal branding and web page"
                  )
                }
                iconBg="#3982F4"
                iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
              />

              <SuggestionCard
                icon={report}
                title="Write a report based on my website data"
                onClick={() =>
                  handleSend(
                    "Write a report based on my website data"
                  )
                }
                iconBg="#BC0E88"
                iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
              />

              <SuggestionCard
                icon={content}
                title="Write a tailored, engaging content, with a focus quality"
                onClick={() =>
                  handleSend(
                    "Write a tailored, engaging content, with a focus quality"
                  )
                }
                iconBg="#EB950C"
                iconShadow="-4px -4px 4px rgba(255,255,255,0.15) inset, 4px 4px 4px rgba(255,255,255,0.15) inset"
              />
            </div>
          )}
        </div>

        {/* ================= GAP BEFORE CHAT INPUT ================= */}
        <div className="h-[100px]" />

        {/* ================= CHAT INPUT ================= */}
        <div className="flex justify-center w-full">
          <ChatInput onSend={handleSend} />
        </div>

        {/* ================= GAP BEFORE DISCLAIMER ================= */}
        <div className="h-[24px]" />

        {/* ================= DISCLAIMER ================= */}
        <p className="self-stretch text-center text-[14px] font-medium leading-[21px] text-white/70">
          Centra may display inaccurate info, so please double check the response.{" "}
          <span className="font-bold text-white underline capitalize cursor-pointer">
            Your Privacy & Centra AI
          </span>
        </p>
      </div>
    </section>
  );
}
