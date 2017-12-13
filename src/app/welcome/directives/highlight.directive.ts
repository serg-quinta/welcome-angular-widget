import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  public constructor(
    private _el: ElementRef
  ) {}

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this._highlight('#179b77', '#fff');
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this._highlight(null, null);
  }

  private _highlight(bg: string, color: string): void {
    this._el.nativeElement.style.backgroundColor = bg;
    this._el.nativeElement.style.color = color;
  }

}
