import type { NextPage } from "next";

const Exercise2: NextPage = () => {
  return (
    <div>
      <h1>Exercice 2</h1>
      <p>
        <ul>
          Consignes : - Mettre en forme l&apos;exercice 2
          <li>
            - Créer ci-dessous un formulaire d&apos;inscription contenant les
            champs : Prénom, nom, email, mot de passe, checkbox pour accepter un
            quelconque règlement et un bouton de validation.
          </li>
        </ul>
        <form method="post">
          <div>
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Nom"
            />
          </div>

          <div>
            <label htmlFor="surname">Prénom</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Prenom"
            />
          </div>
          <div>
            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              name="E-mail"
              placeholder="personne@boite.truc"
            />
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
      </p>
    </div>
  );
};

export default Exercise2;
