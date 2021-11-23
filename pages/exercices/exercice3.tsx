import type { NextPage } from "next";

const Exercise3: NextPage = () => {
  return (
    <div id="main-content">
      <h1>Exercice 3</h1>

      <p>
        Consignes :
        <ul>
          <li>- Mettre en forme l&apos;exercice 3</li>
          <li>
            - Recopier le formulaire d&apos;inscription précédent ci-dessous
          </li>
          <li>
            - Grâce au fichier global.css, mettre le texte des labels en bleu,
            agrandir la police dans les input texte, placer un bloc en position
            absolue à droite du champ adresse email avec un texte de votre choix
            en police 10px rouge.
          </li>
        </ul>
      </p>
      <form method="post" id="form">
        <div>
          <label htmlFor="lastname">Nom</label>
          <input type="text" id="lastname" name="lastname" placeholder="Nom" />
        </div>

        <div>
          <label htmlFor="surname">Prénom</label>
          <input type="text" id="surname" name="surname" placeholder="Prenom" />
        </div>
        <div id="mail_adress">
          <label htmlFor="mail">E-mail</label>
          <input
            type="email"
            id="mail"
            name="E-mail"
            placeholder="personne@boite.truc"
          />
          <p>Ici un Warning</p>
        </div>
        <div>
          <label htmlFor="password">Mot de Passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
          />
        </div>
        <div>
          <label htmlFor="cgu">CGU</label>
          <input type="checkbox" id="cgu" name="cgu" />
        </div>

        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default Exercise3;
