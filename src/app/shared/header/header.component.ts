import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen = false;
  currentLanguage = 'en';

  constructor(private translate: TranslateService){}

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onMenuItemClick() {
    this.closeMenu();
  }

  changeLanguage(language: string){
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
