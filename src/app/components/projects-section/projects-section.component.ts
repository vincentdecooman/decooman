import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  nameKey: string;
  descriptionKey: string;
  techStackKeys: string[];
  url?: string;
  /** Path under site root (e.g. from /public) */
  imageSrc?: string;
}

interface PlaceholderProject {
  nameKey: string;
  descriptionKey: string;
  icon: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects-section.component.html'
})
export class ProjectsSectionComponent {
  readonly projects: Project[] = [
    {
      nameKey: 'projects.fdcMultiservices.name',
      descriptionKey: 'projects.fdcMultiservices.description',
      techStackKeys: [
        'projects.fdcMultiservices.badge1',
        'projects.fdcMultiservices.badge2',
        'projects.fdcMultiservices.badge3'
      ],
      url: 'https://fdcmultiservices.ca/',
      imageSrc: '/fdc-multiservices.png'
    }
  ];

  readonly placeholderProjects: PlaceholderProject[] = [
    {
      nameKey: 'projects.placeholder1.name',
      descriptionKey: 'projects.placeholder1.description',
      icon: '🚀'
    },
    {
      nameKey: 'projects.placeholder2.name',
      descriptionKey: 'projects.placeholder2.description',
      icon: '💡'
    }
  ];
}
