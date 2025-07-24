"use client";

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="company-info">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, where green dreams come to life! We are
            your premier destination for beautiful, healthy houseplants that
            transform any space into a lush paradise. With over 20 years of
            experience in plant care and cultivation, we carefully select each
            plant to ensure you receive only the finest quality specimens.
            Whether you're a seasoned plant parent or just beginning your green
            journey, our diverse collection of indoor plants, succulents, and
            flowering varieties will help you create the perfect botanical
            sanctuary in your home.
          </p>
          <button className="get-started-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
