import styles from './Button.module.css';

interface Props {
  children: string;
  color: 'primary' | 'danger' | 'success';
  onClick: () => void;
}

const Buttons = ({ children, onClick, color }: Props) => {
  const buttonClass = `btn btn-${color}`;

  return (
    <>
      <button
        type="button"
        className={[styles.btn, styles['btn-' + color]].join(' ')}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Buttons;
