import { useState } from "react";

const useShowCard = () => {
  const [showCard, setShowCard] = useState(false);

  const showCardHandler = () => {
    setShowCard((prev) => !prev);
  };

  return {
    showCard,
    showCardHandler,
  };
};

export default useShowCard;
