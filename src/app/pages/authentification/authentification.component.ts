import { Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  loginMode: boolean = true; // Indicateur du mode de connexion

  // Variables pour le formulaire de connexion
  loginUsername: string = '';
  loginPassword: string = '';

  // Variables pour le formulaire d'inscription
  registerUsername: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  confirmPassword: string = '';

  // Fonction pour basculer entre les modes de connexion et d'inscription
  toggleLoginMode() {
    this.loginMode = !this.loginMode;
  }

  // Fonner une action de connexion
  login() {
    // Implémentez ici la logique de connexion
  }

  // Fonction pour effectuer une action d'inscription
  register() {
    // Implémentez ici la logique d'inscription
  }
}
