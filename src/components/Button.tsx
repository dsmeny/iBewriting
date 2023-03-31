type Props = {
  text: string;
  id?: string | number;
};

const Button: React.FC<Props> = ({ text, id }) => {
  return (
    <button data-key={id ? id : ""} className="btn card-btn">
      {text}
    </button>
  );
};

export default Button;
