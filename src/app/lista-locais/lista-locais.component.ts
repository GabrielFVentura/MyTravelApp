import { Component, OnInit } from '@angular/core';
import { LOCAIS } from './lista-locais.class';
import { Local } from './locais';

@Component({
  selector: 'app-lista-locais',
  templateUrl: './lista-locais.component.html',
  styleUrls: ['./lista-locais.component.css']
})
export class ListaLocaisComponent implements OnInit {
  locais = LOCAIS;
  constructor() { }

  ngOnInit() {
  }

}
