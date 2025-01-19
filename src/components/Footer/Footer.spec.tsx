import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render the correct footer text', () => {
    render(<Footer />);
    const footerText = screen.getByText('Desenvolvido por: Victor Lira');
    expect(footerText).toBeInTheDocument();
  });
});
