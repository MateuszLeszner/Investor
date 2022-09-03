import { getCurrencySymbol } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-currency-field',
  templateUrl: './currency-field.component.html',
  styleUrls: ['./currency-field.component.less']
})
export class CurrencyFieldComponent implements OnInit {
  @Input()
  public value!: number;

  @Input()
  public walletCurrency!: string;

  @Output()
  public save = new EventEmitter<number>();

  @ViewChild('inputField') inputField: ElementRef | undefined;

  public currencySymbol?: string;
  public isEditMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.currencySymbol = getCurrencySymbol(this.walletCurrency, 'narrow');
  }

  public enableEditMode(): void {
    this.isEditMode = true;
    setTimeout(() => {
      this.inputField!.nativeElement.value = this.value;
      this.inputField!.nativeElement.focus();
    }, 1);
  }

  public disableEditMode(): void {
    this.isEditMode = false;
  }

  public saveClick(): void {
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
