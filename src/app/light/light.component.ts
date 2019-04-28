import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  brightness: number;
  colorOn: boolean;
  slide: number;

  constructor(private colorService: ColorService) { }

  saturation = 0

  ngOnInit() {
    this.brightness = this.colorService.brightness
    this.saturation = this.colorService.saturation
  }

  setBrightness() {
    this.colorService.brightness = this.brightness
    console.log(this.colorService.brightness)
  }
  
  setSaturation() {
    this.colorService.saturation = 100 * Number(!this.colorOn)
    console.log(this.colorService.saturation)
  }

  setSlide() {
    this.colorService.slide = this.slide;
    console.log(this.colorService.slide)
  }



}
