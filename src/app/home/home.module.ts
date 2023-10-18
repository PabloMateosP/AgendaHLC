import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
//Añadimos esta nueva línea para importar el HttpClient
import {HttpClientModule} from '@angular/common/http';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    //Añadimos esta nueva línea para importar el HttpClient
    HttpClientModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
