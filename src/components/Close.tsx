import { AiOutlineClose } from "react-icons/ai";

const Close = ({ showCardHandler }) => {
  return (
    <div className="settings-close">
      <AiOutlineClose style={{ color: "white" }} onClick={showCardHandler} />
    </div>
  );
};

export default Close;
