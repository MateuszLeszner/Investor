import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsListItemComponent } from './assets-list-item.component';

describe('AssetsListItemComponent', () => {
  let component: AssetsListItemComponent;
  let fixture: ComponentFixture<AssetsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
