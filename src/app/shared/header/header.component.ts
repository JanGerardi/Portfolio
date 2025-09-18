import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  currentLanguage = 'en';

  constructor(private translate: TranslateService){}

  ngOnInit() {
    this.currentLanguage = this.translate.currentLang ?? this.translate.getDefaultLang() ?? 'en';
  }

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
