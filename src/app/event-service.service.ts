import { EventEmitter, Injectable } from '@angular/core';
import { ScreenInf } from './DatosEventos';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  ButtonClicketFromMain = new EventEmitter<ScreenInf>();
  
  constructor() { }

  NotifyButtonClicketFromMain(screenInf: ScreenInf){
    this.ButtonClicketFromMain.emit(screenInf);
  }

}
