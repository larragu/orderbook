import { render, screen } from '@testing-library/react';

import Spread from './Spread';
import { initialResult } from '../../mocks';
import * as hooks from '../../hooks';

describe('Spread component', () => {
  test('should render Spread', () => {
    const useAppSelectorMock = jest.spyOn(hooks, 'useAppSelector');
    useAppSelectorMock.mockReturnValueOnce(initialResult.bid.highestBidPrice);
    useAppSelectorMock.mockReturnValueOnce(initialResult.ask.lowestAskPrice);

    render(<Spread />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Spread: 13.0 (0.03%)'
    );
  });
});
