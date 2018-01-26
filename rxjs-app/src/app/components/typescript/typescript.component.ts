import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {HighlightJsService} from 'angular2-highlight-js';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private highlightJsService : HighlightJsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.highlightJsService.highlight(this.el.nativeElement.querySelector('.typescript'));
  }

}
