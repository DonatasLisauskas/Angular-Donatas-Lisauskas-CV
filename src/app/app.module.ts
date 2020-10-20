import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LinksComponent } from './links/links.component';
import { SkillsContentComponent } from './skills-content/skills-content.component';
import { InformationComponent } from './information/information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    LinksComponent,
    SkillsContentComponent,
    InformationComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
