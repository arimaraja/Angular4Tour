import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  message: string[] = [];

  add(message:string) {
  	console.log("Message is pushed");
  	this.message.push(message);
  }

  len(){
  	this.message.length;
  }
  clear() {
  	this.message = [];
  }

  constructor() { }
}
