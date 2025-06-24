import { Component } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';
import { SingleSkill } from '../../shared/interfaces/single-skill';

@Component({
  selector: 'app-skill-list',
  imports: [SingleSkillComponent],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent {

  skills: Array<SingleSkill> = [
    {
      image: "./assets/image/skills/angular_icon.png",
      name: "Angluar",
    },
    {
      image: "./assets/image/skills/css_icon.png",
      name: "CSS",
    },
    {
      image: "./assets/image/skills/git_icon.png",
      name: "git",
    },
    {
      image: "./assets/image/skills/html_icon.png",
      name: "HTML",
    },
    {
      image: "./assets/image/skills/javascript_icon.png",
      name: "JavaScript",
    },
    {
      image: "./assets/image/skills/scrum_icon.png",
      name: "Scrum",
    },
    {
      image: "./assets/image/skills/typescript_icon.png",
      name: "Typescript",
    },
  ]

}
