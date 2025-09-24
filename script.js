/* Import Premium Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--dark-gray);
  background-color: var(--primary-white);
  overflow-x: hidden;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0.5em;
  color: var(--primary-black);
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
}

h4 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 500;
}

p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.lead {
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  font-weight: 300;
  line-height: 1.6;
  color: var(--medium-gray);
  margin-bottom: 1.5rem;
}

.small {
  font-size: 0.875rem;
  color: var(--medium-gray);
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
}

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

/* Hero Section */
.hero {
  background: var(--accent-gradient);
  color: var(--primary-white);
  padding: 4rem 0 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
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

.hero > div {
  position: relative;
  z-index: 2;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
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

/* Trusted Section */
.trusted-section {
  background: var(--accent-gradient);
  color: var(--primary-white);
  padding: 3rem 0;
  border-top: none;
  position: relative;
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

.trusted-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.trusted-section h2 {
  color: var(--primary-gold) !important;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.logo-slider {
  overflow: hidden;
  margin: 0 auto;
}

.logo-track {
  display: flex;
  gap: 3rem;
  align-items: center;
  animation: scroll 30s linear infinite;
}

.logo-track img {
  height: 60px;
  width: auto;
  opacity: 0.8;
  transition: var(--transition);
  filter: brightness(0) invert(1);
}

.logo-track img:hover {
  opacity: 1;
  filter: brightness(0) invert(1);
  transform: scale(1.1);
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Grid Layouts */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
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
}

section:nth-child(even) {
  background: var(--light-gray);
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
  color: #8B4513 !important;
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
  font-size: 1.125rem;
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
}

input, textarea {
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius-small);
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: var(--transition);
  background: var(--primary-white);
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-gold);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

/* WhatsApp Float */
.whatsapp-wrapper {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.whatsapp-float {
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-medium);
  transition: var(--transition);
  animation: pulse 2s infinite;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-heavy);
}

.whatsapp-float img {
  width: 32px;
  height: 32px;
}

.whatsapp-text {
  background: var(--primary-black);
  color: var(--primary-white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  text-decoration: none;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(20px);
  transition: var(--transition);
}

.whatsapp-wrapper:hover .whatsapp-text {
  opacity: 1;
  transform: translateX(0);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
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
    padding: 2rem 0 1.5rem;
  }
  
  .hero-carousel {
    margin: 2rem 0;
  }
  
  .slide img {
    height: 300px;
  }
  
  .slide-text {
    padding: 2rem 1.5rem 1.5rem;
  }

  .trusted-section {
    padding: 2rem 0;
  }
  
  section {
    padding: 3rem 0;
  }
  
  .grid-3 {
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
  
  .whatsapp-wrapper {
    bottom: 20px;
    right: 20px;
  }
  
  .whatsapp-float {
    width: 50px;
    height: 50px;
  }
  
  .whatsapp-float img {
    width: 28px;
    height: 28px;
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
  .logo-track {
    gap: 2rem;
  }
  
  .logo-track img {
    height: 40px;
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
  .whatsapp-wrapper,
  .modal-backdrop,
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