import {Component, OnInit} from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector: 'app-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.css']
})
export class SkillsContentComponent implements OnInit {

  techSkills = {
    languages: ['Java', 'HTML, CSS, JavaScript, TypeScript'],
    databases: ['MySQL, HSQLDB'],
    frameworks: ['JDBC', 'Hibernate ORM', 'Angular', 'JavaFX', 'JUnit / JUnit5 / Jupiter'],
    otherSkills: ['OPP', 'TDD', 'Clean Code and good practices'],
    tools: ['IntelliJ IDEA', 'MySQL Workbench', 'Visual Studio Code', 'Postman', 'GIT', 'Node.js'],
    inFuture: ['Front - end technologies', 'Spring Framework', 'Agile & Scrum of project management']
  };

  personalSkills = ['Thoroughness', 'Creativity Skills', 'Goal-orientation', 'Analytical thinking',
    'Teamwork', 'Time Management', 'Communication', 'Problem Solving', 'Responsibility', 'Helpfulness', 'Persistence'];

  languages = ['Lithuanian - Native', 'English - B2 / C1'];

  showTechSkills = false;
  showPersonalSkills = false;
  showLanguages = false;

  toggleTechSkills(): void {
    this.showTechSkills = !this.showTechSkills;
  }
  togglePersonalSkills(): void {
  this.showPersonalSkills = !this.showPersonalSkills;
  }
  toggleLanguages(): void {
    this.showLanguages = !this.showLanguages;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
