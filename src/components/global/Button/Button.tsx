// Types
import { ButtonProps as Props } from "./Button.types";

const Button: React.FC<Props> = (props) => {
  const { className, type, value, onClick } = props;

  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={`Button ${className}`}
    />
  );
};

Button.defaultProps = {
  className: "",
};

export default Button;
