export const ButtonIcon = ({ children, onCLick }) => {
  if (onCLick)
    return (
      <button onClick={onCLick} className="icon-btn">
        {children}
      </button>
    );

  return <button className="icon-btn">{children}</button>;
};
