import { IMusicItem, ISongItem, ISongPlaying } from "../types";
import albumImage from "./album-image.jpg";
import heroAlbum from "./hero-album.jpg";

export const albumInformation: IMusicItem = {
  id: "1",
  type: "album",
  title: "For Every Heart",
  image: heroAlbum,
  artistsOrOwner: ["Jamala"],
  year: 2011,
  label: "Enjoy! Records",
  numberItems: 12,
};

export const albumTracks: ISongItem[] = [
  {
    id: "1",
    track: 1,
    title: "For Every Heart",
    artists: ["Jamala"],
    length: 218,
  },
  {
    id: "2",
    track: 2,
    title: " One More Try",
    artists: ["Jamala"],
    length: 259,
  },
  {
    id: "3",
    track: 3,
    title: " You're Made of Love",
    artists: ["Jamala"],
    length: 237,
  },
  {
    id: "4",
    track: 4,
    title: "It's Me, Jamala ",
    artists: ["Jamala"],
    length: 199,
  },
  {
    id: "5",
    track: 5,
    title: " Alas",
    artists: ["Jamala"],
    length: 277,
  },
  {
    id: "6",
    track: 6,
    title: " In My Shoes",
    artists: ["Jamala"],
    length: 214,
  },
  {
    id: "7",
    track: 7,
    title: "Without You",
    artists: ["Jamala"],
    length: 300,
  },
  {
    id: "8",
    track: 8,
    title: " Sing It Out",
    artists: ["Jamala"],
    length: 223,
  },
  {
    id: "9",
    track: 9,
    title: " Find Me",
    artists: ["Jamala"],
    length: 279,
  },
  {
    id: "10",
    track: 10,
    title: " I See You Every Night",
    artists: ["Jamala"],
    length: 206,
  },
  {
    id: "11",
    track: 11,
    title: "Pengereden ",
    artists: ["Jamala"],
    length: 181,
  },
  {
    id: "12",
    track: 12,
    title: "Smile ",
    artists: ["Jamala"],
    length: 192,
  },
];

export const songPlaying: ISongPlaying = {
  id: "1",
  title: "О Мамо ",
  artists: ["Сальто Назад "],
  length: 213,
  image: albumImage,
};
