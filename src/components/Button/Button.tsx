import style from './Button.module.scss';

type ButtonProps = {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

function Button({ setClicked }: ButtonProps) {
  return (
    <button
      data-testid="buttonTestId"
      className={style.button}
      onClick={() => {
        setClicked((prev) => !prev);
        // eslint-disable-next-line no-console
        console.log('Кнопка нажата');
      }}
      type="button"
    >
      Change icon
    </button>
  );
}

export default Button;
