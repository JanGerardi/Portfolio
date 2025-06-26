import { Component } from '@angular/core';
import { SingleReferenceComponent } from './single-reference/single-reference.component';
import { SingleReference } from '../../shared/interfaces/single-reference';

@Component({
  selector: 'app-reference-list',
  imports: [SingleReferenceComponent],
  templateUrl: './reference-list.component.html',
  styleUrl: './reference-list.component.scss'
})
export class ReferenceListComponent {

  references: Array<SingleReference> = [
    {
      name: "A",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia rem modi aperiam alias tempore ab iusto. Iste minima corrupti earum totam, esse laudantium quibusdam sunt, ipsam inventore deleniti similique.",
      position: "Team Partner",
      linkedin: "",
    },
    {
      name: "B",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia rem modi aperiam alias tempore ab iusto. Iste minima corrupti earum totam, esse laudantium quibusdam sunt, ipsam inventore deleniti similique.",
      position: "Team Partner",
      linkedin: "",
    },
    {
      name: "C",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia rem modi aperiam alias tempore ab iusto. Iste minima corrupti earum totam, esse laudantium quibusdam sunt, ipsam inventore deleniti similique.",
      position: "Team Partner",
      linkedin: "",
    }
  ]
}
