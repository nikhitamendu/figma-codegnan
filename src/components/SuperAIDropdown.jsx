import { useState } from "react";

export default function SuperAIDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-[#2a2a2a] rounded-lg"
      >
        ✨ SuperAI 2.0
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#2a2a2a] rounded-lg shadow">
          {["Model A", "Model B", "Model C"].map((item) => (
            <div
              key={item}
              className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
