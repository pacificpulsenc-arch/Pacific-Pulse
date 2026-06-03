# Mise en ligne sur Hostinger (Node.js)

Le site est servi par un petit serveur Node.js (`app.js`) sans aucune dépendance
à installer. Aucun changement visuel : `index.html` est servi tel quel.

## Fichiers à téléverser (tous dans le même dossier)

- `app.js` ............. le serveur Node.js
- `package.json` ....... la config (startup + version Node)
- `index.html` ......... le site
- `nav-logo.png` ....... logo
- `showcase.png` ....... image de la carte du hero

> L'archive `pacific-pulse-hostinger.zip` contient déjà exactement ces 5 fichiers.

## Étapes dans hPanel (Hostinger)

1. **Connexion** à hPanel → ton hébergement.
2. Menu **Avancé → Node.js** (ou « Configurer Node.js » / « Setup Node.js App »).
3. Cliquer **Créer une application** et renseigner :
   - **Version de Node.js** : 18 ou plus récente
   - **Mode application** : `Production`
   - **Racine de l'application** (Application root) : ex. `pacificpulse`
   - **Fichier de démarrage** (Application startup file) : `app.js`
   - **URL** : ton domaine `pacificpulse.fr` (ou un sous-domaine de test)
4. **Créer**.
5. Ouvrir le **Gestionnaire de fichiers**, aller dans le dossier racine de
   l'application créée, et **téléverser les 5 fichiers** (ou le zip puis « Extraire »).
6. Revenir sur la page Node.js :
   - Cliquer **NPM install** (facultatif ici : aucune dépendance, mais ça valide).
   - Cliquer **Restart** (Redémarrer l'application).
7. Ouvrir le domaine → le site s'affiche. ✅

## Brancher le domaine pacificpulse.fr

Si le domaine n'est pas déjà sur Hostinger : dans hPanel → **Domaines**, pointer
`pacificpulse.fr` vers cet hébergement (ou mettre à jour les DNS chez le
registrar : enregistrements A vers l'IP fournie par Hostinger).

## Notes

- Le serveur écoute sur le port fourni par Hostinger (`process.env.PORT`) :
  rien à configurer côté port.
- Pour mettre à jour le site plus tard : remplacer `index.html` (et/ou les images)
  dans le Gestionnaire de fichiers, puis **Restart** l'application.
- **Formulaire de contact** : il affiche un message de succès mais n'envoie pas
  encore d'e-mail. Pour le rendre fonctionnel, me le demander (ajout d'un envoi
  e-mail côté serveur ou via un service comme Formspree).
