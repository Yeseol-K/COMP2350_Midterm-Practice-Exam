import Album from "./Album";
import Artist from "./Artist";
import IImportable from "./Importable";
import Playlist from "./Playlist";
import Song from "./Song";import { albums } from "./fakePlaylist.json";


export default class LocalImporter implements IImportable {
  private _path: string;

  constructor(path: string) {
    this._path = path;
  }

  loadPlaylist(): Playlist {
    console.log(`Your playlist at location ${this._path} will be loaded`);
    const newPlaylist: Playlist = new Playlist("Local Playlist");
    albums.forEach((album) => {
      const albumToAdd = new Album(
        album.name,
        new Artist(album.artist),
        album.year
      );
      album.tracks.forEach((track) => albumToAdd.addTrack(new Song(track)));
      newPlaylist.addAlbum(albumToAdd);
    });
    return newPlaylist;
  }
}
