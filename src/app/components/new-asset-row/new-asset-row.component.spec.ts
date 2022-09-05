import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssetRowComponent } from './new-asset-row.component';

describe('NewAssetRowComponent', () => {
  let component: NewAssetRowComponent;
  let fixture: ComponentFixture<NewAssetRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAssetRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAssetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
