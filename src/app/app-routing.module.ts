import {ListItemComponent} from './list-item/list-item.component';
import {TileItemComponent} from './tile-item/tile-item.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TileAllComponent} from './tile-all/tile-all.component';
import {ListAllComponent} from './list-all/list-all.component';
import {ChooseUserComponent} from './choose-user/choose-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'userslist', pathMatch: 'full'},
  {path: 'userslist', component: ListAllComponent},
  {path: 'userstile', component: TileAllComponent},
  {path: 'userschoose/:id', component: ChooseUserComponent},
  {path: 'useradd', component: AddUserComponent},
  {path: 'useredit/:id', component: EditUserComponent},
  {path: 'userdelete/:id', component: DeleteUserComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
