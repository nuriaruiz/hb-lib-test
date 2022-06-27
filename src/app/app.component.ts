import { Component, OnInit } from '@angular/core';
import { ScreenInf } from './DatosEventos';
import { EventServiceService } from './event-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  screenInformation!: ScreenInf;

  constructor(private EventServiceService: EventServiceService,) { }

  ngOnInit(): void {
  }

  sendNotification(): void{
    this.screenInformation = createInf();
    this.EventServiceService.NotifyButtonClicketFromMain(this.screenInformation);
  }

  title = 'hb-lib-test';

}

function createInf(): ScreenInf {
  const screenDataInf: ScreenInf = {
    eventInf: "busqueda",
    screenId: "principal"
  }
  return screenDataInf;
}

