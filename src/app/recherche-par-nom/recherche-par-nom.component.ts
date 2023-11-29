import { Component } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  joueurs : joueur []=[];
  alljoueurs:joueur[]=[];
  nomjoueur!:String;
  searchTerm!:string;
  ngOnInit(): void {
    this.joueurs = this.JoueurService.listeJoueur();
    this.alljoueurs=this.joueurs;
    }
  constructor(private JoueurService:JoueurService){}
  onChange() {
    this.joueurs = this.JoueurService.rechercherParNom(this.searchTerm);
    console.log('Filtered Vetements:', this.joueurs);
  }
  onKeyUp(filterText : string){ this.joueurs = this.joueurs.filter(item => item.nomjoueur.toLowerCase().includes(filterText)); }
  

}
