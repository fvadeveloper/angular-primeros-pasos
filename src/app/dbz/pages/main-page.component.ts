import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService) {}

  get characters(): Character[] {
    //definirlo con [...xxxxx] es para retornar siempre una copia exacta del objeto, esto es opcional
    //lo normal es que se retorne la informacion desde una base de datos
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){

    this.dbzService.onNewCharacter(character);
  }

}
