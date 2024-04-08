import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmSubtractionComponent } from './emm-subtraction.component';

describe('EmmSubtractionComponent', () => {
  let component: EmmSubtractionComponent;
  let fixture: ComponentFixture<EmmSubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmmSubtractionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmmSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
