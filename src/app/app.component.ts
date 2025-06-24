import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio Jan Gerardi';
}
