import { Directive , ElementRef, Renderer2,HostListener} from "@angular/core";

@Directive({
    selector:'[heighlight]'
})

export class customAttributeHeightlightDirective{
    constructor(private el: ElementRef, private renderer: Renderer2){
        
        renderer.setStyle(el.nativeElement,'backgroundColor', 'yellow');
    }

   
    @HostListener('mouseover') onMouseOver() {
        this.ChangeBgColor('red');
    }

    @HostListener('click') onClick() {
        window.alert('Host Element Clicked');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.ChangeBgColor('black');
    }

    ChangeBgColor(color: string) {

        this.renderer.setStyle(this.el.nativeElement, 'color', color);
    }

}