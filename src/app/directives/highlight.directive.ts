import { Directive, ElementRef } from '@angular/core'

@Directive({
    selector : '[apphighlight]'
})

export class HighlightDirective{
   constructor(private elementRef : ElementRef){
       this.elementRef.nativeElement.style.backgroundColor = "aqua";
    //    console.log(this.elementRef.nativeElement);
   }
}