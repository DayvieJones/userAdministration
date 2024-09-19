import "./Button.scss";

interface ButtonInterface {
  value: string;
  buttonType: any;
}

function Button({ value, buttonType }: ButtonInterface) {
  return <button type={buttonType}>{value}</button>;
}

export default Button;
