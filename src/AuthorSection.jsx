import React from 'react';

const AuthorSection = ({
  author,
  quote,
  description,
  imageSrc,
  imageAlt,
  variant = 'dark',
  imagePosition = 'left'
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-stone-300' : 'text-zinc-800';
  const titleColor = isDark ? 'text-zinc-100' : 'text-zinc-900';
  const quoteColor = isDark ? 'text-stone-300' : 'text-zinc-800';

  const imageElement = (
    <img
      src={imageSrc}
      alt={imageAlt}
      className="object-contain self-stretch my-auto aspect-square min-w-60 w-[500px] max-md:max-w-full"
    />
  );

  const contentElement = (
    <div className="flex flex-col items-center self-stretch px-0.5 my-auto rounded-none min-w-60 w-[588px] max-md:max-w-full">
      <h2 className={`text-6xl font-semibold text-center ${titleColor} max-md:text-4xl`}>
        {author}
      </h2>
      <blockquote className={`text-2xl ${quoteColor} text-center mt-2`}>
        {quote}
      </blockquote>
      <p className={`self-stretch mt-5 text-lg text-center ${textColor} max-md:max-w-full`}>
        {description}
      </p>
    </div>
  );

  return (
    <section className={`flex overflow-hidden flex-wrap gap-10 justify-between items-center px-32 ${isDark ? 'py-24' : 'py-36'} w-full max-md:px-5 ${isDark ? '' : 'max-md:py-24'} max-md:max-w-full`}>
      {imagePosition === 'left' ? (
        <>
          {imageElement}
          {contentElement}
        </>
      ) : (
        <>
          {contentElement}
          {imageElement}
        </>
      )}
    </section>
  );
};

export default AuthorSection;
