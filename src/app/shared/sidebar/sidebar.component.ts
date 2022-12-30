import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    this.initEffect();
  }

  @ViewChild('asTitle') 
  asTitle!: ElementRef

  initEffect = () => {
    const target = this.asTitle.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'var(--texto)'
    });
    
    writer
    .changeCursorColor('var(--texto)')
      .type('Soy desarrollador web.')
      .rest(4000)
      .start();
  }
}
