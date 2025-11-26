import { Component, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ThemeToggleComponent,
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
export class App {
  private readonly themeService = inject(ThemeService);

  readonly navLinks: NavLink[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  closeMobileMenu(): void {
    // Close the dropdown by removing focus
    const activeElement = document.activeElement as HTMLElement;
    activeElement?.blur();
  }
}
