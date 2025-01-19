import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './Header';

const mockStore = createStore(
  (state = { swapi: { category: 'films', data: { results: [] } } }) => state,
);

it('should render the search input field', () => {
  render(
    <Provider store={mockStore}>
      <Header
        onClickedSuggestion={jest.fn()}
        onAsideToggler={jest.fn()}
        arrowClassName="test-arrow"
      />
    </Provider>,
  );
  const searchInput = screen.getByPlaceholderText(/search for/i);
  expect(searchInput).toBeInTheDocument();
});

it('should render the arrow icon', () => {
  render(
    <Provider store={mockStore}>
      <Header
        onClickedSuggestion={jest.fn()}
        onAsideToggler={jest.fn()}
        arrowClassName="test-arrow"
      />
    </Provider>,
  );
  const arrowIcon = screen.getByAltText('arrow icon');
  expect(arrowIcon).toBeInTheDocument();
});
