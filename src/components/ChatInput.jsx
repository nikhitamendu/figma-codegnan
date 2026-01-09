import { useState } from "react"; // 👈 REQUIRED

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
    <div className="w-full bg-[#2A2A2A] px-2 pb-0 mt-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4">
      <div className="max-w-5xl mx-auto p-2 sm:p-3 md:p-4 rounded-xl bg-[#1e1e1e] flex flex-col gap-3 sm:gap-4 md:gap-5">

        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-sm md:text-base font-semibold text-white/80">
            Ask me anything...
          </span>

          <button className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-white/10 bg-white/10">
            <img src={webIcon} className="w-4 h-4" />
            <span className="text-sm font-bold text-white">All Web</span>
            <img src={chevronDown} className="w-4 h-4 opacity-80" />
          </button>
        </div>

        {/* Textarea */}
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={2}
          className="w-full resize-none bg-transparent outline-none text-sm text-white"
        />

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-sm text-white/60">
              <img src={attachIcon} className="w-4 h-4" />
              Add Attachment
            </button>

            <button className="flex items-center gap-2 text-sm text-white/60">
              <img src={imageUploadIcon} className="w-4 h-4" />
              Use Image
            </button>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-3">
            <span className="text-sm text-white/70">
              {value.length}/{max}
            </span>

            <button
              onClick={handleSend}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center"
            >
              <img src={sendIcon} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
