import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import HouseTypeSelector from './HouseTypeSelector';

describe('HouseTypeSelector', () => {
  it('what to do with made up things?', async () => {
    const houseType = 'something-made-up';
    render(<HouseTypeSelector value={houseType} onChange={() => {}} />);

    const button = await screen.findByRole('button', { name: 'apartment' });
    expect(button).toHaveAccessibilityState({ selected: true });
  });
});
