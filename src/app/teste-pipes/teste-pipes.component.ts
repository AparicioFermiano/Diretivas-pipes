import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-pipes',
  templateUrl: './teste-pipes.component.html',
  styleUrls: ['./teste-pipes.component.css']
})
export class TestePipesComponent implements OnInit {

  valorDoDolar:number = 5.55;
  data = new Date();
  inflacao:number = 0.03;
  valorDecimal:number = 0.554339;
  nome:string = "josé da silva";

  endereco:object = {
    rua: "Rua k",
    numero: 121,
    bairro: "Vila da Silva",
    cidade: "Goiânia",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
