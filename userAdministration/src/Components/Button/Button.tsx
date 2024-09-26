import "./Button.scss";

interface ButtonInterface {
  buttonContent: string;
  buttonType: any;
  handleOnClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  buttonContent,
  buttonType,
  handleOnClickEvent,
}: ButtonInterface) {
  return (
    <button onClick={handleOnClickEvent} type={buttonType}>
      {buttonContent}
    </button>
  );
}

export default Button;
