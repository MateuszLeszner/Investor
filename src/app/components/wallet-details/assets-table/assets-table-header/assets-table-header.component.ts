import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-assets-table-header]',
  templateUrl: './assets-table-header.component.html'
})
export class AssetsTableHeaderComponent implements OnInit {
  @Output()
  public createContainerClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
