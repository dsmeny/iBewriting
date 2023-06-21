export const checkHandler = (e, setToggleID) => {
  const target = e.target;
  const id = target.id;

  setToggleID(() => {
    return {
      [`${id}`]: target.checked,
    };
  });
};
