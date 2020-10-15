import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  name = 'DONATAS';
  lastName = 'LISAUSKAS';
  title = 'ENTRY LEVEL (JUNIOR) FULL-STACK DEVELOPER OF JAVA';
  title2 = 'ABOUT ME';

  aboutMe = 'I am a constantly learning person who keeps seeking opportunities to improve the\n' +
    '        skills of an IT specialist.\n' +
    '        During the course of the SDA academy, I have developed good skills and knowledge about Java, OOP, TDD, Clean\n' +
    '        Code, MySQL, from the side of frameworks: Hibernate ORM, JDBC. Currently, I have initiated to learn Front-End\n' +
    '        technologies: HTTP, HTML, CSS, JavaScript, and what I will learn in the future at the academy of SDA is Spring\n' +
    '        Framework, project management by Agile, Scrum.\n' +
    '        My main best qualities are thoroughness, creativity, and goal-orientation. While working on the sales manager\n' +
    '        position I have gained strong skills like communication and negotiation, detail orientation, analytical\n' +
    '        thinking, and sales.\n' +
    '        I am looking for an internship place or junior position, where I can use my IT knowledge and skills. If you give\n' +
    '        me a chance to grow in your company, you will see how fast I can learn and meet your company goals.';

  constructor() { }

  ngOnInit(): void {
  }

}
