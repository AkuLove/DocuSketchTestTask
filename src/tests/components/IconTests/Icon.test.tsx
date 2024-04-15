import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Icon from '../../../components/Icon/Icon';

describe('Тестирование Icon', () => {
  describe('Тестирование базовых свойств', () => {
    const iconTestId = 'iconTestId';
    const buttonTestId = 'buttonTestId';
    const getNewIconName = vi.fn();
    const setClicked = vi.fn();
    let icon: HTMLDivElement;
    let button: HTMLButtonElement;
    beforeEach(() => {
      render(
        <Icon
          data-testid={iconTestId}
          getNewIconName={getNewIconName}
          icon={null}
          setClicked={setClicked}
        />
      );
      icon = screen.getByTestId(iconTestId);
      button = screen.getByTestId(buttonTestId);
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    test('Компонент Icon существует', () => {
      expect(icon).toBeInTheDocument();
    });

    test('Компонент Button является html тегом button', () => {
      expect(button.tagName).toBe('BUTTON');
    });

    test('Клик по кнопке триггерит вызов функции смены иконки', async () => {
      await userEvent.click(button);
      expect(getNewIconName).toBeCalled();
    });
  });
});
