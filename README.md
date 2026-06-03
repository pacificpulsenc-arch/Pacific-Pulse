# Pacific Pulse

Site vitrine de **Pacific Pulse**, agence web & design en Nouvelle-Calédonie.
Page unique en HTML / CSS / JavaScript pur (aucune dépendance à compiler).

## Aperçu local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
node app.js        # http://localhost:3000
```

## Mise en ligne

### Option A — GitHub Pages (recommandé, gratuit)
1. Pousser ce dépôt sur GitHub.
2. Dans le dépôt : **Settings → Pages**.
3. **Source** : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. Enregistrer. Le site est publié sur `https://<utilisateur>.github.io/<dépôt>/`.

(Le fichier `.nojekyll` est présent pour servir le site tel quel.)

### Option B — Hostinger (Node.js)
Voir `DEPLOIEMENT-HOSTINGER.md`. Fichier de démarrage : `app.js`.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Le site complet (structure, styles, animations) |
| `nav-logo.png` | Logo wordmark Pacific Pulse |
| `showcase.png` | Image de la carte 3D du hero |
| `app.js` | Serveur Node.js statique (zéro dépendance) |
| `package.json` | Démarrage Node (`npm start`) |
| `editor.html` | Éditeur visuel (outil de dev pour repérer les éléments) |

## Marque

- Couleur principale : Pacific Blue `#001fc9`
- Police : Inter
- Fond clair, texte bleu marine `#0b1033`

## À finaliser

- **Formulaire de contact** : affiche un succès mais n'envoie pas encore d'e-mail
  (à connecter via un service type Formspree ou un envoi côté serveur).
