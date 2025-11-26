import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme.service';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';

interface NavLink {
  labelKey: string;
  href: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    ThemeToggleComponent,
    LanguageSwitcherComponent,
    HeroSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly translate = inject(TranslateService);

  readonly navLinks: NavLink[] = [
    { labelKey: 'nav.home', href: '#hero' },
    { labelKey: 'nav.about', href: '#about' },
    { labelKey: 'nav.experience', href: '#experience' },
    { labelKey: 'nav.projects', href: '#projects' },
    { labelKey: 'nav.contact', href: '#contact' }
  ];

  ngOnInit(): void {
    // Set available languages
    this.translate.addLangs(['en', 'fr']);
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && ['en', 'fr'].includes(savedLang)) {
      this.translate.use(savedLang);
    } else {
      // Use browser language or default to English
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang?.match(/en|fr/) ? browserLang : 'fr');
    }
  }

  closeMobileMenu(): void {
    const activeElement = document.activeElement as HTMLElement;
    activeElement?.blur();
  }
}
