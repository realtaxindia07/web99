import React from 'react';
import './ServicesSection.css'; // Optional: for styling

const services = [
  {
    bgColor: '#ffe8d3',
    img: 'AutoCarousel/img1.webp',
    alt: 'Website Designing & Development',
    title: 'Website Designing & Development',
    description:
      'Get a Powerful Website That Doesn’t Just Look Good — It Converts. Whether you\'re launching a new brand or revamping an old one, your website is your first impression — and we make it unforgettable. We blend creativity, technology, and strategy to deliver world-class websites. Whether you\'re a startup, a small business, or a growing e-commerce brand — we’ve got you covered.',
    href: '#website-designing-company',
  },
  {
    bgColor: '#f0dcff',
    img: 'AutoCarousel/img2.webp',
    alt: 'Ecommerce Website Designing',
    title: 'Ecommerce Website Designing',
    description:
      'Build an Online Store That Sells — Beautifully, Seamlessly, and Fast. Whether you\'re launching your first product or scaling to your 100th order, your ecommerce website is your most powerful sales tool. We help you build one that works like a conversion machine.',
    href: '#ecommerce-website-development',
  },
  {
    bgColor: '#f5f4ee',
    img: 'AutoCarousel/img3.webp',
    alt: 'Shopify Designing & Development',
    title: 'Shopify Designing & Development',
    description:
      'Launch Your Store on Shopify — Fast, Functional & Built to Sell. We build Shopify stores that not only look great but perform like a sales machine. Whether you\'re starting from scratch or scaling your existing store, we’re your go-to Shopify experts.',
    href: '#shopify-website-designing',
  },
  {
    bgColor: '#ffe8d3',
    img: 'AutoCarousel/img4.webp',
    alt: 'SEO & Digital Marketing',
    title: 'SEO & Digital Marketing',
    description:
      'More Traffic. More Leads. More Sales. Turn your website into your best-performing salesperson with our full-suite SEO and digital marketing solutions. Your customers are searching online. If your business isn\'t showing up, you\'re losing them to competitors. We help you: Rank on the first page of Google, Drive qualified traffic, Generate consistent leads, Build lasting online authority. No fluff. Just results.',
    href: '#seo-digial-marketing',
  },
];

const ServicesSection = () => {
  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="container">
        <header className="services-header text-center">
          <h2 id="services-heading">Our Services</h2>
          <p className="subtitle">
            Strategic designing, seamless functionality, and measurable success—Digital services,
            tailored just for you.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={index}
              className="service-card"
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="service-content">
                <div className="service-icon">
                  <img
                    src={service.img}
                    alt={service.alt}
                    loading="lazy"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.href} className="service-btn">
                    Get Started <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
