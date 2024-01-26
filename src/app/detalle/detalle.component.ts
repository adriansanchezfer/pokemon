import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { DataService } from '../data.service';
import { DetallePokemon } from '../models/detalle-pokemon.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent implements OnInit{


  PokemonElegido: DetallePokemon;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public service: DataService){}

  ngOnInit(){


    this.activatedRoute.queryParams
    .subscribe((res: any)=>{
      console.log(res)
  if(res){

      this.service.getDetalle(res.url).subscribe((res: any) => {
          console.log(res)

          this.PokemonElegido = res
          console.log(this.PokemonElegido, 'pokemon elegido')
      })
  }
    })
  }


  volver(){

    this.router.navigate(['home'])
  }
}
