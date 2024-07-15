import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponentsRoutingModule } from './admin-components-routing.module';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminComponentsComponent } from './admin-components.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { AddCollegeComponent } from './components/add-college/add-college.component';
import { ListCollegeComponent } from './components/list-college/list-college.component';
import { UpdateCollegeComponent } from './components/update-college/update-college.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { AddCertificateComponent } from './components/add-certificate/add-certificate.component';
import { ListCertificateComponent } from './components/list-certificate/list-certificate.component';
import { UpdateCertificateComponent } from './components/update-certificate/update-certificate.component';
import { AddPlacementComponent } from './components/add-placement/add-placement.component';
import { ListPlacementComponent } from './components/list-placement/list-placement.component';
import { UpdatePlacementComponent } from './components/update-placement/update-placement.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';



@NgModule({
  declarations: [
    AddAdminComponent,
    AdminComponentsComponent,
    ListAdminComponent,
    UpdateAdminComponent,
    AddCollegeComponent,
    ListCollegeComponent,
    UpdateCollegeComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    AddCertificateComponent,
    ListCertificateComponent,
    UpdateCertificateComponent,
    AddPlacementComponent,
    ListPlacementComponent,
    UpdatePlacementComponent,
    AddUserComponent,
    ListUserComponent,
    UpdateUserComponent,
   
  ],
  imports: [
    CommonModule,
    AdminComponentsRoutingModule,
    ReactiveFormsModule
  ],
  exports:[AdminComponentsComponent,
  AddPlacementComponent]
})
export class AdminComponentsModule { }
