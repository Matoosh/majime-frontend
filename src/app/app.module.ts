import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/* Nebular */
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbDatepickerModule, NbMenuModule, NbThemeModule, NbToastrModule, NbWindowModule } from '@nebular/theme';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { ThemeModule } from './theme/theme.module';

/* Root */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { RoleProvider } from './services/role/role.provider';
import { HomePageComponent } from './pages/home-page-page/home-page.component';
import { SamplesPageComponent } from './pages/samples-page/samples-page.component';
import { BatchNotificationComponent } from './pages/batch-notification-page/batch-notification.component';
import { BatchCollectionComponent } from './pages/batch-collection-page/batch-collection.component';
import { BatchAdoptionComponent } from './pages/batch-adoption-page/batch-adoption.component';
import { AssigningResearchComponent } from './pages/assigning-research-page/assigning-research.component';
import { EnterResultsComponent } from './pages/enter-results-page/enter-results.component';
import { OutOfSpecificationComponent } from './pages/out-of-specification-page/out-of-specification.component';
import { CheckingResultsComponent } from './pages/checking-results-page/checking-results.component';
import { CertificateApprovalComponent } from './pages/certificate-approval-page/certificate-approval.component';
import { CertificatePrintComponent } from './pages/certificate-print-page/certificate-print.component';
import { ReportsComponent } from './pages/reports-page/reports.component';

/* Pages */

/* Components */

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SamplesPageComponent,
    BatchNotificationComponent,
    BatchCollectionComponent,
    BatchAdoptionComponent,
    AssigningResearchComponent,
    EnterResultsComponent,
    OutOfSpecificationComponent,
    CheckingResultsComponent,
    CertificateApprovalComponent,
    CertificatePrintComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    ThemeModule,
    HttpClientModule,
    NbWindowModule.forRoot(),
    NbDatepickerModule.forRoot(),
    ReactiveFormsModule,
    NbToastrModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            key: 'token',
            class: NbAuthJWTToken
          },
          baseEndpoint: 'http://localhost:8080',
          login: {
            endpoint: '/api/auth/login',
            method: 'post',
            redirect: {
              success: '/home',
              failure: null
            }
          },
          register: {
            endpoint: '/api/auth/register',
            method: 'post',
          },
          logout: {
            endpoint: '/api/auth/sign-out',
            method: 'post',
          },
        }),
      ],
      forms: {
        login: {
          showMessages: {
            success: true,
          }
        }
      },
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        user: {
          type: 'agent'
        }
      },
    }),
  ],
  providers: [
    { provide: NbRoleProvider, useClass: RoleProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
