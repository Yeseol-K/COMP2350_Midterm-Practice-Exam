import IImportable from "./Importable";
import Playlist from "./Playlist";

//playlistImporter importer type IImportable
export default class PlaylistImporter {
  private _importer: IImportable;

  constructor (importer: IImportable) {
    this._importer = importer;
  }

  importPlaylist(): Playlist {
    return this._importer.loadPlaylist();
  }
  
}