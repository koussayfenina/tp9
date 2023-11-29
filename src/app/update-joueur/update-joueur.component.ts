import { Component } from '@angular/core';
import { JoueurService } from '../services/joueur.service';
import { ActivatedRoute } from '@angular/router';
import { joueur } from '../modele/joueur.modele';
import { Position } from '../modele/position.modele';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent {
  currentjoueur = new joueur;
  position!:Position[];
  updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private produitService: JoueurService){}
    ngOnInit() {
      //console.log(this.activatedRoute.snapshot.params['id']);}
      this.position = this.produitService.listePositions();
      this.currentjoueur = this.produitService.consulterJoueur(this.activatedRoute.snapshot. params['id']);
      console.log(this.currentjoueur);
      this.updatedCatId=this.currentjoueur.position.idCat;
    }
    updateProduit()
{ //console.log(this.currentProduit);
  this.currentjoueur.position=this.produitService.consulterPosition(this.updatedCatId);
  this.produitService.updatejoueur(this.currentjoueur);
}

}
