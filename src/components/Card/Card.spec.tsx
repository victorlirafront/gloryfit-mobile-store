import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockCardProps = {
  category: 'People',
  textColor: 'blue',
  heading: ['Name', 'Luke Skywalker'],
  secondElement: ['Height', '172'],
  thirdElement: ['Mass', '77'],
  date: '2025-01-19',
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
