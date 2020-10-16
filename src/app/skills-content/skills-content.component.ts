import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.css']
})
export class SkillsContentComponent implements OnInit {

  contacts = {city: 'City: Kaunas', email: 'Email: donliskas@gmail.com' , phone: 'Phone: +37063855525'};

  techSkills = {
    languages: ['Java', 'HTML, CSS, JavaScript, TypeScript'],
    databases: ['MySQL, HSQLDB'],
    frameworks: ['JDBC', 'Hibernate ORM', 'Angular', 'JavaFX', 'JUnit / JUnit5 / Jupiter'],
    otherSkills: ['OPP', 'TDD', 'Clean Code and good practices'],
    tools: ['IntelliJ IDEA', 'MySQL Workbench', 'Visual Studio Code', 'Postman', 'GIT', 'Node.js'],
    inFuture: ['Front - end technologies', 'Spring Framework', 'Agile & Scrum of project management']};

  personalSkills = ['Thoroughness', 'Creativity Skills', 'Goal-orientation', 'Analytical thinking',
  'Teamwork', 'Time Management', 'Communication', 'Problem Solving', 'Responsibility',
  'Diligence', 'Helpfulness', 'Persistence'];

  languages = ['Lithuanian - Native', 'English - B2 / C1'];

  constructor() {}

  ngOnInit(): void {
  }

}
