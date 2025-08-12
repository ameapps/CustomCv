import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TypewriterService } from './shared/services/typeWrite/type-writer-service.service';
import { lastValueFrom } from 'rxjs';
import { DefaultConfig } from './shared/models/defaultConfig';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './shared/services/common/common.service';

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
    private http_service: HttpClient,
    private typewriterService: TypewriterService,
    private common: CommonService
  ) {
    translate.setDefaultLang('it');
  }

  async ngOnInit() {
    this.common.appConfig = await this.loadAppConfig();
    console.info('info', this.common.appConfig);
    this.writeTexyAutomatically();
  }

  async loadAppConfig(): Promise<DefaultConfig> {
    const value = await lastValueFrom(
      this.http_service.get<DefaultConfig>('assets/config/default-config.json')
    );
    return value;
  }

  private writeTexyAutomatically() {
    try {
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
    } catch (error) {
      console.error(error);
    }
  }
}
