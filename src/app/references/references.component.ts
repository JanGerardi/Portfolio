import { Component } from '@angular/core';
import { ReferenceListComponent } from './reference-list/reference-list.component';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [ReferenceListComponent, TranslateDirective, TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

}
