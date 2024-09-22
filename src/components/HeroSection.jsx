import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Ted Lasso</h1>
        <p>
          Ted Lasso, seorang pelatih sepak bola perguruan tinggi Amerika, secara tak terduga direkrut 
          untuk melatih tim sepak bola fiksi Liga Utama Inggris, AFC Richmond, meskipun tidak memiliki 
          pengalaman sebelumnya melatih sepak bola.
        </p>
        <div className="hero-buttons">
          <button>Mulai</button>
          <button>Lihat Selengkapnya</button>
          <button>18+</button>
        </div>
        <div className="volume-control">
          <label htmlFor="volume">Volume</label>
          <input type="range" id="volume" name="volume" min="0" max="100" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
