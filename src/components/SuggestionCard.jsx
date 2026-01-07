export default function SuggestionCard({ icon, title }) {
  return (
    <div className="bg-[#2a2a2a] p-4 rounded-xl hover:bg-[#333] cursor-pointer">
      <img src={icon} className="w-6 h-6 mb-3" />
      <p className="text-sm text-gray-200">{title}</p>
    </div>
  );
}
