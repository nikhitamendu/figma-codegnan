import SuperAIDropdown from "./SuperAIDropdown";
import newChatIcon from "../assets/icons/new-chat.svg";
import { menu } from "../assets/icons";

export default function Topbar({ onMenuClick, onNewChat }) {
  return (
    <header
      className="
        flex
        flex-col
        items-end
        gap-[10px]
        self-stretch
        px-6
        py-4
 bg-[#111111]
    border-b
    border-white/0       
        

      "
    >
      <div className="flex items-center gap-3 w-full justify-end">
        {/* Mobile menu */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-white/10"
        >
          <img src={menu} alt="menu" className="w-5 h-5 opacity-80" />
        </button>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* SuperAI */}
          <SuperAIDropdown />

          {/* ================= NEW CHAT BUTTON ================= */}
          <button
            onClick={onNewChat}   // ✅ THIS WAS MISSING
            className="
              flex
              items-center
              justify-center
              gap-2
              h-[40px]
              px-[24px]
              py-[10px]
              pl-[20px]
              rounded-lg
              bg-white
              transition-colors
              hover:bg-[#EBEBEB]
              active:bg-[#E0E0E0]
            "
          >
            {/* Icon */}
            <img
              src={newChatIcon}
              alt="New Chat"
              className="w-5 h-5"
            />

            {/* Text */}
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
      </div>
    </header>
  );
}
