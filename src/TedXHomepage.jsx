import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AuthorSection from './AuthorSection';

const TedXHomepage = () => {
  return (
    <div className="overflow-hidden bg-stone-950">
      <Navigation />
      <HeroSection />
      <AuthorSection
        author="KAFKA"
        quote={"\"I am a cage, in search of a bird.\""}
        description="Franz Kafka's writing dives into the shadows of the human mind — surreal, unsettling, and deeply psychological. His stories often explore fear, alienation, and the absurdity of modern life, pulling readers into dreamlike worlds where reality feels fragile."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7e5f1a3fe5f51ef0859dc00ebf37732d0c1b3f94?placeholderIfAbsent=true&apiKey=e3b7908274d7429298c0e1d85455a352"
        imageAlt="Franz Kafka portrait"
        variant="dark"
        imagePosition="left"
      />
      <AuthorSection
        author="Tolstoy"
        quote={"\"The sole meaning of life is to serve humanity.\""}
        description="Leo Tolstoy's works reflect the light of humanity — thoughtful, moral, and deeply emotional. His stories portray real people facing real choices, filled with rich detail and a profound search for truth, love, and the meaning of life."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc136151ba068be2e5741919820d3d87321a619?placeholderIfAbsent=true&apiKey=e3b7908274d7429298c0e1d85455a352"
        imageAlt="Leo Tolstoy portrait"
        variant="light"
        imagePosition="right"
      />
    </div>
  );
};

export default TedXHomepage;
