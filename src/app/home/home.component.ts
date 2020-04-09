import { Component, OnInit } from '@angular/core';
import { Homemodel } from './home.model';
import { HomeService } from '../home.service';
import Ws  from '@adonisjs/websocket-client';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  ws: any;
  feed: any;
  message: string[] = [];
  firebase: string[] = [];
  text: string;

   ngOnInit(): void {
     this.ws = Ws('ws://localhost:3333', {
       path: 'ArjRobot'
     });
     this.firebase.push('Datos enviados por firebase');
     this.ws.connect();
     this.feed = this.ws.subscribe("feed");

     this.feed.on('prueba', (data: any) => {
      this.message.push(data);
     })
  }

  adelante(param: string){
    this.feed.emit('adelante', param);
    this.message.push(param);
  }
  atras(param: string){
    this.feed.emit('atras', param);
    this.message.push(param);
  }
  izquierda(param: string){
    this.feed.emit('izquierda', param);
    this.message.push(param);
  }
  derecha(param: string){
    this.feed.emit('prueba', param);
    this.message.push(param);
  }
  Suscribirte()
  {
    this.feed.on('prueba', (data: any) => {
      this.message.push(data);
     })
  }
  Firebase()
  {
    this.feed.emit('firebase', this.text);
    this.firebase.push(this.text);
  }

}
