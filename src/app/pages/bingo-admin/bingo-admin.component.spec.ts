import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoAdminComponent } from './bingo-admin.component';

describe('BingoAdminComponent', () => {
  let component: BingoAdminComponent;
  let fixture: ComponentFixture<BingoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BingoAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
