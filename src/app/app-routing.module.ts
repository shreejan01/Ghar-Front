import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GharbhadaComponent} from './gharbhada/gharbhada.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {TermsComponent} from './terms/terms.component';
import {LoginComponent} from './login-register/login/login.component';
import {RegisterComponent} from './login-register/register/register.component';
import {OwnerHomeComponent} from './owner/owner-home/owner-home.component';
import {ClientHomeComponent} from './client/client-home/client-home.component';
import {HomeComponent} from './gharbhada/home/home.component';
import {RoomListComponent} from './owner/room/room-list/room-list.component';
import {AddRoomComponent} from './owner/room/add-room/add-room.component';
import { AddFlatComponent } from './owner/add-flat/add-flat.component';
import { AddApartmentComponent } from './owner/add-apartment/add-apartment.component';
import { AddHouseComponent } from './owner/add-house/add-house.component';
import { NoContentsInfoBannerComponent } from './client/no-contents-info-banner/no-contents-info-banner.component';
import { FlatListComponent } from './owner/flat-list/flat-list.component';
import { ApartmentListComponent } from './owner/apartment-list/apartment-list.component';
import { HouseListComponent } from './owner/house-list/house-list.component';
import { ManageClientComponent } from './owner/manage-client/manage-client.component';
import { AddClientComponent } from './owner/manage-client/add-client/add-client.component';
import { ClientRecordComponent } from './owner/manage-client/client-record/client-record.component';
import { BillListComponent } from './owner/manage-client/bill-list/bill-list.component';
import { AddBillComponent } from './owner/manage-client/add-bill/add-bill.component';
import { DraftBillComponent } from './owner/manage-client/draft-bill/draft-bill.component';
import { RoomComponent } from './owner/room/room.component';
import {UpdateRoomComponent} from "./owner/room/update-room/update-room.component";

const routes: Routes = [
  {path: '', redirectTo: 'gharbhaada', pathMatch: 'full'},
  {
    path: 'gharbhaada',
    component: GharbhadaComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'privacy', component: PrivacyComponent},
      {path: 'terms', component: TermsComponent},
      {path: '**', component: HomeComponent}
    ]
  },
   {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'owner',
    component: OwnerHomeComponent,
    children: [
    {path:'', redirectTo: 'OwnerHomeComponent', pathMatch: 'full'},
    {path:'home', component: NoContentsInfoBannerComponent},
    {
      path: 'room' ,
      component: RoomComponent,
      children: [
            {path:'', redirectTo: 'RoomComponent', pathMatch: 'full'},
            {path:'list', component: RoomListComponent},
            {path: 'add' , component: AddRoomComponent},
            {path: 'update/:id' , component: UpdateRoomComponent},
            {
               path: 'client' ,
               component: ManageClientComponent,
               children: [
               {path:'', redirectTo: 'ManageClientComponent', pathMatch: 'full'},
               {path:'add', component: AddClientComponent }
 ]

},
     ]
    },

    {path: 'flat-list' , component: FlatListComponent},
    {path: 'add-flat' , component: AddFlatComponent},
    {path: 'house-list' , component: HouseListComponent},
    {path: 'add-house' , component: AddHouseComponent},
    {path: 'apartment-list' , component: ApartmentListComponent},
    {path: 'add-apartment' , component: AddApartmentComponent}
]
},

{path: 'client/home', component: ClientHomeComponent},
{path: 'manage/client' , component: ManageClientComponent},
{path: 'client/record' , component: ClientRecordComponent},
{path: 'generate/bill' , component: AddBillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
