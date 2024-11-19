import "./Switch.scss";

interface SwitchProps {
  handleOnChangeEvent: () => void;
}

export function Switch({ handleOnChangeEvent }: SwitchProps) {
  return (
    <div className="container-switch">
      <span className="container-text">Theme</span>
      <label className="switch">
        <input type="checkbox" onChange={handleOnChangeEvent} />
        <span className="slider"></span>
      </label>
    </div>
  );
}
