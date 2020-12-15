import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      {loading && <p>Loading</p>}

      <div className="card-grid">
        {images.map(img => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
