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
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatExpansionModule, MatDividerModule, MatSliderModule, MatRadioModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TempoComponent } from './tempo/tempo.component';
import { LightComponent } from './light/light.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'colors', component: ColorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ColorComponent,
    TempoComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, MatTableModule, DragDropModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatInputModule, MatExpansionModule, MatDividerModule, ColorPickerModule, MatSliderModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
