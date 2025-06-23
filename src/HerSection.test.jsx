import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders the main heading with styled text', () => {
    render(<HeroSection />);

    // Check for main heading parts
    expect(screen.getByText(/Between/)).toBeInTheDocument();
    expect(screen.getByText(/Light/)).toBeInTheDocument();
    expect(screen.getByText(/Shadow/)).toBeInTheDocument();
    expect(screen.getByText(/Lies the Spectrum of Ideas/)).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<HeroSection />);
    expect(screen.getByText('An exploration of duality through the worlds of Kafka and Tolstoy')).toBeInTheDocument();
  });

  it('renders the event logo', () => {
    render(<HeroSection />);
    const logo = screen.getByAltText('TedX Event Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/2bcc689c9cc68a61e6eb8ff51e8672917404c281?placeholderIfAbsent=true&apiKey=e3b7908274d7429298c0e1d85455a352');
  });

  it('renders the CTA button', () => {
    render(<HeroSection />);
    expect(screen.getByText('Get tickets')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<HeroSection />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(<HeroSection />);
    const main = screen.getByRole('main');
    expect(main).toHaveClass('bg-stone-950');
  });
});
