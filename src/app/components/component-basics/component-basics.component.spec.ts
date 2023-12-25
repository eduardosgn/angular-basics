import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBasics } from './component-basics.component';

describe('ComponentBasics', () => {
  let component: ComponentBasics;
  let fixture: ComponentFixture<ComponentBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBasics],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentBasics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
