import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public httpClient: HttpClient) { }


  getPokemon() {

   return this.httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151')

  }



  getDetalle(url: string){
    return this.httpClient.get(`${url}`)
  }
}
