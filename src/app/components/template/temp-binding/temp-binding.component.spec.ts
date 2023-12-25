import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempBindingComponent } from './temp-binding.component';

describe('TempBindingComponent', () => {
  let component: TempBindingComponent;
  let fixture: ComponentFixture<TempBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
