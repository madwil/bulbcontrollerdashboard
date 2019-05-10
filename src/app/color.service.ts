import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  colors = [
    'hsl(0, 100%, 50%)',
    'hsl(45, 100%, 50%)',
    'hsl(90, 100%, 50%)',
    'hsl(135, 100%, 50%)',
    'hsl(180, 100%, 50%)'
  ];
  split = 4;
  tempo = 95;
  colorlist = ""
  brightness = 100
  saturation = 100
  slide = 0;

  // submit (): Observable<JSON> {
  //   this.getColorsArray()
  //   var requestString =
  //   {
  //     Hue_check: true,
  //     hue: 150,
  //     sat: String(this.saturation),
  //     divisions: 2,
  //     separation: 0,
  //     brightness: String(this.brightness),
  //     bpm: String(this.tempo),
  //     beat: String(this.split),
  //     slide: String(this.slide),
  //     func: 'start',
  //     colorlist: this.colorlist
  //   }
  //   console.log(requestString)
  //   // var request = new XMLHttpRequest();
  //   // request.open('POST', 'http://localhost:3000/', true);
  //   // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  //   // request.send(requestString.toString());
  //   return this.http.post<JSON>("http://localhost:3000/", requestString, httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  submit(style: number) {
    this.getColorsArray()
    if (style == 0) {
      var requestString = "Hue_check=true&hue=150&sat=" + String(this.saturation) + "&divisions=2&separation=0&brightness=" + String(this.brightness) + "&bpm=" + String(this.tempo) + "&beat=" + String(this.split) + "&slide=" + String(this.slide) + "&func=start&colorlist=" + this.colorlist
    }
    else if (style == 1) {
      var requestString = "Hue_check=true&hue=150&sat=0&divisions=2&separation=0&brightness=0&bpm=" + String(this.tempo) + "&beat=" + String(this.split) + "&slide=" + String(this.slide) + "&func=start&colorlist=" + this.colorlist
    }
    console.log(requestString)
    var request = new XMLHttpRequest();
    request.open('POST', 'http://ec2-3-89-115-95.compute-1.amazonaws.com:3000/', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(requestString.toString());
  }

  shiftSplit(i: number) {
    this.split += i;
    if (this.split > 8) {
      this.split = 8;
    }
    if (this.split < 1) {
      this.split = 1;
    }
  }

  shiftBPM(i: number) {
    this.tempo += i;
    console.log(this.tempo)
  }

  constructor() { }

  getColors(): any {
    const colorsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.colors);
      }, 1000);
    });

    return colorsObservable;
  }

  getTempo(): any {
    const tempoObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.tempo);
      }, 1000);
    });

    return tempoObservable;
  }

  getColorsArray(): any {
    console.log(this.colors)
    this.colorlist = ""
    this.colors.forEach((value) => {
      this.colorlist = this.colorlist + "," + String(value.split("hsl(")[1].split(',')[0])
    })
    this.colorlist = this.colorlist.substring(1)
    console.log(this.colorlist)
  }

  swap(i: number, j: number) {
    console.log(i)
    console.log(j)
    const value = this.colors[i];
  }

  remove(i: number): any {
    const index = i;
    if (index > -1) {
      this.colors.splice(index, 1);
    }
  }

  add(i: number): any {
    this.colors.push('hsl(' + i % 360 + ', 100%, 50%)')
  }

  update(i: number, value: string) {
    this.colors[i] = value;
  }
}
