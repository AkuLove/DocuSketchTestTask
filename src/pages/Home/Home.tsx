import {
  IconName,
  IconPrefix,
  library,
} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';
import style from './Home.module.scss';
import { icons } from '../../constants';
import useLocalStorage from '../../hooks/useLocalStorage';
import useDebounce from '../../hooks/useDebounce';
import Tip from '../../components/Tip/Tip';

library.add(fab, fas);

function Home() {
  const [icon, setIcon] = useLocalStorage<[IconPrefix, IconName] | null>(
    null,
    'icon'
  );
  const [clicked, setClicked] = useState(true);

  const getNewIconName = (): [IconPrefix, IconName] => {
    const index = Math.floor(Math.random() * icons.length);
    const iconPrefix = icons[index].split(' ')[0] as IconPrefix;
    const iconName = icons[index].split(' ')[1] as IconName;
    setIcon([iconPrefix, iconName]);
    return [iconPrefix, iconName];
  };

  useDebounce(() => getNewIconName(), 3000, [clicked]);

  return (
    <section className={style.home}>
      <Tip />
      <div className={style.home__content}>
        <div className={style.home__icon}>
          <FontAwesomeIcon icon={icon || getNewIconName()} />
        </div>
        <button
          className={style.home__button}
          onClick={() => {
            setClicked((prev) => !prev);
            console.log('Кнопка нажата');
          }}
          type="button"
        >
          Change icon
        </button>
      </div>
    </section>
  );
}

export default Home;
