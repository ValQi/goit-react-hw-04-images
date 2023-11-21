import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageGallery } from './ImageGallery.styled';

const ImgGallery = ({ hits }) => {
  if (hits.length === 0) {
    return <p>No images found</p>;
  }

  return (
    <ImageGallery>
      {hits.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
        />
      ))}
    </ImageGallery>
  );
};

export default ImgGallery;