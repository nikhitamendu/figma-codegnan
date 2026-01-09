export default function SuggestionCard({
  icon,
  title,
  onClick,
  iconBg,
  iconShadow,
}) {
  return (
    <button
      onClick={onClick}
      className="
        group
        w-full
        max-w-[273px]
        min-h-[140px]
        p-5
        rounded-2xl
        border
        border-white/10
        bg-[#3A3A3A]
        text-left
        flex
        flex-col
        gap-4

        transition-all
        duration-300
        ease-out

        hover:bg-[#454545]
        hover:-translate-y-[2px]
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]

        active:translate-y-0
        active:scale-[0.98]
        active:bg-[#2F2F2F]
      "
    >
      {/* ICON */}
      <div
        className="
          w-[36px]
          h-[36px]
          rounded-xl
          flex
          items-center
          justify-center
          transition-transform
          duration-300
          group-hover:scale-105
        "
        style={{
          background: iconBg,
          boxShadow: iconShadow,
        }}
      >
        <img src={icon} className="w-4 h-4" alt="" />
      </div>

      {/* TITLE */}
      <p
        className="
          text-[14px]
          font-medium
          leading-[21px]
          text-white/75
          capitalize
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {title}
      </p>
    </button>
  );
}
