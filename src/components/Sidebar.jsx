import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/Logo.png";
import { chat, video, image, dev } from "../assets/icons";

import toggleIcon from "../assets/icons/toggle.png";
import chatItemIcon from "../assets/nav/chat-item.svg";
import moreIcon from "../assets/nav/more.svg";
import upgradeIcon from "../assets/nav/upgrade.svg";
import userImg from "../assets/nav/user.png";

const menuItems = [
  { label: "AI Chat", path: "/ai-chat", icon: chat },
  { label: "AI Video", path: "/ai-video", icon: video },
  { label: "AI Image", path: "/ai-image", icon: image },
  { label: "AI Development", path: "/ai-dev", icon: dev },
];

const previousChats = [
  { label: "Describe the benefits for a...", path: "/chat-1" },
  { label: "Generate a list current we...", path: "/chat-2" },
  { label: "Condense the following se...", path: "/chat-3" },
  { label: "Describe what post moder...", path: "/chat-4" },
];

export default function Sidebar({ isOpen, isTablet, onClose }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // ❗ Collapse ONLY on desktop
  const showCollapsed = !isTablet && collapsed;

  return (
    <aside
  className={`
    fixed lg:static
    z-30
    h-screen
    bg-[#121212]

    transform transition-transform duration-300

    ${
      isTablet
        ? isOpen
          ? "translate-x-0"
          : "-translate-x-full"
        : "translate-x-0"
    }

    ${
      isTablet
        ? "w-full sm:w-[260px] md:w-[300px]"   /* 🔥 mobile full, tablet normal */
        : showCollapsed
          ? "w-[60px]"
          : "w-[260px] md:w-[300px]"
    }
  `}
>


      {/* ================= ICON SIDEBAR (DESKTOP ONLY) ================= */}
      {showCollapsed && (
        <div className="flex flex-col items-center py-5 gap-6 w-full bg-[#171717]">

          <button
            onClick={() => setCollapsed(false)}
            className="w-9 h-8 flex items-center justify-center rounded-lg bg-[#1f1f1f]"
          >
            <img src={toggleIcon} className="w-4 h-4" />
          </button>

          <div className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `w-10 h-10 flex items-center justify-center rounded-lg
                  ${isActive ? "bg-white/10" : ""}`
                }
              >
                <img src={item.icon} className="w-4 h-4 opacity-70" />
              </NavLink>
            ))}
          </div>

          <div className="w-full h-px bg-white/10" />

          <div className="flex flex-col gap-3">
            {previousChats.map((chat, i) => (
              <NavLink
                key={i}
                to={chat.path}
                className="w-10 h-10 flex items-center justify-center rounded-lg"
              >
                <img
                  src={chatItemIcon}
                  className="w-5 h-5 opacity-60"
                />
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* ================= FULL SIDEBAR ================= */}
      {/* ================= FULL SIDEBAR ================= */}
{!showCollapsed && (
  <div className="flex flex-col w-full h-full p-3 md:p-4 gap-4">

    {/* HEADER */}
    <div className="flex items-center justify-between">
      <img src={logo} className="w-[110px] md:w-[129px]" />

      <div className="flex gap-2">
        {/* Close button (mobile) */}
        {isTablet && (
          <button
            onClick={onClose}
            className="w-9 h-8 rounded-lg bg-[#171717]"
          >
            ✕
          </button>
        )}

        {/* Collapse (desktop only) */}
        {!isTablet && (
          <button
            onClick={() => setCollapsed(true)}
            className="w-9 h-8 flex items-center justify-center rounded-lg bg-[#171717]"
          >
            <img src={toggleIcon} className="w-4 h-4" alt="close sidebar" />
          </button>
        )}
      </div>
    </div>

    <p className="text-xs text-white/40">General</p>

    {/* MAIN NAV */}
    <nav className="flex flex-col gap-2">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm
            ${
              isActive
                ? "bg-white/10"
                : "hover:bg-white/5"
            }`
          }
        >
          <img src={item.icon} className="w-5 h-5 opacity-70" />
          <span className="text-white/80">{item.label}</span>
        </NavLink>
      ))}
    </nav>

    {/* PREVIOUS */}
    <div className="flex flex-col gap-2 mt-2">
      <p className="text-xs text-white/40">
        Previous Chat
      </p>

      {previousChats.map((chat) => (
        <NavLink
          key={chat.path}
          to={chat.path}
          end
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
        >
          <img
            src={chatItemIcon}
            className="w-5 h-5 opacity-60"
          />
          <span className="truncate text-sm text-white/70">
            {chat.label}
          </span>
        </NavLink>
      ))}
    </div>

    {/* 🔥 PUSH BOTH TO BOTTOM */}
    <div className="mt-auto space-y-4">

      {/* UPGRADE */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-[#4956F4] to-[#2A328E]">
        <div className="flex gap-3 mb-3">
          <div className="p-2 bg-white rounded-full">
            <img src={upgradeIcon} className="w-4 h-4" />
          </div>
          <div>
            <p className="text-white text-sm font-bold">
              Upgrade Plan
            </p>
            <p className="text-white/70 text-xs">
              More access to models
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/upgrade")}
          className="w-full py-2 rounded-lg bg-white text-xs text-black font-semibold"
        >
          Upgrade Plan
        </button>
      </div>

      {/* USER */}
      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center gap-3">
          <img
            src={userImg}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-white text-sm font-bold">
              Nutan Sai
            </p>
            <p className="text-white/60 text-xs">
              nutansainandam.com
            </p>
          </div>
        </div>

        <img
          src={moreIcon}
          className="w-5 h-5 opacity-60"
        />
      </div>

    </div>
  </div>
)}

    </aside>
  );
}
