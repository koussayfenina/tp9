import { Component } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { Position } from '../modele/position.modele';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-position',
  templateUrl: './recherche-par-position.component.html',
  styleUrls: ['./recherche-par-position.component.css']
})
export class RechercheParPositionComponent {
joueurs : joueur []=[];
IdCat!:number;
position:Position[]=[];
ngOnInit(): void {
  this.position = this.JoueurService.listePositions();
  }
constructor(private JoueurService:JoueurService){}
onChange() {
  console.log('Selected Type ID:', this.IdCat);

  // Call the service to filter vetements based on the selected Type
  this.joueurs = this.JoueurService.rechercherParpos(this.IdCat);

  // Debugging statement
  console.log('Filtered Vetements:', this.joueurs);
}
}


