import { useState } from "react";
import superAIIcon from "../assets/icons/super-ai.svg";
import chevronDown from "../assets/icons/chevron-down.svg";

export default function SuperAIDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* ================= BUTTON ================= */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          justify-center
          gap-2
          h-[40px]
          px-6
          py-[10px]
          rounded-lg
          border
          border-white/10
          bg-white/10
        "
      >
        {/* SuperAI icon */}
        <img
          src={superAIIcon}
          alt="Super AI"
          className="w-[13.271px] h-[14.543px] shrink-0 opacity-60"
        />

        {/* Text */}
        <span
          className="
            text-[14px]
            font-semibold
            tracking-[-0.28px]
            capitalize
            text-white
            whitespace-nowrap
          "
        >
          SuperAI 2.0
        </span>

        {/* Dropdown icon */}
        <img
          src={chevronDown}
          alt="Open"
          className="
            w-5
            h-5
            shrink-0
            opacity-60
            transition-transform
            duration-200
          "
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* ================= DROPDOWN ================= */}
      {open && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-40
            rounded-lg
            border
            border-white/10
            bg-[#1a1a1a]
            shadow-lg
            overflow-hidden
            z-50
          "
        >
          {["Model A", "Model B", "Model B", "Model C"].map((item) => (
            <div
              key={item}
              className="
                px-4
                py-2
                text-sm
                text-white/80
                cursor-pointer
                hover:bg-white/10
              "
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}