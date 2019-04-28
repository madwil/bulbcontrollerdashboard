import { Component, OnInit } from '@angular/core';
import { ColorService} from '../color.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  title = 'BulbController';
  colors: number[] = [];

  constructor(private colorService: ColorService) { }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex)
    this.colorService.swap(event.previousIndex, event.currentIndex)
  }

  remove(i: number) {
    console.log("Removed " + i)
    this.colorService.remove(i)
  }

  add(i: number) {
    console.log("Added " + i)
    this.colorService.add(i)
  }

  update(i: number, value: any) {
    console.log(i)
    console.log(value)
    this.colorService.update(i, value)
  }

  ngOnInit() {
    const colorsObservable = this.colorService.getColors();
    colorsObservable.subscribe((colorData: number[]) => {
      this.colors = colorData;
    })
  }

}
