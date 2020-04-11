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

    //  emit enviar datos al websocket
    // on escuchar al websocket

     this.feed.on('test', (data: any) => {
      this.message.push('Conectado al server');
     })
  }

  adelante(param: string){
    this.feed.emit('adelante', param);
    this.feed.on('changeAdelante', ( data: any) => {
      this.message.push(data);
    });
  }
  atras(param: string){
    this.feed.emit('atras', param);
    this.feed.on('changeAtras', ( data: any) => {
      this.message.push(data);
    });
  }
  izquierda(param: string){
    this.feed.emit('izquierda', param);
    this.feed.on('changeIzquierda', ( data: any) => {
      this.message.push(data);
    });
  }
  derecha(param: string){
    this.feed.emit('derecha', param);
    this.feed.on('changeDerecha', ( data: any) => {
      this.message.push(data);
    });
  }
  Suscribirte(param: string)
  {
    this.feed.emit('test', param);
    this.feed.on('subscripcion', ( data: any) => {
      this.message.push(data);
    });
  }
  Firebase()
  {
    this.feed.emit('firebase', this.text);
    this.firebase.push(this.text);
  }

}
