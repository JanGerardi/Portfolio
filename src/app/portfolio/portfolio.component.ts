import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, TranslateDirective, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  currentIndex = 0;
  isOverlayOpen = false;

  projects = [
    {
      id: "join",
      title: "Join",
      image: "./assets/image/join.png",
      skills: "HTML | CSS | Firebase | Angular | TypeScript",
      github: "https://github.com/JanGerardi/join",
      live: "https://join.jan-gerardi.com"
    },
    {
      id: "el-pollo-loco",
      title: "El Pollo Loco",
      image: "./assets/image/el_pollo_loco.png",
      skills: "HTML | CSS | JavaScript",
      github: "https://github.com/JanGerardi/el-pollo-loco",
      live: "https://el-pollo-loco.jan-gerardi.com"
    }
  ];

  previousProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

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
