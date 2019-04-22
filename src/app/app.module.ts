// defaults
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// routing
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColorComponent } from './color/color.component';

// mine
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatExpansionModule, MatDividerModule, MatSliderModule } from '@angular/material';
import { ColorPickerModule } from 'ngx-color-picker';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colors', component: ColorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, MatButtonModule, MatInputModule, MatExpansionModule, MatDividerModule, ColorPickerModule, MatSliderModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
