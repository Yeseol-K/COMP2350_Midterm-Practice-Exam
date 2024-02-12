export default class Song {
  private _title: string;

  constructor(title: string) {
    this._title = title;
  }
  public get title(): string {
    return this._title;;
  }
  public set title(title: string) {
    this._title = title;
  }
}
