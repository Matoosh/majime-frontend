import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { NbAuthComponent, NbLoginComponent, NbRegisterComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';
import { HomePageComponent } from './pages/home-page-page/home-page.component';
import { SamplesPageComponent } from './pages/samples-page/samples-page.component';
import {BatchNotificationComponent} from './pages/batch-notification-page/batch-notification.component';
import {BatchCollectionComponent} from './pages/batch-collection-page/batch-collection.component';
import {BatchAdoptionComponent} from './pages/batch-adoption-page/batch-adoption.component';
import {AssigningResearchComponent} from './pages/assigning-research-page/assigning-research.component';
import {EnterResultsComponent} from './pages/enter-results-page/enter-results.component';
import {OutOfSpecificationComponent} from './pages/out-of-specification-page/out-of-specification.component';
import {CheckingResultsComponent} from './pages/checking-results-page/checking-results.component';
import {CertificateApprovalComponent} from './pages/certificate-approval-page/certificate-approval.component';
import {CertificatePrintComponent} from './pages/certificate-print-page/certificate-print.component';
import {ReportsComponent} from './pages/reports-page/reports.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'samples', component: SamplesPageComponent},
  {path: 'batch_notification', component: BatchNotificationComponent},
  {path: 'batch_collection', component: BatchCollectionComponent},
  {path: 'batch_adoption', component: BatchAdoptionComponent},
  {path: 'assigning_research', component: AssigningResearchComponent},
  {path: 'enter_results', component: EnterResultsComponent},
  {path: 'out_of_specification', component: OutOfSpecificationComponent},
  {path: 'checking_results', component: CheckingResultsComponent},
  {path: 'certificate_approval', component: CertificateApprovalComponent},
  {path: 'certificate_print', component: CertificatePrintComponent},
  {path: 'reports', component: ReportsComponent},
  {
    path: 'auth',


    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
