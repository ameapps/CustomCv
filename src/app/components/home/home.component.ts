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
    longDescr: `Self-taught programmer motivated by passion and personal projects. Expert
    of searching bugs on Google and quickly scanning the best StackOverflow
    answers.`
  }

  constructor(private typewriterService: TypewriterService) { }

  async ngOnInit(): Promise<void> {
    await this.writeTextAutomatically('Boss', 'name');
    await this.writeTextAutomatically('CODE WIZARD', 'shortDescr');
    await this.writeTextAutomatically('SOFTWARE ENGINEER', 'shortDescr');
    await this.writeTextAutomatically('EXPERT AI USER', 'shortDescr');
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
