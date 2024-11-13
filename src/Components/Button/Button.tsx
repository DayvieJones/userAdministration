import "./Button.scss";

interface ButtonInterface {
  className?: string;
  buttonType: string;
  buttonContent: string;
  handleOnClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

function checkButtonType(buttonProps: ButtonInterface) {
  const { buttonType, className } = buttonProps;

  let resultClassName = className || "";

  switch (buttonType) {
    case "submit": {
      resultClassName = "button__submit";
      break;
    }
    case "delete": {
      resultClassName = "button__delete";
      break;
    }
    case "create": {
      resultClassName = "button__create";
      break;
    }
    default: {
      resultClassName = "button__button";
    }
  }
  return resultClassName;
}
function Button({
  buttonContent,
  buttonType,
  handleOnClick,
  className,
}: ButtonInterface) {
  const classNameResult = checkButtonType({
    buttonType,
    className,
    buttonContent: "",
  });
  return (
    <button className={classNameResult} onClick={handleOnClick}>
      {buttonContent}
    </button>
  );
}

export default Button;
