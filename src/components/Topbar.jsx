import SuperAIDropdown from "./SuperAIDropdown";
import newChatIcon from "../assets/icons/new-chat.svg";
import toggleIcon from "../assets/icons/toggle.png";

export default function Topbar({ onMenuClick, onNewChat }) {
  return (
    <header
      className="
        flex
        items-center
        justify-end

        w-full
        px-3
        sm:px-4
        md:px-6

        py-3
        md:py-4

        bg-[#111111]
        border-b
        border-white/10
      "
    >
      {/* TOGGLE (Mobile + Tablet) */}
      <button
        onClick={onMenuClick}
        className="
         lg:hidden   /* 👈 show on mobile + tablet */
          flex
          items-center
          justify-center
          w-9
          h-9
          rounded-md
          hover:bg-white/10
          transition
        "
      >
        <img
          src={toggleIcon}
          alt="toggle"
          className="w-5 h-5"
        />
      </button>

      {/* RIGHT ACTIONS */}
      <div className=" ml-auto flex items-center gap-2 sm:gap-3">
        {/* SuperAI */}
        <SuperAIDropdown />

        {/* New Chat */}
        <button
          onClick={onNewChat}
          className="
            flex
            items-center
            gap-2

            h-9
            sm:h-[40px]

            px-3
            sm:px-5

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
            className="w-4 h-4 sm:w-5 sm:h-5"
          />

          <span
            className="
              text-[13px]
              sm:text-[14px]
              font-bold
              tracking-tight
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
