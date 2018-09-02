import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SearchteacherComponent } from './Teacher/searchteacher/searchteacher.component';
import { CreateteacherComponent } from './Teacher/createteacher/createteacher.component';
// import { ChoosecertificateComponent } from '../EncodingModule/choosecertificate/choosecertificate.component';
// import { ValidateQueueNumberComponent } from '../EncodingModule/validate-queue-number/validate-queue-number.component';
// import { EncodebirthComponent } from '../EncodingModule/encodebirth/encodebirth.component';
// import { EncodeBirthPreviewComponent } from '../EncodingModule/encode-birth-preview/encode-birth-preview.component';


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
    { path: 'SerchTeacher', component: SearchteacherComponent },
    { path: 'CreateTeacher', component: CreateteacherComponent },
    // { path: 'Dashboard', component: DashboardComponent }
  ];

export const Routing = RouterModule.forRoot(APP_ROUTES);
