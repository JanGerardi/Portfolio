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
      id: "reference-01",
      name: "Kilian Heyne",
      position: "Team Partner | Join",
      gitHub: "https://github.com/kilianheyne",
    },
    {
      id: "reference-02",
      name: "Samaneh Papoli",
      position: "Team Partner | Join",
      gitHub: "https://github.com/samanehpapoli",
    },
    {
      id: "reference-03",
      name: "Irene Kober",
      position: "Team Partner | Join",
      gitHub: "https://github.com/iri-ko",
    }
  ]
}
