import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  lecturesSDA = '# Java # GIT # Coding # Design Patterns & Good Practices # Algorithms ' +
    '# Software Testing - TDD # Databases - SQL # JDBC, Hibernate # HTTP # HTML, CSS, JavaScript # Front-end ' +
    'Technologies # # Angular # JavaFX # Spring Framework # Agile. Scrum';

  achievementSDA = 'Maintainer of the practical project CarFix';

  achievementPIGU = 'Financial gain - By including a new or maintaining current customers I ' +
    'together with "Pigu - group" team reached 4 sales records which were achieved one after another';

  textBold: string[] = ['Achievements:', 'Responsibilities:', 'Developed skills:'];

  responsibilatiesWORK: string[] = ['Submitting and carrying out of orders', 'Customer service',
    'Sales and goods management by Navision program', 'SalesForce', 'Increasing sales',
    'Solving of problem orders', 'After-sales service'];

  developedSkillsWORK: string[] = ['Communication and negotiation skills', 'Working with documentation', 'Detail orientation',
    'Analytical thinking', 'Team work', 'Empathy', 'Time and project management'];

  showContentSDA = false;
  showResponsibilities = false;
  showDevelopedSkills = false;
  showAchievements = false;
  showAchievements2 = false;
  showContentPigu = false;

  toggleContentSDA(): void {
    this.showContentSDA = !this.showContentSDA;
  }
  toggleContentPigu(): void {
    this.showContentPigu = !this.showContentPigu;
  }
  toggleResponsibilities(): void {
    this.showResponsibilities = !this.showResponsibilities;
  }
  toggleDevelopedSkills(): void {
    this.showDevelopedSkills = !this.showDevelopedSkills;
  }
  toggleAchievements(): void {
    this.showAchievements = !this.showAchievements;
  }

  toggleAchievements2(): void {
    this.showAchievements2 = !this.showAchievements2;
  }


  constructor() {}

  ngOnInit(): void {
  }

}
