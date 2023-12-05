interface Props {
  children: string;
  color: 'primary' | 'danger' | 'success';
  onClick: () => void;
}

const Buttons = ({ children, onClick, color }: Props) => {
  const buttonClass = `btn btn-${color}`;

  return (
    <>
      <button type="button" className={buttonClass} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Buttons;
