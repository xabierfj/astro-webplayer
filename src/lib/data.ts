import { colours } from "./colours";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  colour: (typeof colours)[keyof typeof colours];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    albumId: 1,
    title: "Poles Apart",
    colour: colours.moonlitNight,
    cover: "/covers/poles-apart.png",
    artists: ["Slowburn"],
  },
  {
    id: "2",
    albumId: 2,
    title: "Palette",
    colour: colours.mauveSunset,
    cover: "/covers/palette.png",
    artists: ["TIN", "Seeyouthere"],
  },
  {
    id: "3",
    albumId: 3,
    title: "The Realization",
    colour: colours.stormyTeal,
    cover: "/covers/the-realization.png",
    artists: ["Kinissue"],
  },
  {
    id: "4",
    albumId: 4,
    title: "The Legend of Orpheus",
    colour: colours.goldenBrown,
    cover: "/covers/orpheus.png",
    artists: ["Dimension 32"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Poles Apart",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Lightleaks",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Callisto",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "A Second Worth",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Midspring",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  },
  {
    "id": 6,
    "albumId": 1,
    "title": "Alissa",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  },
  {
    "id": 7,
    "albumId": 1,
    "title": "As It Was",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  },
  {
    "id": 8,
    "albumId": 1,
    "title": "New Light",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  },
  {
    "id": 9,
    "albumId": 1,
    "title": "Between Time",
    "image": "/covers/poles-apart.png",
    "artists": ["Slowburn"],
    "album": "Poles Apart",
    "duration": "1:57"
  }
]