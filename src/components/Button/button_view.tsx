import Loading from "../Loading";

interface ButtonProps {
  text: string;
  onPress: () => void;
  theme?: 'light' | 'dark';
  color?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
}

function Button({
    text,
    onPress,
    theme,
    color,
    loading,
    disabled,
  }: ButtonProps
  ) {
  return (
    <button
        type="submit"
        className="bg-brand-500 disabled:bg-brand-500 disabled:bg-opacity-50 text-white disabled:text-opacity-50 disabled:shadow-none p-2 h-10 rounded-md border-transparent hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900  focus:ring-brand-500 flex-1 flex justify-center items-center text-sm transition-colors duration-300" 
        onClick={onPress}
        disabled={disabled}
      >
      { loading ? 
        <Loading/>
        :
        text
      }
    </button>
  )
}

export default Button;
