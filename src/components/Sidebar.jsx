import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";

/* ICONS & IMAGES */
import logo from "../assets/Logo.png";

import chatIcon from "../assets/icons/chat.svg";
import videoIcon from "../assets/icons/video.svg";
import imageIcon from "../assets/icons/image.svg";
import devIcon from "../assets/icons/dev.svg";

import toggleIcon from "../assets/nav/toggle.png";
import chatItemIcon from "../assets/nav/chat-item.svg";
import moreIcon from "../assets/nav/more.svg";
import upgradeIcon from "../assets/nav/upgrade.svg";
import userImg from "../assets/nav/user.png";


const menuItems = [
  { label: "AI Chat", path: "/ai-chat", icon: chatIcon },
  { label: "AI Video", path: "/ai-video", icon: videoIcon },
  { label: "AI Image", path: "/ai-image", icon: imageIcon },
  { label: "AI Development", path: "/ai-dev", icon: devIcon },
];

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
      className="
        flex
        flex-col
        w-[300px]
        p-4
        gap-5
        items-start
        flex-shrink-0
        self-stretch
        bg-[#121212]
        h-screen
      "
    >
      {/* ================= HEADER ================= */}
<div className="flex items-center justify-between self-stretch">
  <img
    src={logo}
    alt="codegnan"
    className="w-[129.474px] h-[34px] object-contain"
  />

 <button
  onClick={() => setCollapsed((prev) => !prev)}
  className="
    flex
    w-[40px]
    h-[32px]
    p-2
    items-center
    justify-center
    gap-2
    rounded-lg
    bg-[#171717]
  "
>
  <img
    src={toggleIcon}
    alt="Toggle sidebar"
    className="
      w-5
      h-5
      scale-110
      text-[#D9DADB]
    "
  />
</button>


</div>

{/* ================= GENERAL + NAV ================= */}
<div className="flex flex-col gap-2 self-stretch">
  {!collapsed && (
    <p className="text-[14px] font-normal leading-[21px] capitalize text-white/30">
      General
    </p>
  )}

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
          py-3
          items-center
          justify-between
          self-stretch
          rounded-lg
          border
          transition-colors
          ${
            isActive
              ? "bg-white/10 border-white/10"
              : "bg-transparent border-transparent"
          }
          `
        }
      >
        {({ isActive }) => (
          <div className="flex items-center gap-3">
            <img
              src={item.icon}
              alt={item.label}
              className={`w-5 h-5 ${
                isActive ? "opacity-100" : "opacity-60"
              }`}
            />

            {!collapsed && (
              <span
                className={`text-[16px] font-medium leading-[24px] ${
                  isActive ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
              </span>
            )}
          </div>
        )}
      </NavLink>
    ))}
  </nav>
</div>


      {/* ================= PREVIOUS CHAT ================= */}
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
      {({ isActive }) => (
        <>
          {/* ICON */}
          <img
            src={chatItemIcon}
            alt=""
            className={`w-5 h-5 ${
              isActive ? "opacity-70" : "opacity-50"
            }`}
          />

          {/* TEXT */}
          {!collapsed && (
            <span
              className={`flex-1 truncate text-[16px] font-medium leading-[24px] ${
                isActive ? "text-white/70" : "text-white/70"
              }`}
            >
              {chat.label}
            </span>
          )}
        </>
      )}
    </NavLink>
  ))}
</nav>


      {/* PUSH CONTENT UP */}
      <div className="flex-1 w-full" />

     
{/* ================= UPGRADE SECTION ================= */}
<div
  className="
    flex
    flex-col
    items-end
    gap-5
    p-4
    self-stretch
    rounded-xl
    border
    border-white/10
    bg-[linear-gradient(75deg,#4956F4_47.29%,#2A328E_78.39%)]
  "
>
  {/* Top row: icon + text */}
  <div className="flex items-center gap-3 self-stretch">
    {/* Icon */}
    <div
      className="
        flex
        p-[10px]
        items-center
        justify-center
        rounded-full
        border
        border-[#EBEBEB]
        bg-white
        shadow-[0_0_64px_0_rgba(235,235,235,0.40)]
      "
    >
      <img
        src={upgradeIcon}
        alt="Upgrade"
        className="w-5 h-5"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col">
      <p className="text-white text-[14px] font-bold leading-[21px]">
        Upgrade Plan
      </p>
      <p className="text-white/70 text-[12px] font-medium leading-[18px]">
        More access to the best models
      </p>
    </div>
  </div>

  {/* Button */}
  <button onClick={()=>navigate("/upgrade")}
    className="
      flex
      items-center
      justify-center
      gap-2
      self-stretch
      p-[10px]
      rounded-lg
      border
      border-[#11111133]
      bg-white
       cursor-pointer
    transition-colors
    duration-200
    hover:bg-[#EBEBEB]
    "
  >
    <span className="text-[#111111E5] text-[12px] font-semibold leading-[18px]">
      Upgrade Plan
    </span>
  </button>
</div>



      {/* ================= USER PROFILE ================= */}
    {/* ================= USER INFORMATION ================= */}
<div className="flex items-center justify-between self-stretch px-3 pt-3 pb-4 rounded-lg">
  {/* Left side */}
  <div className="flex items-center gap-3">
    {/* Avatar */}
    <div className="flex w-[44px] h-[44px] p-[2px] rounded-full border border-[#BCBCBC]">
      <img
        src={userImg}
        alt="User"
        className="w-full h-full rounded-full object-cover"
      />
    </div>

    {/* User text */}
    <div className="flex flex-col">
      <p className="text-white text-[16px] font-bold tracking-[-0.32px] capitalize">
        Nutan Sai Nandam
      </p>
      <p className="text-white/60 text-[12px] font-normal tracking-[-0.24px]">
        nutansainandam.com
      </p>
    </div>
  </div>

  {/* More icon */}
  <img
    src={moreIcon}
    alt="More"
    className="w-5 h-5 text-[#7C7D83]"
  />
</div>

    </aside>
  );
}
