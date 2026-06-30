import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Instagramme() {
  return (
    <ImageList sx={{ width: 450, height: "full" }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: './assets/images/instagram1.png.webp',
    title: 'image1',
  },
  {
     img: './assets/images/instagram2.png.webp',
    title: 'image2',
  },
  {
     img: './assets/images/instagram3.png.webp',
    title: 'image3',
  },
  {
     img: './assets/images/instagram4.png.webp',
    title: 'image4',
  },
  {
     img: './assets/images/instagram5.png.webp',
    title: 'image5',
  },
  {
     img: './assets/images/instagram6.png.webp',
    title: 'image6',
  },
]