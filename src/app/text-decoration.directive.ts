import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextDecoration]'
})

export class TextDecorationDirective {

  @Input () decorStyle: string;

  constructor(private elm: ElementRef) {
  }

  @HostListener('mouseenter') onHover() {
    this.decorateMe(this.decorStyle);
    }

  @HostListener('mouseleave') offHover() {
    this.decorateMe('none');
  }


  private decorateMe(newDecorStyle) {
    this.elm.nativeElement.style.textDecoration = newDecorStyle;
  }
}
