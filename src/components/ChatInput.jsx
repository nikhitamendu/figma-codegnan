import { useState } from "react";
import attachIcon from "../assets/icons/attach.svg";
import imageUploadIcon from "../assets/icons/image-upload.svg";
import sendIcon from "../assets/icons/send.svg";
import webIcon from "../assets/icons/web.svg";
import chevronDown from "../assets/icons/chevron-down.svg";

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState("");
  const max = 1500;

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div
      className="
        w-full
        max-w-5xl
        p-5
        rounded-xl
        border
        border-white/10
        bg-[#212121]
        box-border
        flex
        flex-col
        gap-6
      "
    >
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-start">
        <span className="text-[16px] font-semibold text-white/80 ">
          Ask me anything...
        </span>

        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/10">
          <img src={webIcon} className="w-4 h-4" />
          <span className="text-[14px] font-bold text-white capitalize">
            All Web
          </span>
          <img src={chevronDown} className="w-4 h-4 opacity-80" />
        </button>
      </div>

      {/* ================= TEXTAREA ================= */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={2}
        className="
          w-full
          resize-none
          bg-transparent
          outline-none
          text-[14px]
          text-white
        "
      />

      {/* ================= ACTIONS ================= */}
      <div className="flex items-center">
        {/* Left actions */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-[14px] text-white/60">
            <img src={attachIcon} className="w-[18px] h-[18px]" />
            Add Attachment
          </button>

          <button className="flex items-center gap-2 text-[14px] text-white/60">
            <img src={imageUploadIcon} className="w-[18px] h-[18px]" />
            Use Image
          </button>
        </div>

        {/* Push right */}
        <div className="flex-1" />

        {/* Counter + send */}
        <div className="flex items-center gap-4">
          <span className="text-[14px] text-white/70">
            {value.length}/{max}
          </span>

          <button
            onClick={handleSend}
            className="
              w-9
              h-9
              rounded-full
              bg-white
              flex
              items-center
              justify-center
            "
          >
            <img src={sendIcon} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
