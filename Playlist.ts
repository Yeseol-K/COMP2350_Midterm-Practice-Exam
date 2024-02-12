import Song from "./Song"

export default class Playlists {
  private _name: string;
  private _songList: Song[];

  constructor(name: string) {
    this._name = name;
    this._songList = [];
  }
  public get name(): string {
    return this._name;;
  }
  public set name(name: string) {
    this._name = name;
  }
}