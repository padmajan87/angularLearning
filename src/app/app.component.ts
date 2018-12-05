import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selComp: string = 'recipe';

  displaySelComp(displayComp: string) {
    this.selComp = displayComp;
  }
}
