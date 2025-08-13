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
      name: "Samaneh Papoli",
      comment: "Vielen Dank für deine ganze Unterstützung und Zusammenarbeit. Deine Geduld und dein starkes Teamgefühl haben wirklich geholfen, die Arbeit voranzubringen. Besonders danke ich dir dafür, dass du dir für mich Zeit genommen, alles in Ruhe erklärt und mir geholfen hast, die Dinge besser und genauer zu verstehen. Es bedeutet mir echt viel, dich im Team zu haben.",
      position: "Team Partner",
      linkedin: "",
    },
    {
      name: "Kilian Heyne",
      comment: "Ich hatte das große Glück, mit Jan am „Join“-Projekt zu arbeiten. Wie ein erfahrener Product Owner übernahm er die Kommunikation und Organisation im Team und sorgte für klare Strukturen, die uns ermöglichten das Projekt in verkürzter Zeit umzusetzen. Ein echter Gewinn für jedes Team - jederzeit wieder!",
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
