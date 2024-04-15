import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import style from './Icon.module.scss';
import Button from '../Button/Button';

type IconProps = {
  getNewIconName: () => [IconPrefix, IconName];
  icon: [IconPrefix, IconName] | null;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

function Icon({ getNewIconName, icon, setClicked }: IconProps) {
  return (
    <div data-testid="iconTestId" className={style.icon}>
      <div>
        <FontAwesomeIcon icon={icon || getNewIconName()} />
      </div>
      <Button setClicked={setClicked} />
    </div>
  );
}

export default Icon;
