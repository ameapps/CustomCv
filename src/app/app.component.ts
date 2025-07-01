import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TypewriterService } from './shared/services/typeWrite/type-writer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'customCv';
  displayedText = '';

  constructor(
    private translate: TranslateService,
    private typewriterService: TypewriterService
  ) {
    translate.setDefaultLang('it');
  }
  ngOnInit() {
    const fullText = 'Ciao! Sto scrivendo in automatico... 🚀';

    this.typewriterService.typeText(
      fullText,
      (current) => {
        this.displayedText = current;
      },
      80, // velocità in ms
      () => {
        console.log('Scrittura completata!');
      }
    );
  }
}
