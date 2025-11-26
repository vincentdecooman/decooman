import { Component } from '@angular/core';
import { Project } from '../../models/experience.model';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  templateUrl: './projects-section.component.html'
})
export class ProjectsSectionComponent {
  readonly projects: Project[] = [
    {
      name: 'Antoine Baril – Portfolio Website',
      description: 'A professionally designed portfolio website built for a client. Features a modern, responsive design with smooth animations and optimized performance.',
      techStack: ['Modern Web Stack', 'Responsive Design', 'Performance Optimized'],
      url: 'https://antoinebaril.ca'
    }
  ];

  readonly placeholderProjects = [
    {
      name: 'Project Coming Soon',
      description: 'Another exciting project is in the works. Stay tuned!',
      icon: '🚀'
    },
    {
      name: 'Project Coming Soon',
      description: 'More projects to be added soon.',
      icon: '💡'
    }
  ];
}
