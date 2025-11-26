import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  nameKey: string;
  descriptionKey: string;
  techStack: string[];
  url?: string;
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
      nameKey: 'projects.antoineBaril.name',
      descriptionKey: 'projects.antoineBaril.description',
      techStack: ['Modern Web Stack', 'Responsive Design', 'Performance Optimized'],
      url: 'https://antoinebaril.ca'
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
