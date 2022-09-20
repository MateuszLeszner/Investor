import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-assets-table-collapse-button]',
  templateUrl: './assets-table-collapse-button.component.html'
})
export class AssetsTableCollapseButtonComponent implements OnInit {
  @Input()
  public isCollapsed!: boolean;

  @Output()
  public collapseChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
