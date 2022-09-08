import { Component, OnInit, Input } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent  {
  
  public titulo: string = 'nombre imagen';
  
  constructor(public gifsService : GifsServiceService){}

   
    //Vamos a retornar el arreglo que contiene nuestra busqueda
    get resultados(){
      return this.gifsService.resultados
    }
     
  
}
