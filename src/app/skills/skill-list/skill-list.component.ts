import { Component } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';

@Component({
  selector: 'app-skill-list',
  imports: [SingleSkillComponent],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent {

}
