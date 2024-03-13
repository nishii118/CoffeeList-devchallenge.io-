interface SelectionButtonProps {
  isSelection: boolean;
  value: string;
  onClick: () => void; // Add this line
}
export function SelectionButton({ isSelection, value, onClick }: SelectionButtonProps) {
  return (
    <button className={`border-none cursor-pointer rounded-lg p-2 hover:bg-[#6F757C] ${isSelection ? `bg-[#6F757C]` : ``}`} onClick={onClick}>
      {value}
    </button>
  )
}