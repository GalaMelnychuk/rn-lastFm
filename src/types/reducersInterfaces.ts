export interface ITracks {
  trackName: string;
  artist: string;
  img: string;
  url: string;
}

export interface ITags {
  name: string;
  url?: string;
}

export interface IArtist {
  name: string;
  artistImg: string;
  tags: Array<ITags>;
  summary: string;
}

export interface ITrackInfo {
  name: string;
  artistImg: string;
}
