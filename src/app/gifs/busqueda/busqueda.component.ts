import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent{

  constructor(private gifsService:GifsServiceService){}

  // ViewChild me busca la referecia en el HTML
  @ViewChild('valor') txtBuscar!:ElementRef<HTMLInputElement>;


  buscar(){
    
    const valor = this.txtBuscar.nativeElement.value
    if (valor.trim() == ''){
      console.log(valor)
      this.txtBuscar.nativeElement.value = '';
      return
    }else{
      this.gifsService.buscarGifs(valor)

      this.txtBuscar.nativeElement.value = '';
    }


  }


}
