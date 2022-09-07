import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.less']
})
export class TextFieldComponent implements OnInit {
  @Input()
  public value!: string;

  @Output()
  public save = new EventEmitter<string>();

  @ViewChild('inputField') inputField: ElementRef | undefined;

  public isEditMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
