import Album from "./Album";
import Song from "./Song"

//playlist have name(getter/setter)
//songs from Song(getter/setter)
//addAlbum and list of songs

export default class Playlists {
  private _name: string;
  private _songs: Song[];

  constructor(name: string) {
    this._name = name;
    this._songs = [];
  }

  get name(): string {
    return this._name;;
  }
  set name(name: string) {
    if (name.length > 1) {
      this._name = name;
      return;
    }
    throw new Error("Invalid name length");
  }
  
//songs loop to get song list
  public addAlbum(album: Album): void {
    const { songs } = album;
    songs.forEach((song: Song) => {
      this._songs.push(song);
    });
  }
}