import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {
  tempo = 95;
  split = 4;


  constructor(private colorService: ColorService) { }

  ngOnInit() {
  }

  shiftBPM(i: number) {
    this.colorService.shiftBPM(i)
    this.tempo = this.colorService.tempo;
    console.log(this.tempo)
  }

  shiftSplit(i: number) {
    this.colorService.shiftSplit(i)
    this.split = this.colorService.split;
    console.log(this.split)
  }
}
