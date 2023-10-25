import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  filtro: string = "";

  constructor(private httpClient: HttpClient) {

    // httpClient es un objeto de una librería que se encarga de hacer operaciones con http
    this.users = this.httpClient.get('https://randomuser.me/api/?results=47').pipe(map((res: any) => res['results']));

  }

}
