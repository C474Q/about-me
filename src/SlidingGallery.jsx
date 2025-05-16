import React from 'react';
import './SlidingGallery.css'; // Import the CSS file

const SlidingGallery = ({ items }) => {
  return (
    <div className="sliding-gallery-container">
      {items.map((item, index) => (
        <div key={index} className="sliding-gallery-item">
          {item.endsWith('.mp4') ? (
            <video src={item} controls className="sliding-gallery-media" />
          ) : (
            <img src={item} alt={`Battlebot ${index + 1}`} className="sliding-gallery-media" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SlidingGallery;