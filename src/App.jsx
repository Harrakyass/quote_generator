import { useState } from "react";
import TrendingList from './components/TrendingList'

export default function App() {
  const animeArray = [
    {
      title: 'One Piece',
      releaseYear: 1999,
      imageUrl: 'https://i.pinimg.com/736x/bd/c8/5b/bdc85b9934b7ca64c361642755c9fc58.jpg'
    },
     {
       title: 'Sword Art Online',
       releaseYear: 2012,
       imageUrl: 'https://i.pinimg.com/736x/cc/10/0a/cc100a75c76bda537dc35b1658b7809d.jpg'
     },
    {
      title: 'Bleach',
      releaseYear: 2004,
      imageUrl: 'https://i.pinimg.com/736x/4d/71/22/4d7122df33a1396f2d2c0c51589a8f6b.jpg'
    },
    {
      title: 'Wotakoi',
      releaseYear: 2018,
      imageUrl: 'https://i.pinimg.com/736x/a7/a7/cc/a7a7cc215476e3684eea2454392b7cd2.jpg'
    },
    {
      title: 'Sousou no Frieren',
      releaseYear: '2023',
      imageUrl: 'https://i.pinimg.com/736x/c4/5f/12/c45f1218b08fbe5f1150bdc5f94c8d79.jpg'
    },
    {
      title: 'Grand Blue',
      releaseYear: 2018,
      imageUrl: 'https://i.pinimg.com/1200x/38/81/fd/3881fd8965b057b48b63531bc2c30adc.jpg'
    },
    {
      title: 'ShangriLa Frontier', 
      releaseYear: 2018,
      imageUrl: 'https://i.pinimg.com/736x/f7/9e/5a/f79e5af3a0d49edc3cfb40a12f8d1433.jpg'
    }
  ];
  const [animeData, setAnimeData] = useState(animeArray);

  // code here 💖

  return <TrendingList animes={animeData}/>
}
