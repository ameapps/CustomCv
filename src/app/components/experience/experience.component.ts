import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  workExp: WorkExperience[] = [];

  constructor() { }

  ngOnInit(): void {
    this.workExp = [
      {
        title: 'AAA',
        description: 'description',
        isClicked: false,
        dateFrom: 'mm/yy',
        dateTo: 'mm/yy'
      },
      {
        title: 'BBB',
        description: 'description',
        isClicked: false,
        dateFrom: 'mm/yy',
        dateTo: 'mm/yy'
      },
      {
        title: 'CCC',
        description: 'description',
        isClicked: false,
        dateFrom: 'mm/yy',
        dateTo: 'mm/yy'
      },
      {
        title: 'DDD',
        description: 'description',
        isClicked: false,
        dateFrom: 'mm/yy',
        dateTo: 'mm/yy'
      },
    ];
  }

  onClickDot(experience: WorkExperience) {
    this.workExp.forEach(exp => {
      exp.isClicked = false;
    });
    experience.isClicked = true;
  }

}

export class WorkExperience {
  title = '';
  description = '';
  isClicked = false;
  dateFrom = 'mm/yy';
  dateTo = 'mm/yy';
}
