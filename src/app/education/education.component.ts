import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  lecturesSDA = '# Java # GIT # Coding # Design Patterns & Good Practices # Algorithms ' +
    '# Software Testing - TDD # Databases - SQL # JDBC, Hibernate # HTTP # HTML, CSS, JavaScript # Front-end ' +
    'Technologies # # Angular # JavaFX # Spring Framework # Agile. Scrum';

  achievementSDA = 'Maintainer of the practical project CarFix';

  showContentSDA = false;
  showAchievementSDA = false;

  toggleContentSDA(): void {
    this.showContentSDA = !this.showContentSDA;
  }

  toggleAchievements2(): void {
    this.showAchievementSDA = !this.showAchievementSDA;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
