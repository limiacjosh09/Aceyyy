import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesPopupComponent } from './memories-popup.component';

describe('MemoriesPopupComponent', () => {
  let component: MemoriesPopupComponent;
  let fixture: ComponentFixture<MemoriesPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemoriesPopupComponent]
    });
    fixture = TestBed.createComponent(MemoriesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
