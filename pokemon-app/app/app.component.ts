import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from './mock-pokemons';
// import { Pokemon } from './pokemon';

@Component ({
    selector: 'pokemon-app',
    template: `
    <nav>
      <div class="nav-wrapper teal">
        <a href="#" class="brand-logo center">pokemon-app</a>
      </div>
    </nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent {}
;