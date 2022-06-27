import { Component, OnInit } from '@angular/core';
import { ScreenInf } from '../DatosEventos';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-table-information',
  templateUrl: './table-information.component.html',
  styleUrls: ['./table-information.component.scss']
})
export class TableInformationComponent implements OnInit {
  screenDataInf: ScreenInf = {
    eventInf: "none",
    screenId: "none"
  };

  constructor(private EventServiceService: EventServiceService,) { }

  ngOnInit(): void {
    this.EventServiceService.ButtonClicketFromMain.subscribe((screenInformation: ScreenInf) => 
      { 
        console.log("llega inf de screen: "+screenInformation.eventInf + " - " + screenInformation.screenId);
        this.screenDataInf = screenInformation;
    });
    
  }

}
