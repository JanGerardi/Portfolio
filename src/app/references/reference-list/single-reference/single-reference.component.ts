import { Component, Input } from '@angular/core';
import { SingleReference } from '../../../shared/interfaces/single-reference';


@Component({
  selector: 'app-single-reference',
  imports: [],
  templateUrl: './single-reference.component.html',
  styleUrl: './single-reference.component.scss'
})
export class SingleReferenceComponent {

  @Input() reference!: SingleReference;

}
