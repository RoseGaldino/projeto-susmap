import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor(private authServices: AuthService) { }

  ngOnInit() {
  }
  visualizarMenu(){
    return this.authServices.visualizarMenu();
  };

}
