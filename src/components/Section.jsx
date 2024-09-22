import React from 'react';

const Section = ({ title, posters }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="posters">
        {posters.map((poster, index) => (
          <img
            key={index}
            src={`images/posters/${poster}.jpeg`}
            width="183"
            height="279"
            alt={`${title} Image`}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
