import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTableModule, DataGridModule, SharedModule } from 'primeng/primeng';
import './rxjs-extensions';
import { AppComponent } from './components/app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { CompanyService } from './services/company.service';
import { ProjectService } from "./services/project.service";
import { ContributorService } from "./services/contributor.service";
import { LanguageService } from "./services/language.service";
import { CompanyAvatarComponent } from "./components/company-avatar-component";
import { ProjectLinkComponent } from "./components/project-link.component";
import { ContributorLinkComponent } from "./components/contributor-link.component";
import { LanguageLinkComponent } from "./components/language-link-component";
import { CompanyLinkComponent } from "./components/company-link-component";
import { EllipsisPipe } from "./ellipsis-pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    DataTableModule,
    DataGridModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    EllipsisPipe,
    CompanyAvatarComponent,
    CompanyLinkComponent,
    ContributorLinkComponent,
    ProjectLinkComponent,
    LanguageLinkComponent
  ],
  providers: [
    CompanyService,
    ProjectService,
    ContributorService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }