import { Component, OnInit } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { JoueurService } from '../services/joueur.service';
import { Position } from '../modele/position.modele';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-joueurs',
  templateUrl: './add-joueurs.component.html',
  styleUrls: ['./add-joueurs.component.css']
})
export class AddJoueursComponent {
  newjoueur= new joueur();
  position!:Position[];
  newIdCat!:number;
  newPosition!:Position;

  constructor(private joueurservice:JoueurService,private route:Router){}

  ngOnInit() {
    this.position = this.joueurservice.listePositions();
    }

  addJoueur(){
    //console.log(this.newjoueur);
    this.newPosition=this.joueurservice.consulterPosition(this.newIdCat);
    this.newjoueur.position=this.newPosition;
    this.joueurservice.ajouterjoueurs(this.newjoueur);
    this.route.navigate(['joueurs'])
    //console.log(this.newjoueur);
  }

}
