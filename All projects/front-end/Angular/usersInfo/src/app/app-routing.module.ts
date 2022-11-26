import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './views/card/card.component';
import { SingleUserComponent } from './views/single-user/single-user.component'
import { EditInfoComponent } from './views/edit-info/edit-info.component'

const routes: Routes = [
  {path:'', component:CardComponent},
  {path:'singleUser/:id', component:SingleUserComponent},
  {path:'editUser/:id', component:EditInfoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
