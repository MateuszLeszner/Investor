import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbEntity } from 'src/app/models/db-entity';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.less']
})
export class DeleteButtonComponent implements OnInit {
  @Output()
  public deleteConfirmed: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public item!: DbEntity;

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItem(): void {
    if (confirm(`Czy na pewno usunąć ${this.item.name}`)) {
      this.deleteConfirmed.emit(this.item.id);
    }
  }
}
