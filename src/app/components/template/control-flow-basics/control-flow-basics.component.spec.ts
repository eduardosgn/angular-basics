import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowBasicsComponent } from './control-flow-basics.component';

describe('ControlFlowBasicsComponent', () => {
  let component: ControlFlowBasicsComponent;
  let fixture: ComponentFixture<ControlFlowBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFlowBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
