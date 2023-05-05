import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  aplicarSonido(numeroSonido: number){

    const audio = new Audio();

    audio.src = '../../assets/sonidos/note'+numeroSonido+'.wav';
    audio.load();
    audio.play();
  }

}
