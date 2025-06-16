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
        {/* <!-- Elfsight AI Chatbot | Untitled AI Chatbot --> */}
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div className="elfsight-app-f3911cbf-692e-4fdc-b479-10f0adb57c62" data-elfsight-app-lazy></div>
{/* <!-- Elfsight WhatsApp Chat | Untitled WhatsApp Chat --> */}
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div className="elfsight-app-dd2938bc-7e11-4e34-996d-413794ac47fb" data-elfsight-app-lazy></div>
      </Suspense>
    </>
  );
}

export default App;
