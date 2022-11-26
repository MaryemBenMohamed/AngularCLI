import { Component, OnInit } from '@angular/core';
import { command } from '../core/command';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  commande!: command
  nom!: string
  email!: string

  constructor() { }

  ngOnInit(): void {
    this.commande=new command()
  }
  add(){
    console.log(this.commande)
   }

}
