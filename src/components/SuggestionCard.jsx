export default function SuggestionCard({
  icon,
  title,
  onClick,
  iconBg,        // 👈 optional
  iconShadow,    // 👈 optional
}) {
  return (
   <button
  onClick={onClick}
  className="
    flex
    flex-col
    items-start
    w-[273px]
    h-[140px]
    p-5
    gap-6
    rounded-2xl
    border
    border-white/10
    bg-[#3C3C3C]
    box-border
    text-left

    transition-all
    duration-200
    hover:bg-[#454545]
    active:bg-[#2F2F2F]
  "
>

      {/* Icon container */}
      <div
        className="
          flex
          items-center
          justify-center
          w-[34px]
          h-[34px]
          p-2
          rounded-lg
        "
        style={{
          background: iconBg,
          boxShadow: iconShadow,
        }}
      >
        <img src={icon} alt="" className="w-4 h-4" />
      </div>

      {/* Text */}
      <p className="text-[14px] font-medium leading-[21px] text-white/50 capitalize">
        {title}
      </p>
    </button>
  );
}
