import React, { useEffect, useRef } from 'react';
import './AutoCarousel.css';

const slides = [
  {
    href: '#',
    img: 'AutoCarousel/img1.webp',
    alt: 'Pari India'
  },
  {
    href: '#',
    img: 'AutoCarousel/img2.webp',
    alt: 'Insuzo'
  },
  {
    href: '#',
    img: 'AutoCarousel/img3.webp',
    alt: 'Scary Jeans'
  },
  {
    href: '#',
    img: 'AutoCarousel/img4.webp',
    alt: 'The Impassion Store'
  },
  {
    href: '#',
    img: 'AutoCarousel/img5.webp',
    alt: 'Yogesh Trading Company'
  },
  {
    href: '#',
    img: 'AutoCarousel/img6.webp',
    alt: 'The Patent Experts'
  }
];

const AutoCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  // Duplicate slides for seamless loop
  const loopSlides = [...slides, ...slides];

  return (
    <section className="auto-carousel" aria-label="Client Logos Carousel">
      <div className="carousel-container" ref={containerRef}>
        <div className="carousel-track">
          {loopSlides.map((slide, idx) => (
            <a href={slide.href} key={idx} aria-label={slide.alt} className="carousel-slide">
              <img src={slide.img} alt={slide.alt} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoCarousel;
