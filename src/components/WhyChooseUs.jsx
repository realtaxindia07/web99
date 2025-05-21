// WhyChooseUs.jsx
import React from "react";
import "./WhyChooseUs.css"; // Custom CSS

// Card Component
const Card = ({ icon, title, content, isSolution }) => (
  <div className={`cardSec grid cardGridSec gap20 ${isSolution ? "solution" : "problem"}`}>
    <div className="iconSec flex alignCenter justifyCenter">
      <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
    </div>
    <div className="cardTextSec">
      <p className="cardInSec">{title}</p>
      <p className="cardInPara">{content}</p>
    </div>
  </div>
);

// Main Component
const WhyChooseUs = () => {
  return (
    <div className="why_choose_us_3">
      <div className="width90 maxWidth700 floatCenter textCenter">
        <p className="mainHeading">Why Choose Website 99?</p>
        <p className="subPara line2">
          We don’t just build websites – we create powerful digital experiences that drive results. From stunning designs to seamless functionality, we deliver performance, security, and long-term value—all in one affordable package. Let’s build a website that gets you clients.
        </p>
      </div>
      <div className="width90 maxWidth1300 floatCenter">
        <div className="grid grid2 gap40">
          <div className="leftSec">
            <p className="cardHeading textCenter">The Problem</p>
            <p className="cardPara textCenter">
              Getting a low-cost, theme-based website might seem like a bargain, but it often comes with hidden costs: Poor performance, Lack of branding, and No long-term value. Before you invest, ask yourself these crucial questions:
            </p>
            {/* Problem Cards */}
            <Card
              icon="fa-xmark"
              title="Is it an investment or an expense?"
              content="A low-cost, theme-based website might seem like a great deal today, but in the long run, it’s nothing more than a costly expense."
            />
            <Card
              icon="fa-xmark"
              title="Will it actually work for your business?"
              content="A great website isn’t just built on code and design—it’s built on understanding your business needs and goals."
            />
            <Card
              icon="fa-xmark"
              title="Will it bring more customers?"
              content="A poorly developed, theme-based website struggles to attract customers and undermines your brand’s credibility."
            />
          </div>

          <div className="rightSec" >
            <p className="cardHeading textCenter">The Solution</p>
            <p className="cardPara textCenter">
              We design stunning, high-performing websites that drive traffic, engage customers, and grow your business. From jaw-dropping designs to seamless functionality, we craft powerful digital experiences.
            </p>
            {/* Solution Cards */}
            <Card
              icon="fa-check"
              title="Investment that delivers results for business!"
              content="A professionally designed custom website is an investment that builds your brand, attracts customers, and drives real results."
              isSolution
            />
            <Card
              icon="fa-check"
              title="Your most powerful tool for online growth!"
              content="We understand your business needs and goals, ensuring the website supports growth and customer engagement."
              isSolution
            />
            <Card
              icon="fa-check"
              title="Websites that bring customers, not just clicks!"
              content="We design websites to create meaningful user experiences, focusing on conversions and long-term business growth."
              isSolution
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhyChooseUs;
