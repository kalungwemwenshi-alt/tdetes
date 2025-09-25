/* Import Premium Google Fonts - Updated with Serif */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap');

/* CSS Variables for Consistent Theming */
:root {
  --primary-black: #000000;
  --primary-white: #ffffff;
  --primary-gold: #d4af37;
  --gold-hover: #b8941f;
  --dark-gold: #9d7c1a;
  --light-gray: #f8f9fa;
  --medium-gray: #6c757d;
  --dark-gray: #212529;
  --accent-gradient: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
  --gold-gradient: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
  --shadow-light: 0 2px 10px rgba(0, 0, 0, 0.08);
  --shadow-medium: 0 4px 20px rgba(0, 0, 0, 0.12);
  --shadow-heavy: 0 8px 40px rgba(0, 0, 0, 0.16);
  --border-radius: 12px;
  --border-radius-small: 8px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --max-width: 1200px;
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Cormorant Garamond', 'Georgia', 'Times New Roman', serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--dark-gray);
  background-color: var(--primary-white);
  overflow-x: hidden;
}

/* Premium Serif Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'helvetica', 'Georgia', 'Times New Roman', serif;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5em;
  color: var(--primary-black);
  letter-spacing: -0.01em;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 600;
}

h4 {
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  font-weight: 600;
}

p {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-weight: 400;
}

.lead {
  font-size: clamp(1.25rem, 2.5vw, 1.4rem);
  font-weight: 300;
  line-height: 1.6;
  color: var(--medium-gray);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.small {
  font-size: 0.9rem;
  color: var(--medium-gray);
  font-family: 'Inter', sans-serif;
}

.muted {
  color: var(--medium-gray);
  font-weight: 400;
}

/* Container and Layout */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* Header and Navigation */
header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  z-index: 1000;
  padding: 1rem 0;
  transition: var(--transition);
  width: 100%;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bolder !important;
  font-size: xx-large;
}

.logo {
  width: 50px;
  height: 50px;
  background: var(--gold-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--primary-white);
  font-size: 1.25rem;
  box-shadow: var(--shadow-light);
  font-family: 'Playfair Display', serif;
}
.logo img {
  height: 50px;   /* adjust as needed */
  width: 50px;
  border-radius: 50%; /* makes it circular */
}

/* Keep your existing nav styles */
nav {
  display: flex;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: var(--dark-gray);
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: var(--transition);
  padding: 0.5rem 0;
  font-family: 'Inter', sans-serif;
}

nav a:hover {
  color: var(--primary-gold);
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gold-gradient);
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

/* --- Responsive menu styles --- */
.nav-toggle {
  display: none; /* hidden on desktop */
  font-size: 2rem;
  background: none;
  border: none;
  color: var(--dark-gray);
  cursor: pointer;
}

/* Mobile view */
@media (max-width: 768px) {
  nav {
    display: none; /* hide links on mobile by default */
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  nav.show {
    display: flex; /* show when toggled */
  }

  .nav-toggle {
    display: block; /* show hamburger on mobile */
  }
}


/* Hero Section */
.hero {
  background: 
    linear-gradient(rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.6)), /* dark overlay */
    url("images/bannernu1.png") center/cover no-repeat; /* background image */
  color: var(--primary-white);
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
}


.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero .container {
  position: relative;
  z-index: 2;
}

.pill {
  display: inline-block;
  background: rgba(212, 175, 55, 0.2);
  border: 1px solid var(--primary-gold);
  color: var(--primary-gold);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  font-family: 'Inter', sans-serif;
}

.hero h1 {
  color: var(--primary-white);
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero .lead {
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* New Edge-to-Edge Marquee Banner */
.marquee-banner {
  background: var(--primary-gold);
  padding: 1rem 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  border-top: 1px solid var(--gold-hover);
  border-bottom: 1px solid var(--gold-hover);
}

.marquee {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: flex;
  animation: marqueeScroll 25s linear infinite;
  gap: 4rem;
}

.marquee-content span {
  color: black;
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  flex-shrink: 0;
}

@keyframes marqueeScroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Trusted Section - Fixed Auto-Scrolling */
.trusted-section {
  background: var(--accent-gradient);
  color: var(--primary-white);
  padding: 3rem 0;
  position: relative;
  width: 100%;
}

.trusted-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.trusted-section .container {
  position: relative;
  z-index: 2;
  text-align: center;
}

.trusted-section h2 {
  color: var(--primary-gold) !important;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

/* Fixed Logo Slider with Smooth Infinite Scroll */
.logo-slider {
  overflow: hidden;
  margin: 2rem auto 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  padding: 2rem 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  width: 100%;
}

.logo-track {
  display: flex;
  align-items: center;
  animation: logoScroll 20s linear infinite;
  width: calc(200px * 15); /* 5 logos × 3 sets × 200px width */
  gap: 0;
}

.logo-track img {
  width: 200px;
  height: 80px;
  object-fit: contain;
  opacity: 0.9;
  transition: var(--transition);
  flex-shrink: 0;
  margin-right: 2rem;
}

.logo-track img:hover {
  opacity: 1;
  transform: scale(1.05);
}

@keyframes logoScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-200px * 5 - 2rem * 5)); /* Move by one set of logos */
  }
}

/* Grid Layouts */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

/* Resources section grid layout */
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

/* Contact section grid layout */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 2rem;
  margin: 2rem 0;
  align-items: start;
}

/* Cards */
.card {
  background: var(--primary-white);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-light);
  border: 1px solid rgba(212, 175, 55, 0.1);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gold-gradient);
  transform: scaleX(0);
  transition: var(--transition);
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.card h3, .card h4 {
  color: var(--primary-black);
  margin-bottom: 1rem;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: var(--border-radius-small);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  font-family: 'Inter', sans-serif;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--gold-gradient);
  color: var(--primary-white);
  box-shadow: var(--shadow-light);
}

.btn-primary:hover {
  background: var(--gold-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.btn-ghost {
  background: transparent;
  color: var(--primary-gold);
  border: 2px solid var(--primary-gold);
}

.btn-ghost:hover {
  background: var(--primary-gold);
  color: var(--primary-white);
}

/* Sections */
section {
  padding: 4rem 0;
  width: 100%;
}

section:nth-child(odd):not(.hero):not(.trusted-section):not(.catalog-section):not(.marquee-banner) {
  background: var(--light-gray);
}

section h2 {
  text-align: center;
  margin-bottom: 3rem;
}

/* Hero Carousel */
.hero-carousel {
  margin: 3rem 0;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-heavy);
}

.slide {
  position: relative;
  display: block;
}

.slide img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.slide-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 3rem 2rem 2rem;
  color: var(--primary-white);
}

.slide-text h2 {
  color: var(--primary-white);
  margin-bottom: 0.5rem;
}

/* Media Section */
.media {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.video {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  transition: var(--transition);
}

.video:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-heavy);
}

.video iframe {
  border-radius: var(--border-radius);
}

/* Catalog Section */
.catalog-section {
  background: var(--accent-gradient);
  color: var(--primary-white);
  padding: 5rem 0;
}

.catalog-section h2 {
  color: var(--primary-gold) !important;
  text-align: center;
  margin-bottom: 3rem;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.book-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
}

.aboutcard {
  display: flex;
  flex-direction: column; /* stack items */
  align-items: center;    /* center horizontally */
}


.book-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-heavy);
}

.book-card img {
  width: 100%;
  max-width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius-small);
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-medium);
}

.aboutcard img {
  width: 300px;
  height: auto;
  object-fit: cover;
  align-content: center !important;
  border-radius: var(--border-radius-small);
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-medium);
}

.book-card h3 {
  color: var(--primary-white);
  margin-bottom: 1rem;
}

.book-card p {
  margin-bottom: 1.5rem;
}

/* Testimonials */
.testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.testimonial {
  background: var(--primary-white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  border-left: 4px solid var(--primary-gold);
  font-style: italic;
  position: relative;
  transition: var(--transition);
}

.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.testimonial::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 4rem;
  color: var(--primary-gold);
  font-family: 'Playfair Display', serif;
  line-height: 1;
}

/* About Section */
.about-section {
  background: var(--light-gray);
  padding: 5rem 0;
}

.about-section .container {
  max-width: 800px;
}

.about-section p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

/* Contact Forms */
form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

label {
  font-weight: 600;
  color: var(--primary-black);
  margin-bottom: 0.5rem;
  font-family: 'Inter', sans-serif;
}

input, textarea {
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius-small);
  font-size: 1rem;
  font-family: 'Cormorant Garamond', serif;
  transition: var(--transition);
  background: var(--primary-white);
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-gold);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

/* Main wrapper (floating bottom-right if needed) */
.whatsapp-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* Container to hold icon + text */
.whatsapp-container {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* spacing between icon and text */
}

/* WhatsApp text box (no pill) */
.whatsapp-text {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 0.75rem 1rem;
  font-size: 1.0rem;
  border-radius: 30px; /* normal rounded corners */
  background: #0ed467;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* WhatsApp icon (standalone circle with waves) */
.whatsapp-icon {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%; /* force circle */
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

/* Logo image inside circle */
.whatsapp-icon img {
  width: 28px;
  height: 28px;
  z-index: 2;
}

/* Wave / pulse animation */
.whatsapp-icon::before,
.whatsapp-icon::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(37, 211, 102, 0.4);
  z-index: 1;
  animation: ripple 2s infinite;
}

.whatsapp-icon::after {
  animation-delay: 1s;
}

@keyframes ripple {
  from {
    transform: scale(1);
    opacity: 0.6;
  }
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}


/* Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  backdrop-filter: blur(10px);
}

.modal-backdrop[aria-hidden="false"] {
  opacity: 1;
  visibility: visible;
}

.modal {
  background: var(--primary-white);
  padding: 3rem;
  border-radius: var(--border-radius);
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: var(--shadow-heavy);
  transform: scale(0.9);
  transition: var(--transition);
}

.modal-backdrop[aria-hidden="false"] .modal {
  transform: scale(1);
}

/* Footer */
footer {
  background: var(--primary-black);
  color: var(--primary-white);
  padding: 3rem 0 2rem;
  text-align: center;
  width: 100%;
}

footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

footer a {
  color: var(--primary-gold);
  text-decoration: none;
  transition: var(--transition);
}

footer a:hover {
  color: var(--gold-hover);
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
  }
  
  nav {
    gap: 1.5rem;
  }
  
  .hero {
    padding: 2rem 0;
  }
  
  .marquee-content span {
    font-size: 1rem;
  }

  .trusted-section {
    padding: 2rem 0;
  }
  
  .trusted-section h2 {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  
  .logo-slider {
    margin: 1.5rem auto 0;
    padding: 1.5rem 0;
  }
  
  .logo-track img {
    width: 150px;
    height: 60px;
    margin-right: 1.5rem;
  }
  
  .logo-track {
    width: calc(150px * 15 + 1.5rem * 15);
  }
  
  @keyframes logoScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-150px * 5 - 1.5rem * 5));
    }
  }
  
  section {
    padding: 3rem 0;
  }
  
  .grid-3 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .catalog-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .media {
    grid-template-columns: 1fr;
  }
  
  .testimonials {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  footer .container {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
 
  
  .container {
    padding: 0 1rem;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .modal {
    padding: 2rem;
    width: 95%;
  }
}



@media (max-width: 480px) {
  .marquee-content span {
    font-size: 0.9rem;
    gap: 2rem;
  }
  
  .logo-track img {
    width: 120px;
    height: 50px;
    margin-right: 1rem;
  }
  
  .logo-track {
    width: calc(120px * 15 + 1rem * 15);
  }
  
  @keyframes logoScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-120px * 5 - 1rem * 5));
    }
  }
  
  .testimonials {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .testimonial {
    padding: 1.5rem;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* Print Styles */
@media print {
  .modal-backdrop,
  .marquee-banner,
  nav {
    display: none !important;
  }
  
  body {
    background: white !important;
    color: black !important;
  }
  
  .hero {
    background: white !important;
    color: black !important;
  }
}

footer {
  padding: 20px;
  background: #000;   /* example */
  color: #fff;
  text-align: center;
}

footer .logos {
  display: flex;
  justify-content: center;  /* center them horizontally */
  align-items: center;      /* align vertically */
  gap: 20px;                /* spacing between logos */
  flex-wrap: wrap;          /* allow wrapping on small screens */
  margin-bottom: 20px;
}

.small2 {
  flex: 0 1 auto;  /* let logos size naturally */
}

.footer-logo2 {
  height: 40px;   /* adjust size */
  width: auto;
}


.small3 {
  display: flex;
  flex-direction: row; /* stack items vertically */
  align-items: center;    /* center image + text */
  text-align: center;
  width: auto;
}


.footer-logo2 {
  height: 80px;   /* control image size */
  width: auto;
  margin-bottom: 8px; /* spacing between image and text */
}
