import React from 'react';
import { getByText, render } from '@testing-library/react';
import BingoApp from '../../src/components/BingoApp';
import userEvent from '@testing-library/user-event';
import { selectComboOption } from '../test-helper';

const testOptions = [];
for (let i = 0; i < 25; i++) {
  testOptions.push(i.toString());
}

//disable randomness of board
jest.mock('lodash', () => {
  const acutal = jest.requireActual('lodash');
  return {
    ...acutal,
    shuffle: acutal.identity,
  };
});

const setup = () => {
  const screen = render(
    <BingoApp bingoMark="test-mark" options={testOptions} appInfo={{}} />
  );

  return { screen, user: userEvent.setup() };
};

test('can be rendered', () => {
  const { screen } = setup();
  expect(screen.container).toMatchSnapshot();
});

describe('has a type modal', () => {
  test('that is opened by clicking the type', async () => {
    const { user, screen } = setup();
    await user.click(screen.getByText('BINGO: Traditional'));
    expect(
      getByText(screen.getByRole('dialog'), 'Select BINGO Type:')
    ).toBeInTheDocument();
  });
  test('changes the type', async () => {
    const { user, screen } = setup();
    await user.click(screen.getByText('BINGO: Traditional'));
    await user.click(screen.getByText('Double'));
    expect(screen.getByText('BINGO: Double')).toBeInTheDocument();
  });
});

describe('has a configuration modal', () => {
  const setupOpenConfigModal = async () => {
    const info = setup();
    await info.user.click(document.querySelector('.hamburger-button'));
    return info;
  };
  test('that is opened by the clicking the gear icon', async () => {
    const { screen } = await setupOpenConfigModal();
    expect(
      getByText(screen.getByRole('dialog'), 'New Game')
    ).toBeInTheDocument();
  });
  test('opens the options modal', async () => {
    const { user, screen } = await setupOpenConfigModal();
    await user.click(screen.getByText('View All Options'));
    expect(document.querySelectorAll('.rw-list-option')).toHaveLength(25);
  });
  test('changes the bingo type', async () => {
    const { user, screen } = await setupOpenConfigModal();
    await selectComboOption(
      user,
      document.querySelector('.rw-combobox'),
      'Double'
    );
    expect(screen.getByText('BINGO: Double')).toBeInTheDocument();
  });
  //clear
  //share
  //about
});
