import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslatePipe, TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio Jan Gerardi';

  constructor(private translate: TranslateService, private router: Router){
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    if (!this.translate.currentLang) {
      this.translate.use('en');
    }

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const scrollToTopPaths = ['/imprint', '/privacy-policy'];

        if (scrollToTopPaths.includes(event.urlAfterRedirects)) {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      });
  }
}
