// RecentProjects.jsx
import React, { useEffect, useRef } from "react";
import "./RecentProjectsSection.css";
import VoiceAssistant from "./VoiceAssistance";

const projectData = [
  {
    url: "https://smartbrickz.in/",
    img: "AutoCarousel/img1.webp",
    alt: "Ambrosh Website",
  },
  {
    url: "https://digitalgrowthexperts.in/",
    img: "AutoCarousel/img2.webp",
    alt: "Clarkridge College Website",
  },
  {
    url: "https://vishwanathayurved.com/",
    img: "AutoCarousel/img3.webp",
    alt: "Kelly Search Ecommerce",
  },
  {
    url: "https://yamunaexpresswayplots.co.in/",
    img: "AutoCarousel/img4.webp",
    alt: "Unique Tohfaa Gift Store",
  },
];

const RecentProjectsSection = () => {
  const leftdirRef = useRef(null);
  const rightdirRef = useRef(null);

  useEffect(() => {
    const leftdir = leftdirRef.current;
    const rightdir=rightdirRef.current;
    let scrollAmountleft = 0;
    let scrollAmountright = 0;

    const leftscroll = () => {
      scrollAmountleft += 0.5;
      if (scrollAmountleft >= leftdir.scrollWidth / 2) {
        scrollAmountleft = 0;
      }
      leftdir.scrollLeft = scrollAmountleft;
      requestAnimationFrame(leftscroll);
    };
    const rightscroll = () => {
      scrollAmountright -= 0.5;
  if (scrollAmountright <= 0) {
    scrollAmountright = rightdir.scrollWidth / 2; 
  }
      rightdir.scrollLeft  = scrollAmountright;
      requestAnimationFrame(rightscroll);
    };
    requestAnimationFrame(leftscroll);
    requestAnimationFrame(rightscroll);
    
  }, []);

  const loopedProjects = [...projectData, ...projectData];

  return (
    <section className="recent-projects" aria-label="Our Recent Projects">
      <div className="container">
        <h2 className="main-heading">Our Recent Projects</h2>
        <p className="sub-paragraph">
          Our website development that transforms businesses into brands.
        </p>

        <div className="scroll-container" ref={leftdirRef}>
          <div className="scroll-track">
            {loopedProjects.map((project, i) => (
              <a
                className="project-card"
                href={project.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.alt}
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  loading="lazy"
                  className="project-img"
                />
                
              </a>
            ))}
          </div>
        </div>
        <div className="scroll-container" ref={rightdirRef}>
          <div className="scroll-track">
            {loopedProjects.map((project, i) => (
              <a
                className="project-card"
                href={project.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.alt}
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  loading="lazy"
                  className="project-img"
                />
                
              </a>
            ))}
          </div>
        </div>
        <VoiceAssistant/>
        <p>or</p>
<div style={{position:"relative"}}>
    {/* <!-- Elfsight Appointment Booking | Untitled Appointment Booking --> */}
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div className="elfsight-app-6d93a058-14c6-49f1-a4f6-d594f4a62d87" data-elfsight-app-lazy></div>
</div>
        <p className="bottom-caption">
          Join 100+ brands who launched their websites with us last year!
        </p>
      </div>
    </section>
  );
};

export default RecentProjectsSection;
