import Album from "./Album";
import Playlist from "./Playlist";
import Song from "./Song";

export default class User {
  private _username: string;
  private _password: string;
  private _playlists: Playlist[];
  private _albums: Album[];

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this._playlists = [];
    this._albums = [];
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    if (username.length > 1) {
      this._username = username;
      return;
    }
    throw new Error("Invalid title length");
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    if (password.length > 5) {
      this._password = password;
      return;
    }
    throw new Error("Password not strong enough");
  }

  public addPlaylist(playlist: Playlist): void {
    this._playlists.push(playlist);
  }

  public addAlbum(album: Album): void {
    this._albums.push(album);
  }

  public getSongs(): Song[] {
    let songs: Song[] = [];
    this._albums.forEach((album: Album) => {
      const extractedSongs: Song[] = album.songs;
      songs = songs.concat(extractedSongs);
    });

    return songs;
  }

  public getPlaylists(): Playlist[] {
    return this._playlists;
  }

  public getAlbums(): Album[] {
    return this._albums;
  }
}
