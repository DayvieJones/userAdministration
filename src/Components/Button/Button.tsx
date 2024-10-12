import "./Button.scss";

interface ButtonInterface {
  className: string;
  buttonContent: string;
  buttonType: any;
  handleSubmitNewUser?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  className,
  buttonContent,
  buttonType,
  handleSubmitNewUser,
}: ButtonInterface) {
  return (
    <button
      className={className}
      onClick={handleSubmitNewUser}
      type={buttonType}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
