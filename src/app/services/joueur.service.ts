import { Injectable } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { Position } from '../modele/position.modele';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  joueurs : joueur []; //un tableau de joueurs
  j !:joueur;
  position!:Position[];
  constructor() { 
    this.position = [ {idCat : 1, nomCat : "BU"},
                      {idCat : 2, nomCat : "MC"},
                      {idCat : 3, nomCat : "GK"}];                      

    this.joueurs = [
      {idjoueur : 1, nomjoueur : "messi52", prixjoueur : 3000.600, equipejoueur :"barcalona",position:{idCat : 1, nomCat : "BU"}},
      {idjoueur : 2, nomjoueur : "ronaldo", prixjoueur : 450, equipejoueur:"real madrid",position:{idCat : 1, nomCat : "GK"}},
      {idjoueur : 3, nomjoueur :"rashford", prixjoueur : 900.123, equipejoueur:"man united",position:{idCat : 2, nomCat : "mc"}},
       ];
  }
  listeJoueur():joueur []
  {
    return this.joueurs;
  }
  ajouterjoueurs(j :joueur)
  {
    this.joueurs.push(j);

  }
  supprimerJoueur( j: joueur){
    //supprimer le produit prod du tableau produits
    const index = this.joueurs.indexOf(j, 0);
    if (index > -1) {
    this.joueurs.splice(index, 1);
    }
    }
    consulterJoueur(id:number): joueur{
      return this.joueurs.find(p => p.idjoueur == id)!;
      }
      trierjoueur(){
        this.joueurs = this.joueurs.sort((n1,n2) => {
        if (n1.idjoueur! > n2.idjoueur!) {
        return 1;
        }
        if (n1.idjoueur! < n2.idjoueur!) {
        return -1;
        }
        return 0;
        });
        }
    updatejoueur(p : joueur)
    {
      //console.log(this.currentjoueur);
      this.supprimerJoueur(p);
      this.ajouterjoueurs(p);
      this.trierjoueur();

    }
    listePositions():Position[] {
      return this.position;
      }
      consulterPosition(id:number): Position{
        return this.position.find(cat => cat.idCat == id)!;
        }
    
        rechercherParpos(idCat: number): joueur[] {
          console.log("Selected genre ID (Type):", typeof idCat); 
      
          const filterevet = this.joueurs.filter(vet => {
            console.log("idcat",idCat);
            console.log("batata", vet.position.idCat);
            console.log("Concert with Genre:", vet);
            return vet.position.idCat == idCat;
          });
          console.log("Filtered Concerts:", filterevet);
      
          if (filterevet.length === 0) {
            console.log("Aucun concert trouvé");
          }
      
          return filterevet;
        }

        rechercherParNom(nomjoueur: String): joueur[] {
          const filterevet = this.joueurs.filter(vet => {
            return vet.nomjoueur.toLowerCase().includes(nomjoueur.toLowerCase());
          });
          console.log("Filtered Concerts:", filterevet);
          return filterevet;
        }
      
}
