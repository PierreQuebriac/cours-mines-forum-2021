import type { NextPage } from "next";

const Exercise4: NextPage = () => {
  return (
    <div className="container">
      <p>
        Exercice 4 Consignes :
        <ul>
          <li>- Recopier les exercices 1 et 2 ci-dessous</li>
          <li>
            - Les adapter pour que les 2 exercices soient sur 2 colonnes
            différentes sur Desktop, et sur une seule colonne sur Mobile
          </li>

          <li>
            -Adapter le formulaire pour qu&apos;il respecte les guidelines
            Bootstrap sur les formulaires
          </li>
        </ul>
      </p>
      <div className="row">
        <div className="col-md">
          <table className="table">
            <tr>
              <th>Balise</th>
              <th>Contenu</th>
            </tr>
            <tr>
              <td>h1</td>
              <td>titre de niv 1</td>
            </tr>
            <tr>
              <td>p</td>
              <td>bloc paragraphe</td>
            </tr>
            <tr>
              <td>div</td> <td>bloc div</td>
            </tr>
            <tr>
              <td>table</td>
              <td>début de tableau</td>
            </tr>
            <tr>
              <td>th</td>
              <td>en-tête</td>
            </tr>
            <tr>
              <td>tr</td>
              <td>bloc ligne</td>
            </tr>
            <tr>
              <td>td</td>
              <td>bloc colonne (dans un tr) </td>
            </tr>
            <tr>
              <td>ul</td>
              <td>liste non ordonné </td>
            </tr>
          </table>
        </div>
        <div className="col-md">
          <form method="post" className="mb-3">
            <div className="form-label mb-3">
              <label htmlFor="lastname" className="form-label">
                Nom
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Nom"
                className="form-control"
              />
            </div>

            <div className="form-label mb-3">
              <label htmlFor="surname" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Prenom"
                className="form-control"
              />
            </div>
            <div className="form-label mb-3">
              <label htmlFor="mail" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                id="mail"
                name="E-mail"
                placeholder="personne@boite.truc"
                className="form-control"
              />
            </div>
            <div className="form-label mb-3">
              <label htmlFor="password" className="form-label">
                Mot de Passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                className="form-control"
              />
            </div>
            <div className="form-check mb-3">
              <label htmlFor="cgu" className="form-check-label">
                CGU
              </label>
              <input
                type="checkbox"
                id="cgu"
                name="cgu"
                className="form-check-input"
              />
            </div>

            <div className="d-grid gab-2">
              <button className="btn btn-primary" type="submit">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Exercise4;
