import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  currentIndex = 0;
  isOverlayOpen = false;

  projects = [
    {
      title: "Join",
      image: "./assets/image/join.png",
      skills: "HTML | CSS | Firebase | Angular | TypeScript",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      development: "In the Join project, I was responsible for coordinating the team and leading daily meetings. At the same time, I contributed equally to the programming and consistently provided helpful and solution-oriented support when challenges arose.",
      github: "https://github.com/JanGerardi/join",
      live: ""
    },
    {
      title: "El Pollo Loco",
      image: "./assets/image/el_pollo_loco.png",
      skills: "HTML | CSS | JavaScript",
      description: "A 2D platformer in the spirit of Super Mario, reimagined with a lively Mexican theme – from sombreros to mariachi music.",
      development: "As part of the Jump'n'Run project, I was solely responsible for the concept, planning, and implementation. I structured the development process, defined clear milestones, and consistently kept track of the overall progress.",
      github: "https://github.com/JanGerardi/el-pollo-loco",
      live: ""
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
}
