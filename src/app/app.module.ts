import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponentsModule } from './admin-components/admin-components.module';
import { StudentComponentModule } from './student-component/student-component.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactUsComponent,
    LoginAdminComponent,
    StudentLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminComponentsModule,
    StudentComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
