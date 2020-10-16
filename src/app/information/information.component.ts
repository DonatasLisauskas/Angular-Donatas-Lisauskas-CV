import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  title: string[] = ['EDUCATION', 'WORK EXPERIENCE'];

  title2: string[] = ['Software Development Academy', 'Kaunas University of Technology', 'Sales Manager'];

  title3: string[] = ['Full - Stack of Java (353 hours) | Apr 2020 - Feb 2021',
    'Bachelor\'s degree Food science and technologies | Sep 2014 - Jun 2018',
    'UAB "Pigu.lt" | Aug 2018 - Sept 2020' ];

  lecturesSDA = '# Java # GIT # Coding # Design Patterns & Good Practices # Algorithms ' +
    '# Software Testing - TDD # Databases - SQL # JDBC, Hibernate # HTTP # HTML, CSS, JavaScript # Front-end ' +
    'Technologies # # Angular # JavaFX # Spring Framework # Agile. Scrum';

  achievementSDA = '# Maintainer of the practical project CarFix';

  achievementPIGU = 'Financial gain - By including a new or maintaining current customers I ' +
    'together with "Pigu - group" team reached 4 sales records which were achieved one after another';

  textBold: string[] = ['Achievements:', 'Responsibilities:', 'Developed skills:'];

  responsibilatiesWORK: string[] = ['Submitting and carrying out of orders', 'Customer service',
    'Sales and goods management by Navision program', 'SalesForce', 'Increasing sales',
    'Solving of problem orders', 'After-sales service'];

  developedSkillsWORK: string[] = ['Communication and negotiation skills', 'Working with documentation', 'Detail orientation',
    'Analytical thinking', 'Team work', 'Empathy', 'Time and project management'];

  constructor() { }

  ngOnInit(): void {
  }

}
