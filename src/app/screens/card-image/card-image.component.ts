import { Component, OnInit } from '@angular/core';

interface ISapato{
  id:number
  imagem: string
  descricao: string
  preco: number
}

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  sapatos: ISapato[]= [
    {
      "id": 1,
      "imagem": "https://openshoes.netlify.app/src/assets/img/orange-shoes.svg",
      "descricao": "Tênis Nike Masculino-Branco e Laranja ",
      "preco": 49.99
    },
    {
      "id": 2,
      "imagem": "https://openshoes.netlify.app/src/assets/img/orange-shoes.svg",
      "descricao": "Tênis Masculino- Conforto",
      "preco": 59.99
    },
    {
      "id": 3,
      "imagem": "https://openshoes.netlify.app/src/assets/img/orange-shoes.svg",
      "descricao": "Sapato Masculino-Laranja e Branco",
      "preco": 149.99
    },
    {
      "id": 4,
      "imagem": "https://openshoes.netlify.app/src/assets/img/orange-shoes.svg",
      "descricao": "Tênis Nike Ultraleve Masculino",
      "preco": 59.99
    },
    {
      "id": 5,
      "imagem": "https://openshoes.netlify.app/src/assets/img/orange-shoes.svg",
      "descricao": "Tênis Masculino Caminhada ",
      "preco": 40.99
    },
    {
      "id": 6,
      "imagem": "https://openshoes.netlify.app/src/assets/img/orange-shoes.svg",
      "descricao": "Tênis Nike Ultraleve Masculino",
      "preco": 69.99
    }

  ]
  
  constructor() { }

  ngOnInit(): void {
    console.log()
  }


}
