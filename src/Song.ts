export default class Song {
  private _title: string;

  constructor(title: string) {
    this._title = title;
  }
  get title(): string {
    return this._title;;
  }
  //에러처리는 옵션
  set title(title: string) {
    if (title.length > 1) {
      this._title = title;
      return;
    }
    throw new Error("Invalid title length");
  }
}
