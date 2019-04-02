import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[app-dropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen=false;
    @HostListener('click') toggle() {
        this.isOpen = !this.isOpen;
    }
}