import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentBasics } from './components/component-basics/component-basics.component';
import { TempBindingComponent } from './components/template/temp-binding/temp-binding.component';
import { TempVariablesComponent } from './components/template/temp-variables/temp-variables.component';
import { ControlFlowBasicsComponent } from './components/template/control-flow-basics/control-flow-basics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ComponentBasics,
    TempBindingComponent,
    TempVariablesComponent,
    ControlFlowBasicsComponent,
  ],
  styleUrl: './app.component.scss',
  template: `
    <nav
      class="bg-slate-900 text-slate-100 w-full py-4 fixed top-0 px-3 md:px-0"
      #navbar
    >
      <div class="container flex items-start justify-between">
        <p>Angular basics</p>
        <p>v2+</p>
      </div>
    </nav>

    <main class="container pt-20 px-3 md:px-0">
      <h1 class="text-3xl font-bold underline">{{ title }}</h1>
      <p>Components</p>
      <app-component-basics />
      <app-temp-binding />
      <app-temp-variables />
      <app-control-flow-basics />
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'Curso de Angular 2+ | Básicos da lib';
  @ViewChild('navbar') navbar: ElementRef | undefined;

  private scrollHandler: (() => void) | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.scrollHandler = this.renderer.listen('window', 'scroll', () => {
      const opacity = Math.max(0.5, 1 - window.scrollY / 600);
      this.renderer.setStyle(this.navbar?.nativeElement, 'opacity', opacity);
    });
  }

  ngOnDestroy(): void {
    this.scrollHandler!();
  }
}
