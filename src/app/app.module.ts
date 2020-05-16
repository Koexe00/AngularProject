import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyReceiverService} from './servises/myReceiver.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListItemComponent } from './list-item/list-item.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MainComponent } from './main/main.component';
import { TileItemComponent } from './tile-item/tile-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { ListAllComponent } from './list-all/list-all.component';
import { TileAllComponent } from './tile-all/tile-all.component';
import { ChooseUserComponent } from './choose-user/choose-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    MainComponent,
    TileItemComponent,
    ListAllComponent,
    TileAllComponent,
    ChooseUserComponent,
    AddUserComponent,
    EditUserComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    MyReceiverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
