import React from 'react';
import CallToActionButton from './callToActionButton';

const Navigation = () => {
  const navItems = ['Home', 'Speakers', 'Sponsor', 'About'];

  return (
    <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-16 py-2 w-full text-xl text-white bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2176fc13995df19e6f08a415d1b85f2d4b4235f?placeholderIfAbsent=true&apiKey=e3b7908274d7429298c0e1d85455a352"
        alt="TedX Logo"
        className="object-contain shrink-0 max-w-full aspect-[4.52] w-[253px]"
      />
      <nav className="flex flex-wrap gap-10 items-center h-full max-md:max-w-full">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            {item}
          </a>
        ))}
        <CallToActionButton>
          Get tickets
        </CallToActionButton>
      </nav>
    </header>
  );
};

export default Navigation;
