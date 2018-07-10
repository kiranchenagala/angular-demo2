import { Directive, ElementRef, HostListener, HostBinding, style, Input } from '@angular/core'

@Directive({
    selector : '[apphighlight]'
})

export class HighlightDirective{

    @Input('myColor') myColor : string;

    @HostBinding('style.backgroundColor') bgColor : string;

    @HostListener('mouseenter') mouseenter(){
        // alert('Mouse entered');
        // this.elementRef.nativeElement.style.backgroundColor = "aqua";
        this.bgColor = this.myColor;
    }

    @HostListener('mouseleave') mouseleave(){
        // alert('Mouse leaving');
        // this.elementRef.nativeElement.style.backgroundColor = "transparent";
        this.bgColor = "transparent";
    }

   constructor(private elementRef : ElementRef){
    //    this.elementRef.nativeElement.style.backgroundColor = "aqua";
    //    console.log(this.elementRef.nativeElement);
   }
}