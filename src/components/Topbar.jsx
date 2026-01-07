import SuperAIDropdown from "./SuperAIDropdown";
import { menu, plus } from "../assets/icons";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-[#141414] border-b border-[#2a2a2a]">
      
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded hover:bg-[#2a2a2a]"
      >
        <img src={menu} alt="menu" className="w-5 h-5" />
      </button>

      {/* Right side */}
      <div className="flex items-center gap-3 ml-auto">
        <SuperAIDropdown />

        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
          <img src={plus} alt="new chat" className="w-4 h-4" />
          <span className="hidden sm:block">New Chat</span>
        </button>
      </div>
    </header>
  );
}
