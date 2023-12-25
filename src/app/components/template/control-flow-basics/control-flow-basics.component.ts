import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

type namesArrTypes = {
  name: string;
};

@Component({
  selector: 'app-control-flow-basics',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './control-flow-basics.component.html',
  styleUrl: './control-flow-basics.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ControlFlowBasicsComponent {
  @ViewChild('name') public nameInput!: ElementRef;

  loadingData$: Observable<string[]> = of([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]).pipe(delay(1000));

  namesArr: namesArrTypes[] = [{ name: 'John' }, { name: 'Jane' }];

  addNewEntry(value: string, e: Event): void {
    e.preventDefault();
    this.namesArr.push({ name: value });
    this.nameInput.nativeElement.value = '';
  }
}
