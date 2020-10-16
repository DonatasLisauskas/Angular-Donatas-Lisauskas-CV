import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LinksComponent } from './links/links.component';
import { ContentComponent } from './content/content.component';
import { SkillsContentComponent } from './skills-content/skills-content.component';
import { InformationComponent } from './content/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    LinksComponent,
    ContentComponent,
    SkillsContentComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
