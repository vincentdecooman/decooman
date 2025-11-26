import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  templateUrl: './language-switcher.component.html'
  
})
export class LanguageSwitcherComponent {
  private readonly translate = inject(TranslateService);

  get currentLang(): string {
    return this.translate.getCurrentLang() || this.translate.getFallbackLang() || 'fr';
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('preferred-language', lang);
    // Close dropdown
    const activeElement = document.activeElement as HTMLElement;
    activeElement?.blur();
  }
}

