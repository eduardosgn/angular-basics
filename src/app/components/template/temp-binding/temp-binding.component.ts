import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temp-binding.component.html',
  styleUrl: './temp-binding.component.scss',
})
export class TempBindingComponent {
  public name = 'Eduardo Nascimento';
  public age = 28;
  public condition = true;
  public clientX = 0;
  public clientY = 0;

  getCurrentDate(): string {
    const date = new Date();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  incrementAge(): void {
    this.age++;
  }

  decrementAge(): void {
    this.age--;
  }

  mouseMoveEvent(event: MouseEvent) {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
  }

  ageComp(): boolean {
    if (this.age >= 28) {
      return true;
    } else {
      return false;
    }
  }
}
