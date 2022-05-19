import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public fecha: number = new Date().getFullYear() // Con esto le hacemos buscar el año actual y podemos llamarlo en el html directo con {{}}

  constructor() { }

  ngOnInit(): void {
  }

}
