import { Component, NgIterable } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.scss']
})
export class MenuTitleComponent {
  loginsearch: Array<{class: string, textContent: string}> = [
    {class:"login",textContent:"ENTRAR"},
    {class:"pipe",textContent:"|"},
    {class:"sign",textContent:"ASSINAR"},
  ];

  topics: Array<string> = [
    "ÚLTIMAS NOTÍCIAS","ELÉTRICOS","LONGA DURAÇÃO","TESTES","SEGREDO","VÍDEOS","TABELA DE PREÇOS"   
  ]

}
