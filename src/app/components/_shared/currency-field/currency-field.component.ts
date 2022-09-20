import { getCurrencySymbol } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-currency-field',
  templateUrl: './currency-field.component.html',
  styleUrls: ['./currency-field.component.less']
})
export class CurrencyFieldComponent implements OnInit {
  @Input()
  public value!: number;

  @Input()
  public currency!: string;

  @Output()
  public save = new EventEmitter<number>();

  @ViewChild('inputField') inputField: ElementRef | undefined;

  public isEditMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.value = Number(this.value);
  }

  public enableEditMode(): void {
    this.isEditMode = true;
    setTimeout(() => {
      this.inputField!.nativeElement.value = this.value;
      this.inputField!.nativeElement.focus();
      this.inputField!.nativeElement.select();
    }, 1);
  }

  public disableEditMode(): void {
    this.isEditMode = false;
  }

  public saveClick(autoSave: boolean = false): void {
    if (autoSave && (!this.inputField!.nativeElement.value || this.inputField!.nativeElement.value == 0)) {
      return;
    }

    this.value = this.inputField!.nativeElement.value;
    this.save.emit(this.value);
    this.disableEditMode();
  }

  public inputFieldKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      this.saveClick();
    }
    else if (event.code === 'Escape') {
      this.disableEditMode();
    }
  }
}
