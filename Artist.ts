import Album from "./Album";

export default class Artist {
  private _name: string;
  private _albums: Album[];

  constructor(name: string) {
    this._name = name;
    this._albums = [];
  }

  addAlbum(album: Album) {
    this._albums.push(album);
  }
};

