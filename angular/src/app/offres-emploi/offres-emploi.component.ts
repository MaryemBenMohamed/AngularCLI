import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listeEmploi!: Emploi[];
  nb!:number
  searchText!: string

  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[
      {reference: '1', titre: 'E-1', entreprise:'Zara', etat: false},
      {reference: '2', titre: 'E-2', entreprise:'Stradivarus', etat: true},
      {reference: '3', titre: 'E-3', entreprise:'Strass', etat: true},
      
    ]
  }

  Bilan(){
    this.nb=0
    for(let i=0; i<this.listeEmploi.length; i++){
      if (this.listeEmploi[i].etat==true) this.nb++

    }

  }

  Search(){
    this.listeEmploi=this.listeEmploi.filter((x)=>x.entreprise.match(this.searchText))

  }

}
