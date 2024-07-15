import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponentsComponent } from './admin-components.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { AddCollegeComponent } from './components/add-college/add-college.component';
import { ListCollegeComponent } from './components/list-college/list-college.component';
import { UpdateCollegeComponent } from './components/update-college/update-college.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { AddPlacementComponent } from './components/add-placement/add-placement.component';
import { ListPlacementComponent } from './components/list-placement/list-placement.component';
import { UpdatePlacementComponent } from './components/update-placement/update-placement.component';
import { AddCertificateComponent } from './components/add-certificate/add-certificate.component';
import { ListCertificateComponent } from './components/list-certificate/list-certificate.component';
import { UpdateCertificateComponent } from './components/update-certificate/update-certificate.component';

const routes: Routes = [
  {
    path: 'admin-components',
    component: AdminComponentsComponent,
    children: [
      //admin
      {
        path: 'add-admin',
        component: AddAdminComponent,
      },
      {
        path: 'list-admin',
        component: ListAdminComponent,
      },
      {
        path: 'update-admin/:id',
        component: UpdateAdminComponent,
      },
      //college

      {
        path: 'add-college',
        component: AddCollegeComponent,
      },
      {
        path: 'list-college',
        component: ListCollegeComponent,
      },
      {
        path: 'update-college/:id',
        component: UpdateCollegeComponent,
      },
      //student

      {
        path: 'add-student',
        component: AddStudentComponent,
      },
      {
        path: 'list-student',
        component: ListStudentComponent,
      },
      {
        path: 'update-student/:id',
        component: UpdateStudentComponent,
      },

      //user
      {
        path: 'add-user',
        component: AddCollegeComponent,
      },
      {
        path: 'list-user',
        component: ListCollegeComponent,
      },
      {
        path: 'update-user/:id',
        component: UpdateCollegeComponent,
      },

      //placement
      {
        path: 'add-placement',
        component: AddPlacementComponent,
      },
      {
        path: 'list-placement',
        component: ListPlacementComponent,
      },
      {
        path: 'update-placement/:id',
        component: UpdatePlacementComponent,
      },

      // certificate
      {
        path: 'add-certificate',
        component: AddCertificateComponent,
      },
      {
        path: 'list-certificate',
        component: ListCertificateComponent,
      },
      {
        path: 'update-certificate/:id',
        component: UpdateCertificateComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminComponentsRoutingModule {}
