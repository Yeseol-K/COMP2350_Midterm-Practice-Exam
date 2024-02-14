import Playlist from "./Playlist";

//importer has loadPlaylist
export default interface IImportable {
  loadPlaylist(): Playlist;
}
