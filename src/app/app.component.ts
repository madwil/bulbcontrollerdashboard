import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ColorService } from './color.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private colorService: ColorService) { }
  title = 'BulbController';

  req(): any {
    this.colorService.submit()
  }
}
