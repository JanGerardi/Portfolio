import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ReferencesComponent } from "../references/references.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { SkillsComponent } from "../skills/skills.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { HeroComponent } from "../hero/hero.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layouts',
  imports: [ContactComponent, ReferencesComponent, PortfolioComponent, SkillsComponent, AboutMeComponent, HeroComponent, RouterModule],
  templateUrl: './main-layouts.component.html',
  styleUrl: './main-layouts.component.scss'
})
export class MainLayoutsComponent {

}
