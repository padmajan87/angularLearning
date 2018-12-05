import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedComp = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  enableSelectedComp(selComp: string) {
    this.selectedComp.emit(selComp);
  }

}
