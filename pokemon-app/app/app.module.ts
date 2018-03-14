import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox.component';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, SandboxComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}