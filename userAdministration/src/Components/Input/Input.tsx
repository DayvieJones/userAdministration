import "./Input.scss";

interface InputInterface {
  inputType: string;
  inputValue: any;
  placeholder: string;
  required?: boolean;
  min?: string;
  max?: string;
}

export default function Input({
  inputType,
  inputValue,
  placeholder,
  required,
  min,
  max,
}: InputInterface) {
  return (
    <input
      type={inputType}
      value={inputValue}
      placeholder={placeholder}
      required={required}
      min={min}
      max={max}
    />
  );
}
