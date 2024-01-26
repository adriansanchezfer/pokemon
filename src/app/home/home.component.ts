import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Pokemon, respuesta } from '../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  pokemon: Pokemon[] = [];
  constructor(public service: DataService, public router: Router){}

  ngOnInit(){

     this.service.getPokemon().subscribe((res: any)=>{
      this.pokemon = res.results
     });

  

  }

  verPokemon(pokemon: Pokemon){

    this.router.navigate([`/detalle/${pokemon.name}`], {queryParams: {url: pokemon.url}} )
  }
}
