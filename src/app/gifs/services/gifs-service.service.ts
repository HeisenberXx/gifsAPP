import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _historial:string[] = [];

  get historial(){
    
    return this._historial
  }

  buscarGifs(query:string){
    
    if (this._historial.includes(query) == false){
      this._historial.unshift( query );
    }else{
      return
    }
    console.log(this._historial)

  }

}
