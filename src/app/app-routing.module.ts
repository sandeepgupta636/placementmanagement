import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { StudentLoginComponent } from './student-login/student-login.component';

import { adminAuthGuard } from './admin-auth.guard';
import { AdminComponentsComponent } from './admin-components/admin-components.component';
import { StudentComponentComponent } from './student-component/student-component.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'admin',
    component: LoginAdminComponent,
  },
  {
    path: 'student',
    component: StudentLoginComponent,
  },

  {
    path: 'admin-components',
    component: AdminComponentsComponent,
    canActivate: [adminAuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'student-component',
    component: StudentComponentComponent,
    // canActivate:[adminAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
