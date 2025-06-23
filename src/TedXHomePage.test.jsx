import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TedXHomepage from './TedXHomepage';

describe('TedXHomepage', () => {
  it('renders the main homepage component', () => {
    render(<TedXHomepage />);

    // Check if main title is rendered
    expect(screen.getByText(/Between/)).toBeInTheDocument();
    expect(screen.getByText(/Light/)).toBeInTheDocument();
    expect(screen.getByText(/Shadow/)).toBeInTheDocument();
    expect(screen.getByText(/Lies the Spectrum of Ideas/)).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<TedXHomepage />);
    expect(screen.getByText('An exploration of duality through the worlds of Kafka and Tolstoy')).toBeInTheDocument();
  });

  it('renders both author sections', () => {
    render(<TedXHomepage />);

    // Check Kafka section
    expect(screen.getByText('KAFKA')).toBeInTheDocument();
    expect(screen.getByText('"I am a cage, in search of a bird."')).toBeInTheDocument();

    // Check Tolstoy section
    expect(screen.getByText('Tolstoy')).toBeInTheDocument();
    expect(screen.getByText('"The sole meaning of life is to serve humanity."')).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<TedXHomepage />);
    const ctaButtons = screen.getAllByText('Get tickets');
    expect(ctaButtons).toHaveLength(2); // One in nav, one in hero
  });

  it('has proper semantic structure', () => {
    render(<TedXHomepage />);

    // Check for semantic elements
    expect(screen.getByRole('banner')).toBeInTheDocument(); // header
    expect(screen.getByRole('main')).toBeInTheDocument(); // main
    expect(screen.getByRole('navigation')).toBeInTheDocument(); // nav
  });
});
