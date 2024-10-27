import "./Input.scss";
// import { DarkModeContext } from "../../Context/darkModeContext";

// const { isDarkMode } = useContext(DarkModeContext);
interface InputInterface {
  isError?: boolean;
  name: string;
  inputType: string;
  inputValue: any;
  placeholder: string;
  min?: string;
  max?: string;
  handleInputChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  inputType,
  inputValue,
  placeholder,
  min,
  max,
  handleInputChangeEvent,
}: InputInterface) {
  return (
    <input
      name={name}
      type={inputType}
      value={inputValue}
      placeholder={placeholder}
      min={min}
      max={max}
      onChange={handleInputChangeEvent}
    />
  );
}
