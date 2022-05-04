import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
}
function Card({icon, label, onClick} : CardProps) {

  return (
    <button 
      onClick={onClick}  
      type={'button'} 
      className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus-border-500 focus:outline-none"
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default Card;
