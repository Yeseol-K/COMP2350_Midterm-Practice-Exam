import Artist from "./Artist";
import Song from "./Song";

//album have title(need getter, setter), year
//artist belong to Artist
//track from Songs

export default class Album {
  private _title: string;
  private _artist: Artist;
  private _year: number;
  private _songs: Song[];

  constructor(title: string, artist: Artist, year: number) {
    this._title = title;
    this._artist = artist;
    this._year = year;
    this._songs = [];
  }
  //getter method : bring the title value(string)
  get title(): string {
    return this._title;
  }
  //setter method : title value return to internal value
  //if value is not exist error
  set title(title: string) {
    if (title.length > 1) {
      this._title = title;
      return;
    }
    throw new Error("title error");
  }

  get artist() : Artist {
    return this._artist;
  }

  set artist(artist: Artist) {
    this._artist = artist;
  }

//Encapsulation
//get method returns the variable value
//set method sets the value
//private으로 숨겨서 public인 getter와 setter로 간접 접근, 클래스에 직접 접근을 막음 데이터보호(안정성?)
//단점 setter 객체 값이 바뀐 이유를 알 수 없음, 객체 분산으로 객체 구조변경시 다 수정해야함. 
//단점 getter 역시 변경에 취약
  get year(): number {
    return this._year;
  }

  set year(year: number) {
    if (year >= 1900) {
      this._year = year;
      return;
    }
    throw new Error("Invalid year");
  }

  get songs(): Song[] {
    return this._songs;
  }

//add track : song을 songs에 추가하는 역할
public addTrack(song: Song): void {
  this._songs.push(song);
  }
}

