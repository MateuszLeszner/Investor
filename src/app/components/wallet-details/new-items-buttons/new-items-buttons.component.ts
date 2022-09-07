import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-new-items-buttons]',
  templateUrl: './new-items-buttons.component.html',
  styleUrls: ['./new-items-buttons.component.less']
})
export class NewItemsButtonsComponent implements OnInit {
  @Input()
  public containerButton: boolean = true;

  @Output()
  public newAssetClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public newContainerClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
