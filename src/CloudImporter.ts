import IImportable from "./Importable";
import Playlist from "./Playlist";

export default class CloudImporter implements IImportable {
  private _path: string;

  constructor(path: string) {
    this._path = path;
  }

  loadPlaylist(): Playlist {
    console.log(`Importing playlist from ${this._path}`);
    const newPlaylist: Playlist = new Playlist("Cloud Playlist");
    return newPlaylist;
  }
}
