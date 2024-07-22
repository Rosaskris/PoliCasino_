import React from "react";

const GalleryGrid = ({ mediaItems }) => {
  return (
    <div className="gallery-grid">
      {mediaItems.map((item, index) => (
        <div
          key={index}
          className={`gallery-item ${
            item.size === 'large' ? 'item-large' :
            item.size === 'medium' ? 'item-medium' :
            'item-small'
          }`}
        >
          {item.isVideo ? (
            <video controls>
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item.src} alt={item.caption} />
          )}
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
