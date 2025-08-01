import { Component, OnInit } from '@angular/core';
import { HomeTexts } from 'src/app/shared/models/home/home-texts';
import { TypewriterService } from 'src/app/shared/services/typeWrite/type-writer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  texts: HomeTexts = {
    name: '',
    shortDescr: '',
    longDescr: ''
  }

  constructor(private typewriterService: TypewriterService) { }

  async ngOnInit(): Promise<void> {
    await this.writeTextAutomatically('Boss', 'name');
    await this.writeTextAutomatically('Code Wizard', 'shortDescr');
    await this.writeTextAutomatically('Software Engineer', 'shortDescr');
    await this.writeTextAutomatically('Expert AI user', 'shortDescr');
    await this.writeTextAutomatically('Web Developer', 'shortDescr');
  }

  private async writeTextAutomatically(finalText: string, refText: keyof HomeTexts): Promise<void> {
    try {
      const fullText = finalText;
  
      await new Promise<void>((resolve, reject) => {
        this.typewriterService.typeText(
          fullText,
          (current) => {
            this.texts[refText] = current;
          },
          80, // velocità in ms
          () => {
            console.log('Scrittura completata!');
            resolve(); // risolve la Promise
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  }
}
