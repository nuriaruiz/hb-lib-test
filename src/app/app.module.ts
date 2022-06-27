import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HbIconModule, HbTableModule } from '@hotelbeds-com/common-front-ui-lib';


import { HbButtonModule } from '@hotelbeds-com/common-front-ui-lib';
import { AppComponent } from './app.component';
import { TableInformationComponent } from './table-information/table-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TableInformationComponent,
  ],
  imports: [
    BrowserModule,
    HbButtonModule,
    HbIconModule,
    HbTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
