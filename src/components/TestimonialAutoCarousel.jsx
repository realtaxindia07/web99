
import React, { useEffect, useRef, useState } from 'react';
import './TestimonialAutoCarousel.css';

const testimonials = [
  {
    name: 'Utkarsh Bhardwaj',
    date: '15 Days Ago',
    comment: 'Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.',
    avatar: 'AutoCarousel/img1.webp',
  },
  {
    name: 'Aniket B',
    date: '6 Months Ago',
    comment: 'They have constantly given me quality work and have seen my vision and made it a reality.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.',
    avatar: 'AutoCarousel/img2.webp',
  },
  {
    name: 'Gurpreet Kahlon',
    date: '25 Days Ago',
    comment: 'Clean, fast, professional website for my business — exactly what I had in mind.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.',
    avatar: 'AutoCarousel/img3.webp',
  },
  {
    name: 'Pushpinder Saron',
    date: '90 Days Ago',
    comment: 'Thanks to Website 99, our business now has a proper website and we’re getting enquiries almost daily.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.',
    avatar: 'AutoCarousel/img4.webp',
  },
  {
    name: 'Saini News',
    date: '1 Month Ago',
    comment: 'Amazed with quality of work in such an affordable price. Thank you guys!Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.Amazing company for website development. Work was great, excellent customer service. If I had an option, I would have given them 10 stars.',
    avatar: 'AutoCarousel/img5.webp',
  }
];

const TestimonialAutoCarousel = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 0.5;

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    let animationFrameId;
    let lastInteractionTime = Date.now();

    const autoScroll = () => {
      const now = Date.now();
      if (!isPaused && now - lastInteractionTime > 2000) {
        scrollAmount = container.scrollLeft + scrollSpeed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleScrollLeft = () => {
    const container = containerRef.current;
    setIsPaused(true);
    container.scrollBy({ left: -300, behavior: 'smooth' });
    resetPause();
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    setIsPaused(true);
    container.scrollBy({ left: 300, behavior: 'smooth' });
    resetPause();
  };

  const resetPause = () => {
    const timeout = setTimeout(() => {
      setIsPaused(false);
    }, 3000); // Resume auto-scroll after 3 seconds
    return () => clearTimeout(timeout);
  };

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonial-auto-carousel" aria-label="Client Testimonials Carousel">
      <button className="carousel-btn left" onClick={handleScrollLeft}>‹</button>
      <div className="testimonial-carousel-container" ref={containerRef}>
        <div className="testimonial-carousel-track">
          {loopTestimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-profile">
                <img src={item.avatar} alt={item.name} loading="lazy" className="avatar" />
                <div>
                  <p className="name">{item.name}</p>
                  <p className="date">{item.date}</p>
                </div>
              </div>
              <div className="testimonial-stars" aria-label="5 star rating">
                {'★'.repeat(5)}
              </div>
              <p className="testimonial-comment">"{item.comment}"</p>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-btn right" onClick={handleScrollRight}>›</button>
    </section>
  );
};

export default TestimonialAutoCarousel;
