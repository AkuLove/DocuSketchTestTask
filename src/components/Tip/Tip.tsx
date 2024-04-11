import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import style from './Tip.module.scss';

function Tip() {
  const [focus, setFocus] = useState(false);

  return (
    <div className={style.tip}>
      <div
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        className={style.tip__icon}
      >
        <FontAwesomeIcon icon={faCircleExclamation} />
      </div>
      <div
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        className={
          !focus
            ? `${style.tip__message}`
            : `${style.tip__message} ${style.active}`
        }
      >
        <p className={style.tip__message_title}>
          Уточнения по тестовому заданию
        </p>
        <p className={style.tip__message_info}>
          В пункте 1 написано создать проект Angular, однако рекрутер написал
          что можно использовать любой фреймворк, какой удобно. <br /> Я выбрал
          React, так как с ним у меня больше опыта.
        </p>
        <p className={style.tip__message_info}>
          В пункте 4 указано что каждое нажатие должно быть обработано, не до
          конца понимаю что имеется в виду. <br /> Я оставил вывод в консоль при
          каждом клике, однако на саму функцию смены иконок оставил дебаунс
          из-за чего если кликать на кнопку очень быстро каждый клик будет
          сбрасывать таймер, пока через 3 секунды иконка не изменится.
        </p>
      </div>
    </div>
  );
}

export default Tip;
