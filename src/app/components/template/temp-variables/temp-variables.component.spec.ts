import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempVariablesComponent } from './temp-variables.component';

describe('TempVariablesComponent', () => {
  let component: TempVariablesComponent;
  let fixture: ComponentFixture<TempVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempVariablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
