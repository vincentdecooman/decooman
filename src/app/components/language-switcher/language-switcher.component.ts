import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  template: `
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <span class="text-sm font-medium uppercase">{{ currentLang }}</span>
      </div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 p-2 shadow-lg">
        <li>
          <button 
            (click)="switchLanguage('en')" 
            [class.active]="currentLang === 'en'"
            class="text-sm"
          >
            English
          </button>
        </li>
        <li>
          <button 
            (click)="switchLanguage('fr')" 
            [class.active]="currentLang === 'fr'"
            class="text-sm"
          >
            Français
          </button>
        </li>
      </ul>
    </div>
  `
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

