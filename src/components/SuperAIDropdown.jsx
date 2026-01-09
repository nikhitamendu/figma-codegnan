import { useState } from "react";
import superAIIcon from "../assets/icons/super-ai.svg";
import chevronDown from "../assets/icons/chevron-down.svg";

export default function SuperAIDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          justify-center
          gap-2

          h-9
          sm:h-[40px]

          px-3
          sm:px-5

          py-2
          rounded-lg

          border
          border-white/10
          bg-white/10

          hover:bg-white/15
          transition
        "
      >
        {/* Icon */}
        <img
          src={superAIIcon}
          alt="Super AI"
          className="w-3.5 h-3.5 sm:w-[13px] sm:h-[14px] opacity-60"
        />

        {/* Text */}
        <span
          className="
            text-[13px]
            sm:text-[14px]
            font-semibold
            tracking-tight
            capitalize
            text-white
            whitespace-nowrap
          "
        >
          SuperAI 2.0
        </span>

        {/* Chevron */}
        <img
          src={chevronDown}
          alt="Open"
          className="
            w-4
            h-4
            sm:w-5
            sm:h-5

            opacity-60
            transition-transform
            duration-200
          "
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute
            right-0
            mt-2

            w-36
            sm:w-40

            rounded-lg
            border
            border-white/10
            bg-[#1a1a1a]
            shadow-lg
            overflow-hidden
            z-50
          "
        >
          {["Model A", "Model B", "Model C"].map((item) => (
            <div
              key={item}
              className="
                px-4
                py-2

                text-[13px]
                sm:text-sm

                text-white/80
                cursor-pointer

                hover:bg-white/10
                transition
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
