import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText: string;
  isSuccess = false;

  constructor() {
    this.enteredText = '';
  }

  onInput( value: string ) {
    this.isSuccess = this.randomText === value;
    this.enteredText = value;
  }

  checkChar( letter: string, enterLetter: string ) {
    if (!enterLetter) { return 'pending'; }
    return letter === enterLetter ? 'true' : 'false';
  }
}
