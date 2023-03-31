type Props = {
  text: string;
  id?: string | number;
  className?: string;
} & Record<string, any>;

const Button: React.FC<Props> = ({ text, id, className, ...rest }) => {
  return (
    <button
      data-key={id ? id : ""}
      className={`btn card-btn ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
