import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockCardProps = {
  category: 'People',
  textColor: 'blue',
  info_1: ['Name', 'Luke Skywalker'],
  info_2: ['Height', '172'],
  info_3: ['Mass', '77'],
  info_4: '2025-01-19',
  url: 'https://swapi.dev/api/people/1/',
};

it('should render the category text correctly', () => {
  render(<Card {...mockCardProps} />);
  const categoryText = screen.getByText(/people/i);
  expect(categoryText).toBeInTheDocument();
});

it('should render the "Visualizar" button', () => {
  render(<Card {...mockCardProps} />);
  const button = screen.getByText(/Read More/i);
  expect(button).toBeInTheDocument();
});
