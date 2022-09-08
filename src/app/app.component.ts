import { Component } from '@angular/core';
import {GifsServiceService} from '../app/gifs/services/gifs-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gifsApp';

  constructor(nombre:GifsServiceService){
  }
}
