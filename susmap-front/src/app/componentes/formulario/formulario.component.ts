import { Component, OnInit } from '@angular/core';
import { QualificadoresService } from 'src/app/services/qualificadores.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public sintomas;

  constructor(private qualificadoService: QualificadoresService) { 
    this.getQualificadores();
  }


  getQualificadores() {
    this.qualificadoService.getQualificadores().subscribe((data => {
      this.sintomas = data;
      console.log(this.sintomas);
    }));
  }

  ngOnInit() {
    
  }

}
