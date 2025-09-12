import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillListComponent } from './skill-list/skill-list.component';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [SkillListComponent, CommonModule, TranslateDirective, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
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
