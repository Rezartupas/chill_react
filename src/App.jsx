import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <Section title="Continue Watching" posters={[1, 2, 3, 4, 5]} />
        <Section title="Top Rated Movies and Series Today" posters={[10, 11, 12, 13, 14]} />
        <Section title="Trending Movies" posters={[19, 20, 1, 3, 5]} />
        <Section title="New Releases" posters={[14, 2, 4, 6, 8]} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
