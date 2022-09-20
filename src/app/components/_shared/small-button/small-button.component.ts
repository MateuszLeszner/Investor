import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html'
})
export class SmallButtonComponent implements OnInit {
  @Input()
  public icon: string = "bi-question-lg";

  @Output()
  public buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
