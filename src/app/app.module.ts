import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    NavbarComponent,
    SidebarComponent,
    ContactsComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    MyPipePipe,
    ViewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
