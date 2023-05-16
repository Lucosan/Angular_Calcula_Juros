import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css']
})
export class JurosCompostosComponent implements OnInit {
  capital = 1;
  taxa = 1;
  tempo = 2;

  constructor() {}

  ngOnInit() {}

  getMontanteJurosCompostos() {
    let list: number[] = [];
    let juros = this.taxa * 0.1;
    for (let x = 0; x < this.tempo; x = x + 1) {
      list.push(this.capital * (1 + juros) ** this.tempo);
    }
    return list;
  }
}
