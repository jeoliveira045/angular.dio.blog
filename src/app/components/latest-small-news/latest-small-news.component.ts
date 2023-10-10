import { Component } from '@angular/core';

class Materia{
  type?: string
  title?: string;
  description?: string;
  image?: string;
}

@Component({
  selector: 'app-latest-small-news',
  templateUrl: './latest-small-news.component.html',
  styleUrls: ['./latest-small-news.component.scss']
})
export class LatestSmallNewsComponent {

  materiaarr: Array<Materia> = [{
    type: "Carros elétricos",
    title: "Jeep Grand Cherokee 4xe chega por R$ 569.990 de olho em Volvo e Porsche",
    description: "Jeep mais caro do Brasil, Grand Cherokee 4xe não empolga pela mecânica híbrida, mas sim pelo conforto, tecnologia e capacidade off-road",
    image: "https://quatrorodas.abril.com.br/wp-content/uploads/2023/10/Jeep_Grand_Cherokee_4xe_018.jpg?quality=70&strip=info&w=600&h=400&crop=1"
  },{
    type: "Clássico",
    title: "Jeep Grand Cherokee estabeleceu o padrão entre os SUVs de luxo",
    description: "Versátil e bem projetado, ele estabeleceu um novo padrão de luxo, conforto e desempenho no segmento de utilitários esportivos",
    image: "https://quatrorodas.abril.com.br/wp-content/uploads/2023/08/ABRE-CLASSICOS-CHEROKEE-1FLP1097-e1696728432639.webp?w=600&h=400&crop=1"
  }, {
    type: "Testes",
    title: "Testamos: Peugeot 208 Turbo anda mais e gasta menos que HB20, Polo e Onix?",
    description: "Peugeot 208 finalmente estreia um motor 1.0 turbo para encontrar seu espaço entre os hatches compactos mais caros. Mas seu desempenho é o melhor?",
    image: "https://quatrorodas.abril.com.br/wp-content/uploads/2023/10/PEUGEOT-208-Turbo-style-2024-1.jpg?quality=70&strip=info&w=600&h=400&crop=1"
  }, {
    type: "Top ten",
    title: "Dez carros carros clássicos da Argentina que nunca vieram ao Brasil",
    description: "Passado do mercado automotivo argentino está repleto de soluções inusitadas e de carros que fizeram inveja nos brasileiros entre os anos 1960 e 1990",
    image: "https://quatrorodas.abril.com.br/wp-content/uploads/2023/07/Mercedes-Benz-220-D.jpg?quality=70&strip=info&w=600&h=400&crop=1"
  }];

    constructor(){

    }

    
}
