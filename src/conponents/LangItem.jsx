const LangItem = ({ disabled, flag, label, onClick }) => {
  const Flag = flag;

  return (
    <li className="lang-item">
      <button disabled={disabled} onClick={onClick}>
        <Flag />
        {label}
      </button>
    </li>
  );
};

export default LangItem;
