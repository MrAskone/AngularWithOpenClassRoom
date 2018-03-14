import { Component } from '@angular/core';

@Component({
    selector: 'evenement',
    template: `
    <input #box
    (keyup.enter)="values=box.value"
    (blur)="values=box.value">
    <p>Bonjour {{ values }}</p>
    `
})
export class SandboxComponent {
    values:string = '';

    // onKey(event: any) {
    //     this.values = "Bonjour " + event.target.value;
    // }



    // onKey(event: KeyboardEvent) {
    //     this.values = 'Bonjour ' + (<HTMLInputElement>event.target).value;
    //   }

    // onKey(value: string) {
    //     this.values = "Bonjour " + value;
    // }
}