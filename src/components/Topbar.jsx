import SuperAIDropdown from "./SuperAIDropdown";
import newChatIcon from "../assets/icons/new-chat.svg";
import { menu } from "../assets/icons";

export default function Topbar({ onMenuClick, onNewChat }) {
  return (
    <header
      className="
        flex
        items-center
        justify-end
        w-full
        px-6
        py-4
        bg-[#111111]
        border-b
        border-white/10
      "
    >
      {/* ❌ MENU ICON COMPLETELY HIDDEN ON TABLET */}
      {/* Only keep logic if needed later for mobile */}
      <button
        onClick={onMenuClick}
        className="
          hidden
          lg:hidden
        "
      >
        <img src={menu} alt="menu" />
      </button>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-3">
        {/* SuperAI */}
        <SuperAIDropdown />

        {/* New Chat */}
        <button
          onClick={onNewChat}
          className="
            flex
            items-center
            gap-2
            h-[40px]
            px-[20px]
            rounded-lg
            bg-white
            transition-colors
            hover:bg-[#EBEBEB]
            active:bg-[#E0E0E0]
          "
        >
          <img
            src={newChatIcon}
            alt="New Chat"
            className="w-5 h-5"
          />

          <span
            className="
              text-[14px]
              font-bold
              tracking-[-0.28px]
              capitalize
              text-[#111111]
              whitespace-nowrap
            "
          >
            New Chat
          </span>
        </button>
      </div>
    </header>
  );
}
