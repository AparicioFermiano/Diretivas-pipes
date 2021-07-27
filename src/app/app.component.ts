import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas-pipes';

  lembrete:string;
  lembretes:Array<string>=[];
  lembreteInput:any;

  variavelSombra:string = '10px 10px yellow';

  salvar(lembreteInput) {
    lembreteInput.value.length > 0 ?
    (this.lembretes=[this.lembrete, ...this.lembretes]) : this.lembrete='';
  }
}