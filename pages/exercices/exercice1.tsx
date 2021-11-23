import type { NextPage } from "next";

const Exercise1: NextPage = () => {
  return (
    <div>
      <h1> Exercice 1 </h1>
      <p>
        <ul>
          Consignes :<li>- Mettre en forme l&apos;exercice 1</li>
          <li>
            - En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans
            un tableau avec en-têtes ayant pour colonnes : Balise, Contenu. Dans
            la colonne contenu spécifier la ou les balises qu&apos;il est
            possible d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot;
            (pour les titres par exemple).
          </li>
        </ul>

        <table className="table">
          <tr>
            <th>Balise</th>
            <th>Contenu</th>
            <th>Balise contenu</th>
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
            <td> il </td>
          </tr>
        </table>
      </p>
    </div>
  );
};

export default Exercise1;
