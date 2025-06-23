import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AuthorSection from './AuthorSection';

describe('AuthorSection', () => {
  const defaultProps = {
    author: 'Test Author',
    quote: '"Test quote"',
    description: 'Test description',
    imageSrc: 'test-image.jpg',
    imageAlt: 'Test Author Image'
  };

  it('renders author information correctly', () => {
    render(<AuthorSection {...defaultProps} />);

    expect(screen.getByText('Test Author')).toBeInTheDocument();
    expect(screen.getByText('"Test quote"')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders the author image', () => {
    render(<AuthorSection {...defaultProps} />);

    const image = screen.getByAltText('Test Author Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('applies dark variant styling by default', () => {
    render(<AuthorSection {...defaultProps} />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-zinc-100');
  });

  it('applies light variant styling when specified', () => {
    render(<AuthorSection {...defaultProps} variant="light" />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-zinc-900');
  });

  it('positions image on the left by default', () => {
    const { container } = render(<AuthorSection {...defaultProps} />);
    const section = container.firstChild;
    const firstChild = section.firstElementChild;

    expect(firstChild.tagName).toBe('IMG');
  });

  it('positions image on the right when specified', () => {
    const { container } = render(<AuthorSection {...defaultProps} imagePosition="right" />);
    const section = container.firstChild;
    const firstChild = section.firstElementChild;

    expect(firstChild.tagName).toBe('DIV'); // Content div comes first
  });

  it('has proper semantic structure', () => {
    render(<AuthorSection {...defaultProps} />);

    expect(screen.getByRole('region')).toBeInTheDocument(); // section
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders quote as blockquote', () => {
    render(<AuthorSection {...defaultProps} />);

    const quote = screen.getByText('"Test quote"');
    expect(quote.tagName).toBe('BLOCKQUOTE');
  });
});
