import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsListItemComponent } from './wallets-list-item.component';

describe('WalletsListItemComponent', () => {
  let component: WalletsListItemComponent;
  let fixture: ComponentFixture<WalletsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
