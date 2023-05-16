import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {
  capital = 1;
  taxa = 1;
  tempo = 2;

  constructor() {}

  ngOnInit() {}

  getMontanteJurosSimples() {
    let list: number[] = [];
    let juros = this.taxa * 0.1;
    for (let x = 0; x < this.tempo; x = x + 1) {
      list.push (this.capital + juros * this.tempo);
    }
    return list;
  }
}
