import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuperTableModule } from './ngx-super-table/super-table.module';
import { QfTableModule } from './qf-table/qf-table.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuperTableModule,
    QfTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
