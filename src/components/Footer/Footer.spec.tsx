import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render the footer text', () => {
    render(<Footer />);
    expect(screen.getByText('Desenvolvido por: Victor Lira')).toBeInTheDocument();
  });

  it('should have the correct data-aos attributes', () => {
    render(<Footer />);
    const footerElement = screen.getByText('Desenvolvido por: Victor Lira').parentElement;
    expect(footerElement).toHaveAttribute('data-aos', 'fade-down');
    expect(footerElement).toHaveAttribute('data-aos-duration', '600');
    expect(footerElement).toHaveAttribute('data-aos-offset', '0');
  });
});
