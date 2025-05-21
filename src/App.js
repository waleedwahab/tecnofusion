import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import coderImage from "./assets/coderimage.png"
import oneplatform from "./assets/oneplatformbg.png"
import aiIcon from "./assets/AI-icon.png"
import webIcon from "./assets/webapp-icon.png"
import cloudIcon from "./assets/cloudnddevops-icon.png"
import uiuxIcon from "./assets/ui-ux-icon.png";
import customIcon from "./assets/custom-icon.png"
import section5 from "./assets/sectoin5.png"
import navbarlogo from "./assets/navbr-logo.png"
import innovicon from "./assets/innov-icon.png"
import realibiity from "./assets/relaiblityimage.png"
import scalabilityIcon from "./assets/scalibilty.png"
import choose3 from "./assets/choose3.png"
import choose2 from "./assets/choose2.png"
import choose1 from "./assets/choose1.png"
import case1 from "./assets/case1.png";
import case2 from "./assets/case2.png";
import case3 from "./assets/case3.png";
import testimonial1 from "./assets/testimonal1.png";
import testimonial2 from "./assets/testimonal2.png"
import testimonial3 from "./assets/testimonal3.png"
import prof1 from "./assets/prof1.png"
import prof2 from "./assets/prof2.png"
import prof3 from "./assets/prof3.png"
import emailicon from "./assets/emailicon.png"
import callicon from "./assets/phone-icon.png"
import location from "./assets/location11.png"

function App() {
  const [activeTab, setActiveTab] = useState("Innovation");

  const tabImages = {
    Innovation: coderImage,
    Reliability: realibiity,
    Scalability: scalabilityIcon,
  };

  const offerings = [
    {
      icon: aiIcon,
      title: 'AI & Machine Learning Solutions',
      desc: 'Intelligent systems that learn, adapt, and deliver insights from your data.',
    },
    {
      icon: webIcon,
      title: 'Web & Mobile App Development',
      desc: 'Responsive, intuitive applications that deliver exceptional user experiences.',
    },
    {
      icon: cloudIcon,
      title: 'Cloud & DevOps',
      desc: 'Scalable infrastructures and automated workflows for continuous delivery.',
    },
    {
      icon: uiuxIcon,
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces that engage users and drive conversions.',
    },
    {
      icon: customIcon,
      title: 'Custom Solutions',
      desc: 'Tailored software solutions designed specifically for your unique business needs.',
    },
  ];
  const testimonials = [
    {
      logo: testimonial1,
      quote:
        "The Technofuzion team understood our security concerns from day one. Their solution has given us peace of mind and a robust foundation for future growth.",
      author: {
        name: "Emma Wilson",
        title: "Lead Producer, BeatMix Studios",
        image: prof1,
      },
    },
    {
      logo: testimonial2,
      quote:
        "Technofuzion transformed our data capabilities beyond what we thought possible. Their AI solution has become central to our strategic decision-making.",
      author: {
        name: "DJ Maximus",
        title: "Lead Producer, BeatMix Studios",
        image:prof2,
      },
    },
    {
      logo: testimonial3,
      quote:
        "Our new website has completely changed how we operate. The user experience is seamless, and the analytics give us invaluable insights into our customers.",
      author: {
        name: "Jennifer Lee",
        title: "VP of Innovation, NextCore",
        image: prof3,
      },
    },
  ];
  return (
    <>
    <div className='main-div-bg-clr w-100'>
    <div className="container-fluid main-container pt-2">
    {/* Navigation Bar */}
    <nav className="navbar navbar-expand-lg border border-dark container pt-2 pb-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src = {navbarlogo} style = {{width:"106px", height:"39px"}}></img>
        </a>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Services</a>
          <a className="nav-link" href="#">Case Studies</a>
          <a className="nav-link" href="#">Contact</a>
          <button className="btn btn-outline-light">Book Consultation</button>
        </div>
      </div>
    </nav>

    {/* Main Content */}
    <div className="content text-center">
      <p className="small-text">Shaping sustainable products</p>
      <h1>WHERE TECHNOLOGY MEETS INNOVATION.</h1>
      <p className="subheading">
        We build intelligent, scalable, and future-ready software solutions.
      </p>
      <p className="consultation-text">Get a FREE Consultation</p>
      <button className="btn btn-light btn-custom">
        Let's Connect <span className="arrow">→</span>
      </button>
    </div>
  </div>



{/* second section */}
<div className="main-container1 text-center container">
      <div className="text-center about-us-label">About Us</div>
      <h2 className="text-center mission-title">Our Mission</h2>
      <p className="text-center mission-description">
        Technofuzion is a team of engineers, designers, and AI experts helping
        businesses build high-performance software products.
      </p>

      <div className="nav-tabs-section text-center mb-5">
        {["Innovation", "Reliability", "Scalability"].map((tab) => (
          <span
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="content-row mt-5">
        <div className="left-box">
          <div className="logo-box">
            <img src={tabImages[activeTab]} alt={`${activeTab} icon`} />
          </div>
          <h3>
            Engineers, <span className="highlight">Designers</span>, and AI experts
          </h3>
          <p>Pushing boundaries with cutting-edge solutions.</p>
          <button className="explore-button">Explore services →</button>
        </div>

        <div className="right-box">
          <img
            src={tabImages[activeTab]}
            alt={`${activeTab} display`}
            className="hero-image"
          />
        </div>
      </div>
    </div>

    {/* 3rd section */}
    <div className='sectiong-img mt-0 mb-0'>
    <div
      className="digital-section container w-100"
      style={{ backgroundImage: `url(${oneplatform})` }}
    >
      <div className="digital-content pt-3 pb-3">
        <h2>One platform. Ready to transform your digital presence?</h2>
        <p>
          Get paid faster, manage treasury and cash-flow easily, convert on your terms.
        </p>
        <button className="project-button">Start your Project</button>
      </div>
    </div>
    </div>
    {/* fourth section */}
    <div className="offer-section">
      <p className="offer-label">Services</p>
      <h2 className="offer-heading">What we’re Offering</h2>
      <p className="offer-subtext">
        Cutting-edge solutions tailored to transform your business and drive digital innovation.
      </p>
      <div className="offer-grid container">
        {offerings.map((item, idx) => (
          <div className="offer-card" key={idx}>
            <img src={item.icon} alt={item.title} className="offer-icon" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="learn-more">
              Learn More <span className="arrowoffering">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* section5 */}
    <div className='w-100 sectiong-img '>
    <div className='sectiong-img container w-100 ' >
      <img src = {section5} className='w-100'></img>
      </div>
    </div>

    {/* section6 */}
    <div className="why-choose-us-section text-center">
      <div className="container text-center">
        <div className="section-header text-center">
          <button className="feature-button text-center">Features</button>
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <p className="section-subtitle text-center">
            Choosing Technomic Solutions means choosing a team of experienced professionals dedicated to delivering innovative and highest quality tailored technology solutions and exceptional customer service to meet the unique needs of your business.
          </p>
        </div>
        <div className="row card-container">
          <div className="col-md-4">
            <div className="feature-card text-start">
              <div className="icon"><img src = {choose1} className='choose-icons'></img></div>
              <h5 className="card-title">Save Your Time</h5>
              <p className="card-text">
                Our innovative technology solutions can maximize efficiency, handle multiple tasks, streamline complex processes, and save time so that you can focus on your core business.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-start">
            <div className="icon"><img src = {choose2} className='choose-icons'></img></div>
              <h5 className="card-title">Affordable Price</h5>
              <p className="card-text">
                We provide cost effective technology solutions without sacrificing quality, with transparent pricing and no hidden fees, and work within your budget to provide the best value.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-start">
            <div className="icon"><img src = {choose3} className='choose-icons'></img></div>
              <h5 className="card-title">Best Strategy</h5>
              <p className="card-text">
                Our best strategy involves leveraging data-driven insights, conducting comprehensive market research, and opting a collaborative approach to customize strategies that drive success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* section7 */}


    <div className="case-studies-section">
      <div className="container">
        <div className="header d-flex justify-content-between align-items-center">
          <button className="tag">Case Studies</button>
          <a href="#" className="see-all">See all case studies →</a>
        </div>

        <h2 className="main-heading">Insights to get business moving farther, faster</h2>

        <div className="row case-list">
          <div className="col-md-4">
            <div className="case-card">
              <img src={case1} alt="TechCorp Global" className="case-img" />
              <h4 className="case-title">TechCorp Global</h4>
              <p className="case-subheading">Problem</p>
              <p className="case-text">Legacy data systems causing inefficiencies and preventing real-time analytics.</p>
              <p className="case-subheading">Our Solution</p>
              <p className="case-text">Custom AI-powered analytics platform with predictive modeling capabilities.</p>
              <p className="case-subheading">Result</p>
              <p className="case-text">43% increase in operational efficiency and 2.5x faster decision-making process.</p>
              <a href="#" className="view-project">View full Project →</a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="case-card">
              <img src={case2} alt="FinSecure Banking" className="case-img" />
              <h4 className="case-title">FinSecure Banking</h4>
              <p className="case-subheading">Problem</p>
              <p className="case-text">Vulnerable on-premise infrastructure with frequent security breaches.</p>
              <p className="case-subheading">Our Solution</p>
              <p className="case-text">Secure cloud migration with advanced threat detection and automated security protocols.</p>
              <p className="case-subheading">Result</p>
              <p className="case-text">Zero security incidents post-implementation and 99.99% uptime achievement.</p>
              <a href="#" className="view-project">View full Project →</a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="case-card">
              <img src={case3} alt="EcoSmart Solutions" className="case-img" />
              <h4 className="case-title">EcoSmart Solutions</h4>
              <p className="case-subheading">Problem</p>
              <p className="case-text">Outdated website with poor user experience and low conversion rates.</p>
              <p className="case-subheading">Our Solution</p>
              <p className="case-text">Responsive, user-centric web platform with integrated e-commerce and analytics.</p>
              <p className="case-subheading">Result</p>
              <p className="case-text">189% increase in conversions and 67% improvement in user engagement metrics.</p>
              <a href="#" className="view-project">View full Project →</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* section8 */}
    <div className="testimonials-section">
      <div className="container">
        <button className="tag">Testimonials</button>
        <h2 className="heading">
          Real stories. Real results. See what our customers are saying
        </h2>
        <p className="subheading">
          Hear what our clients have to say about working with Technofuzion.
        </p>

        <div className="testimonial-scroll">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.logo} alt="Logo" className="testimonial-logo" />
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <img src={t.author.image} alt={t.author.name} className="author-img" />
                <div>
                  <div className="author-name">{t.author.name}</div>
                  <div className="author-title">{t.author.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* section9 */}
    <div className="consultation-container d-flex align-items-center justify-content-center">
      <div className="consultation-box d-flex gap-5 flex-wrap container" >
        <div className="consultation-left p-4 ms-5">
          <button className="btn contact-btn mb-3">Contact Us</button>
          <h2 className="title">Book Your Free 30 Minutes Consultation With Us</h2>
          <p className="subtitle">
            Got an app idea & need to get it validated? Let us give you our honest opinion.
          </p>
          <p className="info">
           <span> <img src ={emailicon} className='small-icons'/>  info@technofuzion.com</span> 
          </p>
          <p className="info">
            <span> <img src ={callicon}  className='small-icons' />  +1 (415) 555-2671 </span>
          </p>
          <p className="info">
             <span> <img src ={location}  className='small-icons' />  123 Innovation Drive Tech District, San Francisco CA 94105, USA </span>
          </p>
        </div>
          
        <div className="consultation-right p-4 ">
          
          <form className="form-box ">
            <label className="form-label">I’m interested in...</label>
            <div className="btn-group mb-3 interest-buttons">
              <button type="button" className="btn btn-interest active">Mobile Development</button>
              <button type="button" className="btn btn-interest">Web Development</button>
              <button type="button" className="btn btn-interest">UI/UX Design</button>
              <button type="button" className="btn btn-interest">Staff Augmentation</button>
              <button type="button" className="btn btn-interest">Others</button>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
               <span>  <input type="email" className="form-control" placeholder="Email" /> </span>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Company" />
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="3" placeholder="Tell us about your project"></textarea>
            </div>
            <button type="submit" className="btn btn-send">Send</button>
          </form>
          </div>
        
      </div>
    </div>

    {/* section10 */}

    <footer className="footer-container">
      <div className="footer-wave"></div>
      <div className="footer-content container">
        <div className="footer-left">
         <img  className ='pb-2' src = {navbarlogo} style = {{width:"106px", height:"39px"}}></img>
          <p className="footer-address mt-1 ">
            123 Innovation Drive Tech District, San Francisco CA 94105, USA
          </p>
          <ul className="footer-links sfooterlinks mt-5">
            <li className='li-border'>FAQ's <span className="arrowf">→</span></li>
            <li  className='li-border'>Privacy policy <span className="arrowf">→</span></li>
            <li  className='li-border'>Terms of use <span className="arrowf">→</span></li>
          </ul>
          <p className="footer-copy">
            Copyright © 2025 <span className="bold">Technofuzion</span><br />
            All Rights Reserved
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Our Services</h5>
            <ul>
              <li>AI & Machine Learning</li>
              <li>Web & Mobile Development</li>
              <li>Clouds & Devops</li>
              <li>UI/UX Design</li>
              <li>Data Engineering</li>
            </ul>
            <div className="footer-social">
              <button className="social-btn">X</button>
              <button className="social-btn">in</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
</div>

    </>
  );
}

export default App;
