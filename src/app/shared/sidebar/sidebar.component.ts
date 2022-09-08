import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(private gifsServices: GifsServiceService) {
  }


  get historial(){
    return (this.gifsServices.historial)
  }

}
