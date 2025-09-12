import { Component, Input } from '@angular/core';
import { SingleReference } from '../../../shared/interfaces/single-reference';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-single-reference',
  imports: [TranslateDirective, TranslatePipe],
  templateUrl: './single-reference.component.html',
  styleUrl: './single-reference.component.scss'
})
export class SingleReferenceComponent {

  @Input() reference!: SingleReference;

}
