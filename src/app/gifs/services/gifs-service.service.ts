import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Gif, SearcGifsResponse } from '../Interfaces/gifs.interfaces';



//Este decorador permite que podamos usar el Service dentro de todos los modulos sin necesidad de importarlo
@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private apiKey : string = '9UcFTbuyC5U7FQapO44TmgfMYSRCUsuG'
  private _historial:string[] = [];
  public resultados : Gif[] = []

  get historial(){
    
    return this._historial
  }

  //Este metodo lo utilizamos en BusquedaComponent
  buscarGifs(query:string){
    
    if (this._historial.includes(query) == false){
      this._historial.unshift( query );
    }else{
      return
    }
    console.log(this._historial)
 
    /*Utilizamos la variable QUERY y la usamos en nuestro link
    Query es el gif que queremos buscar*/
    this.http.get<SearcGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=9UcFTbuyC5U7FQapO44TmgfMYSRCUsuG&q=${query}&limit=10`)
      .subscribe((resp) =>{
        console.log(resp.data);
        
        //Vamos a almacenar la Data del JSON en un arreglo
        this.resultados = resp.data
      } )


  }

  constructor(private http : HttpClient) {}  

}
