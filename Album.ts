import Song from "./Song";

export default class Album {
  private _title: string;
  private _releaseYear: number;
  private _song: Song[];

  constructor(title: string, releaseYear: number) {
    this._title = title;
    this._releaseYear = releaseYear;
    this._song = [];
  }
  public get title(): string {
    return this._title;;
  }
  public set title(title: string) {
    this._title = title;
  }
}

