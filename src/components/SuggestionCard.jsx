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
        w-[273px]
        min-h-[140px]
        p-5
        rounded-2xl
        border
        border-white/10
        bg-[#3C3C3C]
        text-left
        flex
        flex-col
        gap-4
        transition-all
        duration-200
        hover:bg-[#454545]
        active:bg-[#2F2F2F]
      "
    >
      <div
        className="w-[34px] h-[34px] rounded-lg flex items-center justify-center"
        style={{
          background: iconBg,
          boxShadow: iconShadow,
        }}
      >
        <img src={icon} className="w-4 h-4" />
      </div>

      <p className="text-[14px] font-medium leading-[21px] text-white/70 capitalize">
        {title}
      </p>
    </button>
  );
}
