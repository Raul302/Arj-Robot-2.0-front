import { Injectable } from '@angular/core';
import { Ws } from '@adonisjs/websocket-client';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  private ws = Ws('ws://localhost:3333');

  public connect()
  {
     this.ws.connect();
  }
}
