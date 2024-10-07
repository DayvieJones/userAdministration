import "./Button.css";

interface ButtonInterface {
  value: string;
}

function Button({ value }: ButtonInterface) {
  return <button>{value}</button>;
}

export default Button;
