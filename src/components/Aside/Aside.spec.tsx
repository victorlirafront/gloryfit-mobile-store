import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Aside from './Aside';

const mockStore = createStore(
  (state = { swapi: { category: 'people', data: { results: [] } } }) => state,
);

it('should render the logo in the Aside component', () => {
  render(
    <Provider store={mockStore}>
      <Aside className="test-class" />
    </Provider>,
  );

  const logoImage = screen.getByAltText(/hunterstack logo/i);
  expect(logoImage).toBeInTheDocument();
});

it('should render the People category in the Aside component', () => {
  render(
    <Provider store={mockStore}>
      <Aside className="test-class" />
    </Provider>,
  );

  const peopleCategory = screen.getByText(/people/i);
  expect(peopleCategory).toBeInTheDocument();
});

it('should highlight the active category item when "People" is selected', () => {
  render(
    <Provider store={mockStore}>
      <Aside className="test-class" />
    </Provider>,
  );

  const peopleItem = screen.getByText(/people/i).closest('li');
  expect(peopleItem).toHaveClass('active');
});
