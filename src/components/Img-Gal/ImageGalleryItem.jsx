import React from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const ImageGalleryItem = ({ id, largeImageURL, webformatURL }) => {
  const openModal = () => {
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="Large image ${id}">
    `);
    instance.show();
  };

  return (
    <GalleryItem onClick={openModal}>
      <GalleryImage src={webformatURL} alt={`Card ${id}`} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;