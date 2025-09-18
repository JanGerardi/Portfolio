import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imprint',
  imports: [TranslateDirective, TranslatePipe],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(private location: Location) {

    }

  goBack(): void {
    this.location.back();
  }
}
