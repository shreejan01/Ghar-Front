import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GharbhadaComponent } from './gharbhada/gharbhada.component';
import {HeaderComponent} from './gharbhada/header/header.component';
import {FooterComponent} from './gharbhada/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { SliderRoomComponent } from './gharbhada/slider-room/slider-room.component';
import { SliderHouseComponent } from './gharbhada/slider-house/slider-house.component';
import { SliderFlatComponent } from './gharbhada/slider-flat/slider-flat.component';
import { SliderApartmentComponent } from './gharbhada/slider-apartment/slider-apartment.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import {LoginHeaderComponent} from './login-register/login/login-header/login-header.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OwnerComponent } from './owner/owner.component';
import { ClientComponent } from './client/client.component';
import { OwnerHomeComponent } from './owner/owner-home/owner-home.component';
import { OwnerHeaderComponent } from './owner/owner-header/owner-header.component';
import { AddRoomComponent } from './owner/room/add-room/add-room.component';
import { AddFlatComponent } from './owner/add-flat/add-flat.component';
import { AddApartmentComponent } from './owner/add-apartment/add-apartment.component';
import { AddHouseComponent } from './owner/add-house/add-house.component';
import { RoomListComponent } from './owner/room/room-list/room-list.component';
import { FlatListComponent } from './owner/flat-list/flat-list.component';
import { ApartmentListComponent } from './owner/apartment-list/apartment-list.component';
import { HouseListComponent } from './owner/house-list/house-list.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientHeaderComponent } from './client/client-header/client-header.component';
import { RoomComponent } from './owner/room/room.component';
import { FlatComponent } from './client/flat/flat.component';
import { ApartmentComponent } from './client/apartment/apartment.component';
import { HouseComponent } from './client/house/house.component';
import { ClientProfileComponent } from './client/client-profile/client-profile.component';
import { OwnerProfileComponent } from './owner/owner-profile/owner-profile.component';
import { ClientNavComponent} from './client/client-header/client-nav/client-nav.component';
import { OwnerNavComponent} from './owner/owner-header/owner-nav/owner-nav.component';
import { SearchBoxComponent } from './client/search-box/search-box.component';
import { NoContentsInfoBannerComponent } from './client/no-contents-info-banner/no-contents-info-banner.component';
import { HomeComponent } from './gharbhada/home/home.component';
import { ClientFooterTopComponent } from './client/client-footer-top/client-footer-top.component';
import { ClientFooterComponent } from './client/client-footer/client-footer.component';
import { ManageClientComponent } from './owner/manage-client/manage-client.component';
import { AddClientComponent } from './owner/manage-client/add-client/add-client.component';
import { ClientRecordComponent } from './owner/manage-client/client-record/client-record.component';
import { BillListComponent } from './owner/manage-client/bill-list/bill-list.component';
import { AddBillComponent } from './owner/manage-client/add-bill/add-bill.component';
import { DraftBillComponent } from './owner/manage-client/draft-bill/draft-bill.component';
import { UsedlaterComponent } from './usedlater/usedlater.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateRoomComponent } from './owner/room/update-room/update-room.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    GharbhadaComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    SliderRoomComponent,
    SliderHouseComponent,
    SliderFlatComponent,
    SliderApartmentComponent,
    LoginComponent,
    RegisterComponent,
    LoginHeaderComponent,
    OwnerComponent,
    ClientComponent,
    OwnerHomeComponent,
    OwnerHeaderComponent,
    AddRoomComponent,
    AddFlatComponent,
    AddApartmentComponent,
    AddHouseComponent,
    RoomListComponent,
    FlatListComponent,
    ApartmentListComponent,
    HouseListComponent,
    ClientHomeComponent,
    ClientHeaderComponent,
    RoomComponent,
    FlatComponent,
    ApartmentComponent,
    HouseComponent,
    ClientProfileComponent,
    OwnerProfileComponent,
    ClientNavComponent,
    OwnerNavComponent,
    SearchBoxComponent,
    NoContentsInfoBannerComponent,
    HomeComponent,
    ClientFooterTopComponent,
    ClientFooterComponent,
    ManageClientComponent,
    AddClientComponent,
    ClientRecordComponent,
    BillListComponent,
    AddBillComponent,
    DraftBillComponent,
    UsedlaterComponent,
    UpdateRoomComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
