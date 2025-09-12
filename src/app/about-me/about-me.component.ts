import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, TranslateDirective, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})

export class AboutMeComponent {

  isOverlayOpen = false;

  showOverlay() {
    this.isOverlayOpen = true;
  }

  hideOverlay() {
    this.isOverlayOpen = false;
  }

  showOverlayMobile() {
    if (window.innerWidth <= 1024) {
      this.showOverlay();
    }
  }
}
