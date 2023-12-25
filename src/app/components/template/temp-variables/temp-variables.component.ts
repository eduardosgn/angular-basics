import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentBasics } from '../../component-basics/component-basics.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-temp-variables',
  standalone: true,
  imports: [ComponentBasics],
  templateUrl: './temp-variables.component.html',
  styleUrl: './temp-variables.component.scss',
})
export class TempVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public h2Text!: ElementRef;
  @ViewChild(ComponentBasics) public childComponent!: ComponentBasics;

  html: SafeHtml | string = 'Code will be generated here';

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.h2Text.nativeElement.innerText);
    console.log(this.childComponent);
  }

  generateCode(e: Event, tag: string, content: string): void {
    e.preventDefault();
    const htmlString = `<${tag}>${content}</${tag}>`;
    this.html = this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }
}
