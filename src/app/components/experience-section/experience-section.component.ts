import { Component } from '@angular/core';
import { Experience, Education } from '../../models/experience.model';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  templateUrl: './experience-section.component.html'
})
export class ExperienceSectionComponent {
  readonly experiences: Experience[] = [
    {
      company: 'Luci',
      role: 'Full Stack Developer',
      startDate: 'Jul 2024',
      endDate: 'Present',
      location: 'Montreal, Quebec, Canada',
      type: 'Hybrid',
      highlights: [
        'Full Stack Development using Angular and Django',
        'Internship Supervisor - mentoring junior developers',
        'Building robust and scalable web applications',
        'Collaborating with cross-functional teams on innovative solutions'
      ]
    },
    {
      company: 'Desjardins',
      role: 'Analyst-Programmer',
      startDate: 'Mar 2020',
      endDate: 'Jul 2024',
      location: 'Montreal, Quebec, Canada',
      type: 'Hybrid',
      highlights: [
        'Developed applications using Angular and Spring Boot',
        'Worked with TypeScript and modern web technologies',
        'Contributed to large-scale financial systems',
        'Collaborated in an Agile development environment'
      ]
    },
    {
      company: 'Université de Montréal',
      role: 'Teaching Assistant',
      startDate: 'Sep 2023',
      endDate: 'Dec 2023',
      location: 'Montreal, Quebec, Canada',
      type: 'On-site',
      highlights: [
        'IFT-1144 - Introduction to Internet Programming',
        'Assisted students with web development concepts',
        'Graded assignments and provided feedback'
      ]
    }
  ];

  readonly education: Education[] = [
    {
      institution: 'Université Laval',
      degree: "Bachelor's Degree (B.Sc.A.)",
      field: 'Computer Science',
      startDate: 'Aug 2024',
      endDate: '2028',
      note: 'Part-time'
    },
    {
      institution: 'Université de Montréal',
      degree: 'Certificate',
      field: 'Applied Computer Science',
      startDate: 'Aug 2022',
      endDate: 'Jul 2024',
      note: 'GPA: 4.3/4.3'
    },
    {
      institution: 'Polytechnique Montréal',
      degree: 'Certificate',
      field: 'Network Cybersecurity',
      startDate: 'Aug 2020',
      endDate: 'Dec 2021',
      note: 'GPA: 3.85/4.0'
    },
    {
      institution: 'Cégep Édouard-Montpetit',
      degree: 'DEC (Technical)',
      field: 'Programming',
      startDate: '2017',
      endDate: '2020',
    }
  ];
}
