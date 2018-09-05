import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./Dashboard/dashboard/dashboard.component";
import { SearchteacherComponent } from './Teacher/searchteacher/searchteacher.component';
import { CreateteacherComponent } from './Teacher/createteacher/createteacher.component';
import { LoginComponent } from './Account/login/login.component';
import { AuthGuard } from './AuthGuard/authguard';

// const APP_ROUTES: Routes = [
//   {path: '', redirectTo: 'Home', pathMatch: 'full'},
//   { path: 'Home', component: HomeComponent },
//   { path: 'Encoding', component: WizardComponent,
//       children: [
//         { path: 'RequestEntry', component: ValidateQueueNumberComponent },
//         { path: 'EncodeBirth', component: EncodebirthComponent },
//         { path: 'Requester', component: RequesterComponent },
//         { path: 'BirthPreview', component: EncodeBirthPreviewComponent },
//       ]
//   },
  
// ];

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'SerchTeacher', component: SearchteacherComponent },
    { path: 'CreateTeacher', component: CreateteacherComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  ];

export const Routing = RouterModule.forRoot(APP_ROUTES);
