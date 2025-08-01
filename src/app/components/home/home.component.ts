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

  ngOnInit(): void {
    this.writeTextAutomatically('Boss', 'name');
    // this.writeTextAutomatically('Code Wizard', 'shortDescr');
    // this.writeTextAutomatically('Software Engenieer', 'shortDescr');
    // this.writeTextAutomatically('Web Developer', 'shortDescr');
  }

  private writeTextAutomatically(finalText: string, refText: keyof HomeTexts) {
    try {
      const fullText = finalText;
      this.typewriterService.typeText(
        fullText,
        (current) => {
          this.texts[refText] = current;
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
