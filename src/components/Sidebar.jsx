import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

/* ICONS & IMAGES */
import logo from "../assets/Logo.png";

import chatIcon from "../assets/icons/chat.svg";
import videoIcon from "../assets/icons/video.svg";
import imageIcon from "../assets/icons/image.svg";
import devIcon from "../assets/icons/dev.svg";

import toggleIcon from "../assets/icons/toggle.png";
import chatItemIcon from "../assets/nav/chat-item.svg";
import moreIcon from "../assets/nav/more.svg";
import upgradeIcon from "../assets/nav/upgrade.svg";
import userImg from "../assets/nav/user.png";

/* MAIN MENU */
const menuItems = [
  { label: "AI Chat", path: "/ai-chat", icon: chatIcon },
  { label: "AI Video", path: "/ai-video", icon: videoIcon },
  { label: "AI Image", path: "/ai-image", icon: imageIcon },
  { label: "AI Development", path: "/ai-dev", icon: devIcon },
];

/* PREVIOUS CHATS */
const previousChats = [
  { label: "Describe the benefits for a...", path: "/chat-1" },
  { label: "Generate a list current we...", path: "/chat-2" },
  { label: "Condense the following se...", path: "/chat-3" },
  { label: "Describe what post moder...", path: "/chat-4" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <aside
      className={`
        h-screen
        bg-[#121212]
        flex
        transition-all
        duration-300
        ${collapsed ? "w-[52px] justify-center" : "w-[300px]"}
      `}
    >
      {/* ================= COLLAPSED SIDEBAR ================= */}
      {collapsed && (
        <div
          className="
            inline-flex
            h-[900px]
            px-[16px]
            py-[24px]
            flex-col
            items-center
            gap-[30px]
            bg-[#171717]
            rounded-[8px]
          "
        >
          {/* Toggle */}
          <button
            onClick={() => setCollapsed(false)}
            className="w-[40px] h-[32px] flex items-center justify-center rounded-lg bg-[#171717]"
          >
            <img src={toggleIcon} className="w-4 h-4" />
          </button>

          {/* MAIN MENU ICONS */}
          <div className="flex flex-col gap-[12px]">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  h-[48px]
                  w-[48px]
                  items-center
                  justify-center
                  rounded-lg
                 
                  transition-colors
                  ${
                    isActive
                      ? "bg-white/10 "
                      : "bg-transparent "
                  }
                `
                }
              >
                {({ isActive }) => (
                  <img
                    src={item.icon}
                    className={`w-[15px] h-[14px] ${
                      isActive ? "opacity-100" : "opacity-60"
                    }`}
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* Divider */}
          <div className="w-[52px] h-[1px] bg-[#595959]" />

          {/* PREVIOUS CHAT ICONS */}
          <div className="flex flex-col gap-[12px] self-stretch">
            {previousChats.map((chat, i) => (
              <NavLink
                key={i}
                to={chat.path}
                className={({ isActive }) =>
                  `
                  flex
                  px-[14px]
                  py-[12px]
                  items-center
                  justify-center
                  rounded-[12px]
              
                  transition-colors
                  ${
                    isActive
                      ? "bg-white/10 "
                      : "bg-transparent "
                  }
                `
                }
              >
                <img
                  src={chatItemIcon}
                  className="w-5 h-5 opacity-70"
                />
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* ================= EXPANDED SIDEBAR ================= */}
      {!collapsed && (
        <div className="flex flex-col w-full p-4 gap-5 items-start self-stretch">
          {/* HEADER */}
          <div className="flex items-center justify-between self-stretch">
            <img
              src={logo}
              alt="codegnan"
              className="w-[129px] h-[34px] object-contain"
            />

            <button
              onClick={() => setCollapsed(true)}
              className="w-[40px] h-[32px] flex items-center justify-center rounded-lg bg-[#171717]"
            >
              <img src={toggleIcon} className="w-5 h-5" />
            </button>
          </div>

          {/* GENERAL */}
          <p className="text-[14px] font-normal leading-[21px] capitalize text-white/30">
            General
          </p>

          {/* MAIN NAV */}
          <nav className="flex flex-col gap-3 self-stretch">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `
                  flex
                  h-12
                  px-4
                  items-center
                  gap-3
                  rounded-lg
                  border  
                  transition-colors
                  ${
                    isActive
                      ? "bg-white/10 border-white/10"
                      : "border-transparent"
                  }
                `
                }
              >
                <img
                  src={item.icon}
                  className="w-5 h-5 opacity-70"
                />
                <span className="text-[16px] font-medium text-white/80">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>

          {/* ================= PREVIOUS CHAT ================= */}
          <div className="flex flex-col gap-3 self-stretch mt-2">
            <p className="text-[14px] font-normal leading-[21px] capitalize text-white/30">
              Previous Chat
            </p>

            <nav className="flex flex-col gap-3 self-stretch">
              {previousChats.map((chat) => (
                <NavLink
                  key={chat.path}
                  to={chat.path}
                  end
                  className={({ isActive }) =>
                    `
                    flex
                    h-14
                    px-4
                    py-3
                    items-center
                    gap-2
                    self-stretch
                    rounded-xl
                    border
                    transition-colors
                    ${
                      isActive
                        ? "bg-white/10 border-white/10"
                        : "bg-transparent border-white/10"
                    }
                  `
                  }
                >
                  <img
                    src={chatItemIcon}
                    className="w-5 h-5 opacity-70"
                  />
                  <span className="flex-1 truncate text-[16px] font-medium text-white/70">
                    {chat.label}
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* PUSH */}
          <div className="flex-1 w-full" />

          {/* ================= UPGRADE ================= */}
          <div className="flex flex-col items-end gap-5 p-4 self-stretch rounded-xl border border-white/10 bg-[linear-gradient(75deg,#4956F4_47.29%,#2A328E_78.39%)]">
            <div className="flex items-center gap-3 self-stretch">
              <div className="p-[10px] bg-white rounded-full">
                <img src={upgradeIcon} className="w-5 h-5" />
              </div>

              <div>
                <p className="text-white text-[14px] font-bold">
                  Upgrade Plan
                </p>
                <p className="text-white/70 text-[12px]">
                  More access to models
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/upgrade")}
              className="w-full p-[10px] rounded-lg bg-white text-[12px] font-semibold text-[#111]"
            >
              Upgrade Plan
            </button>
          </div>

          {/* ================= USER ================= */}
          <div className="flex items-center justify-between self-stretch px-3 pt-3 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-[44px] h-[44px] p-[2px] border border-[#BCBCBC] rounded-full">
                <img
                  src={userImg}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-white text-[16px] font-bold capitalize">
                  Nutan Sai Nandam
                </p>
                <p className="text-white/60 text-[12px]">
                  nutansainandam.com
                </p>
              </div>
            </div>

            <img src={moreIcon} className="w-5 h-5 text-[#7C7D83]" />
          </div>
        </div>
      )}
    </aside>
  );
}