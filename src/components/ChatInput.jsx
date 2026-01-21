import { useState } from "react";
import { attach, imageUpload, send } from "../assets/icons";
import webIcon from "../assets/icons/web.svg";
import chevronDown from "../assets/icons/chevron-down.svg";

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("All Web");

  const max = 1500;
  const modes = ["All Web", "Docs", "Images", "Code"];

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
<div className="w-full max-w-full overflow-x-hidden bg-[#2A2A2A] px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4">

      {/* MOBILE */}
<div className="sm:hidden w-full max-w-full mx-auto flex items-center gap-3">

        <button className="w-10 h-10 rounded-md shadow-md bg-[#1e1e1e] flex items-center justify-center">
          <img src={attach} className="w-4 h-4" />
        </button>

        <div className="flex-1 bg-[#1e1e1e] rounded-xl flex items-center gap-3 px-3 py-2">

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask me anything..."
            className="
              flex-1
              bg-transparent
              outline-none
              text-sm
              text-white
              placeholder:text-white
            "
          />

          <span className="text-xs text-white/60">
            {value.length}/{max}
          </span>

          <button
            onClick={handleSend}
            className="w-9 h-9 rounded-md shadow-md bg-white flex items-center justify-center"
          >
            <img src={send} className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:block">
        <div className="w-full max-w-5xl mx-auto p-2 sm:p-3 md:p-4 rounded-xl bg-[#1e1e1e] flex flex-col gap-2 sm:gap-4 md:gap-5">

          {/* HEADER */}
          <div className="flex items-center justify-between relative">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-white/80"></span>

            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-md border border-white/10 bg-white/10"
              >
                <img src={webIcon} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:block text-sm font-bold text-white">
                  {mode}
                </span>
                <img
                  src={chevronDown}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-36 bg-[#111] border border-white/10 rounded-lg overflow-hidden z-50">
                  {modes.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setMode(item);
                        setOpen(false);
                      }}
                      className="px-4 py-2 text-xs sm:text-sm text-white/80 hover:bg-white/10 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* TEXTAREA */}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={1}
            placeholder="Ask me anything..."
            className="
              w-full
              resize-none
              bg-transparent
              outline-none
              text-xs sm:text-sm
              text-white
              placeholder:text-white
            "
          />

          {/* ACTIONS */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex gap-3 sm:gap-4">

              {/* ADD TEXT ONLY HERE */}
              <button className="flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white transition">
                <img src={attach} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Add Attachment</span>
              </button>

              <button className="flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white transition">
                <img src={imageUpload} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Use Image</span>
              </button>

            </div>

            <div className="flex-1" />

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-white/70">
                {value.length}/{max}
              </span>

              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-md shadow-md bg-white flex items-center justify-center"
              >
                <img src={send} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}