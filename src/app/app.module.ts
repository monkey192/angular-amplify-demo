
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { AuthGuard } from './guard/auth.guard';
import { FormsModule }   from '@angular/forms';
import {TableModule} from 'primeng/table';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AccessErrorComponent } from './components/access-error/access-error.component';
import { AppResolverService } from './controller/app-resolver.service';

const appRoutes: Routes = [
  { path: '', component: MainScreenComponent, resolve: AppResolverService}
];
@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    HeaderComponent,
    MainContentComponent,
    AccessErrorComponent
  ],
  imports: [
    BrowserModule,
    PasswordModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    FormsModule,
    TableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [AppResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
