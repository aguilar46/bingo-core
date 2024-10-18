import { getByText } from '@testing-library/dom';

export async function selectComboOption(user, combo, option) {
  await user.click(combo.querySelector('button'));
  return user.click(getByText(combo, option));
}
