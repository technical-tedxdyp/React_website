import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders all navigation items', () => {
    render(<Navigation />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Speakers')).toBeInTheDocument();
    expect(screen.getByText('Sponsor')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    render(<Navigation />);
    const logo = screen.getByAltText('TedX Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2176fc13995df19e6f08a415d1b85f2d4b4235f?placeholderIfAbsent=true&apiKey=e3b7908274d7429298c0e1d85455a352');
  });

  it('renders the CTA button', () => {
    render(<Navigation />);
    expect(screen.getByText('Get tickets')).toBeInTheDocument();
  });

  it('has proper navigation structure', () => {
    render(<Navigation />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('navigation links have proper href attributes', () => {
    render(<Navigation />);

    expect(screen.getByText('Home')).toHaveAttribute('href', '#home');
    expect(screen.getByText('Speakers')).toHaveAttribute('href', '#speakers');
    expect(screen.getByText('Sponsor')).toHaveAttribute('href', '#sponsor');
    expect(screen.getByText('About')).toHaveAttribute('href', '#about');
  });
});
