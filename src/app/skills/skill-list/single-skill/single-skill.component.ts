import { Component, Input } from '@angular/core';
import { SingleSkill } from '../../../shared/interfaces/single-skill';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-skill',
  imports: [FormsModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {

  @Input() skill!: SingleSkill;
}
