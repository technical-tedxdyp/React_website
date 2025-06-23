import React from 'react';
import CallToActionButton from './src/CallToActionButton';


const HeroSection = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-80 py-28 w-full text-xl min-h-[900px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bcc689c9cc68a61e6eb8ff51e8672917404c281?placeholderIfAbsent=true&apiKey=e3b7908274d7429298c0e1d85455a352"
        alt="TedX Event Logo"
        className="object-contain max-w-full aspect-[1.05] w-[300px]"
      />
      <h1 className="mt-12 text-6xl font-bold text-zinc-100 max-md:mt-10 max-md:max-w-full max-md:text-4xl text-center">
        <span style={{ fontWeight: 400 }}>Between</span>{" "}
        <span style={{
          fontFamily: 'Lora, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'rgba(245,222,179,1)'
        }}>
          Light
        </span>{" "}
        <span style={{ fontWeight: 400 }}>and</span>{" "}
        <span style={{
          fontFamily: 'Lora, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'rgba(136,136,136,1)'
        }}>
          Shadow
        </span>
        <br />
        <span style={{ fontWeight: 400 }}>Lies the Spectrum of Ideas</span>
      </h1>
      <p className="mt-12 text-zinc-400 max-md:mt-10 max-md:max-w-full text-center">
        An exploration of duality through the worlds of Kafka and Tolstoy
      </p>
      <CallToActionButton className="mt-12 max-md:mt-10">
        Get tickets
      </CallToActionButton>
    </main>
  );
};

export default HeroSection;
