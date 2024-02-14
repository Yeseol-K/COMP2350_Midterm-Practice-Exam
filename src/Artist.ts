import Album from "./Album";

//artist have name and albums
export default class Artist {
  private _name: string;
  private _albums: Album[];

  constructor(name: string) {
    this._name = name;
    this._albums = [];
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.length > 1) {
      this._name = name;
      return;
    }
    throw new Error("name error");
  }
  
//add an album
  public addAlbum(album: Album) {
    this._albums.push(album);
  }
};

