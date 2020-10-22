import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {

  achievementPIGU = 'Financial gain - By including a new or maintaining current customers I ' +
    'together with "Pigu - group" team reached 4 sales records which were achieved one after another';

  responsibilitiesWORK: string[] = ['Submitting and carrying out of orders', 'Customer service',
    'Sales and goods management by Navision program', 'SalesForce', 'Increasing sales',
    'Solving of problem orders', 'After-sales service'];

  developedSkillsWORK: string[] = ['Communication and negotiation skills', 'Working with documentation', 'Detail orientation',
    'Analytical thinking', 'Team work', 'Empathy', 'Time and project management'];

  showContentPigu = false;
  showResponsibilities = false;
  showDevelopedSkills = false;
  showAchievementsPIGU = false;

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
    this.showAchievementsPIGU = !this.showAchievementsPIGU;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
