// external module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { environment } from '../environments/environment';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../public/assets/i18n', '.json' );
}

let modules = [
    AlertModule,
    DatepickerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp( environment.firebase ),
    TranslateModule.forRoot({
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
    ToasterModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDivAqW0-gaH8aEAt56DPTsv5BJu9rZL60',
        libraries: ["places"]
    }),
    Ng2Bs3ModalModule
];

import { AppComponent } from './app.component';

import { AppHeaderComponent } from './widgets/app-header';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { UserBoxComponent } from './widgets/user-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';

let widgets = [
    AppComponent,
    BreadcrumbComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MenuAsideComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent,
    DashboardComponent
];

import { UserService } from './services/user.service';
import { MessagesService } from './services/messages.service';
import { AuthService } from './services/auth.service';
import { CanActivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AdminLTETranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';

let services = [
    UserService,
    BreadcrumbService,
    MessagesService,
    AuthService,
    CanActivateGuard,
    NotificationService,
    AdminLTETranslateService,
    LoggerService
];

import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';

let pages = [
    HomeComponent,
    PageNumComponent,
    ClientComponent,
];

let pageFragments = [
    BreacrumbsComponent
];

// main bootstrap
import { routing } from './app.routes';
import {SystemAlertComponent} from "./widgets/system-alert/system-alert.component";
import {AgmCoreModule} from "angular2-google-maps/core";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {BreacrumbsComponent} from "./pages/fragments/breadcrumbs/breadcrumbs.component";

@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        ...widgets,
        ...pages,
        ...pageFragments,
        SystemAlertComponent
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
        ...services
    ]
})
export class AppModule { }
