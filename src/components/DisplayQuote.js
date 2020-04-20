import React from 'react';

function DisplayQuote({ quote }) {
  return (
    <div className="DisplayQuote">
      <img
        src={quote.image}
        alt={quote.character}
      />
      <figcaption>
      <cite>{quote.character}</cite>
          <blockquote>{quote.quote}</blockquote>
      </figcaption>
    </div>
  );
};

export default DisplayQuote;