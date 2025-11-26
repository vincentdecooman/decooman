import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Experience {
  company: string;
  roleKey: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  highlightsKey: string;
}

interface Education {
  institution: string;
  degreeKey: string;
  fieldKey: string;
  startDate: string;
  endDate: string;
  note?: string;
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './experience-section.component.html'
})
export class ExperienceSectionComponent {
  readonly experiences: Experience[] = [
    {
      company: 'Luci',
      roleKey: 'experience.jobs.luci.role',
      startDate: 'experience.dates.jul2024',
      endDate: 'experience.present',
      location: 'Montreal, Quebec, Canada',
      type: 'Hybrid',
      highlightsKey: 'experience.jobs.luci.highlights'
    },
    {
      company: 'Desjardins',
      roleKey: 'experience.jobs.desjardins.role',
      startDate: 'experience.dates.mar2020',
      endDate: 'experience.dates.jul2024',
      location: 'Montreal, Quebec, Canada',
      type: 'Hybrid',
      highlightsKey: 'experience.jobs.desjardins.highlights'
    },
    {
      company: 'Université de Montréal',
      roleKey: 'experience.jobs.udem.role',
      startDate: 'experience.dates.sep2023',
      endDate: 'experience.dates.dec2023',
      location: 'Montreal, Quebec, Canada',
      type: 'On-site',
      highlightsKey: 'experience.jobs.udem.highlights'
    }
  ];

  readonly education: Education[] = [
    {
      institution: 'Université Laval',
      degreeKey: 'experience.schools.laval.degree',
      fieldKey: 'experience.schools.laval.field',
      startDate: 'experience.dates.aug2024',
      endDate: '2028',
      note: 'experience.partTime'
    },
    {
      institution: 'Université de Montréal',
      degreeKey: 'experience.schools.udem.degree',
      fieldKey: 'experience.schools.udem.field',
      startDate: 'experience.dates.aug2022',
      endDate: 'experience.dates.jul2024',
      note: 'GPA: 4.3/4.3'
    },
    {
      institution: 'Polytechnique Montréal',
      degreeKey: 'experience.schools.poly.degree',
      fieldKey: 'experience.schools.poly.field',
      startDate: 'experience.dates.aug2020',
      endDate: 'experience.dates.dec2021',
      note: 'GPA: 3.85/4.0'
    },
    {
      institution: 'Cégep Édouard-Montpetit',
      degreeKey: 'experience.schools.cegep.degree',
      fieldKey: 'experience.schools.cegep.field',
      startDate: '2017',
      endDate: '2020'
    }
  ];
}
