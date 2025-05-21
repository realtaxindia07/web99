import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BannerWithForm from './components/BannerWithForm';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';

const AutoCarousel = lazy(() => import('./components/AutoCarousel'));
const RecentProjectsSection = lazy(() => import('./components/RecentProjectsSection'));
const TestimonialAutoCarousel = lazy(() => import('./components/TestimonialAutoCarousel'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <BannerWithForm />

        <Suspense fallback={<div>Loading carousel...</div>}>
          <AutoCarousel />
        </Suspense>

        <ServicesSection />

        <Suspense fallback={<div>Loading recent projects...</div>}>
          <RecentProjectsSection />
        </Suspense>

        <Suspense fallback={<div>Loading why choose us...</div>}>
          <WhyChooseUs />
        </Suspense>

        <p className="mainHeading">Proof of Our Impact</p>
        <p className="subPara">Trusted by Businesses Like Yours. Loved by Start-ups, trusted by Enterprises!</p>

        <Suspense fallback={<div>Loading testimonials...</div>}>
          <TestimonialAutoCarousel />
        </Suspense>
      </main>

      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
