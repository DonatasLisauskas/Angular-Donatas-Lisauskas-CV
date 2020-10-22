import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsContentComponent } from './skills-content/skills-content.component';
import { InformationComponent } from './information/information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillsContentComponent,
    InformationComponent,
    NavBarComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: 'about-me', component: AboutMeComponent},
        {path: 'information-component', component: InformationComponent },
        {path: 'tech-skills', component: SkillsContentComponent},
        {path: 'contacts', component: ContactsComponent},
        {path: '**', redirectTo: 'about-me', pathMatch: 'full'},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
