import { useState } from "react";
import { attach, imageUpload, send } from "../assets/icons";

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState("");
  const max = 1500;

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="w-full max-w-5xl bg-[#1f1f1f] border border-[#2a2a2a] rounded-2xl p-4">
      {/* INPUT */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask me anything..."
        rows={1}
        className="w-full resize-none bg-transparent outline-none text-sm"
      />

      {/* BOTTOM BAR */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4 text-xs text-gray-400">
        {/* LEFT LINKS */}
        <div className="flex gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-1 hover:text-white cursor-pointer"
          >
            <img src={attach} className="w-4 h-4" />
            Add Attachment
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-1 hover:text-white cursor-pointer"
          >
            <img src={imageUpload} className="w-4 h-4" />
            Use Image
          </a>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3 ml-auto">
          <select className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg px-2 py-1">
            <option>All Web</option>
            <option>Docs</option>
            <option>Images</option>
          </select>

          <span>{value.length}/{max}</span>

          <button
            onClick={handleSend}
            className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center"
          >
            <img src={send} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
