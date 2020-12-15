import React, { useState, useEffect } from 'react';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGift();
  }, []);

  const getGift = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=zUfJbZs5eHmmFl1W2Q4NnWj8tS2QdIPj';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  return (
    <div>
      <h3> {category} </h3>

      {images.map(img => (
        <GiftGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};
