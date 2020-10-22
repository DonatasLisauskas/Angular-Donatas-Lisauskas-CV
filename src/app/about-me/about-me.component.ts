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

  aboutMe = 'I am a constantly learning person who keeps seeking opportunities to improve the skills of an IT specialist. I always take the responsibility for the given tasks and, as a team player, I motivate colleges to do the same. In problem situations, I try to stay objective to solve them in a professional matter. My main best qualities are thoroughness, creativity, and goal-orientation. While working on the sales manager position I have gained strong skills like communication and negotiation, detail orientation, analytical thinking, and sales. About my life, I have always felt that I must be doing something special like creation in my life. Only then I am feeling much better. When I discovered programming I understood that I can realize myself 100% therein. Therefore I decided to change my life to IT. I live under a slogan - A life is a creation. Dive into it. Currently, I am a student of the Java course, where I learn both back-end and front-end development. I am looking for a practice place or junior position, where I can use my IT knowledge and skills. If you give me a chance to grow in your company, you will see how fast I can learn and meet your company goals.';

  constructor() { }

  ngOnInit(): void {
  }

}
