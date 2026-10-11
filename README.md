# Louis Deploys — site des ressources

Site statique Jekyll, publié avec GitHub Pages. Une ressource = un fichier dans `_ressources/`.

## Mettre le site en ligne (une seule fois)

1. Crée un dépôt GitHub (par exemple `louis-deploys-site`) et dépose-y tout le contenu de ce dossier.
2. Dans le dépôt : **Settings → Pages → Build and deployment**, choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
3. Au bout d'une minute, le site est en ligne sur `https://<ton-pseudo>.github.io/<nom-du-depot>/`.
   Tant que tu n'as pas de domaine, mets `baseurl: "/<nom-du-depot>"` dans `_config.yml`.

## Brancher le domaine (quand tu l'auras choisi)

1. Dans **Settings → Pages → Custom domain**, entre `louisdeploys.xyz` (ou `.co`, `.io`).
2. Chez ton registraire, ajoute les enregistrements DNS indiqués par GitHub.
3. Dans `_config.yml` : `url: https://louisdeploys.xyz` et `baseurl: ""`.
4. Coche **Enforce HTTPS**.

## Ajouter une ressource

1. Copie `_ressources/prompt.md` et renomme-le avec le mot-clé en minuscules, sans accent : `_ressources/notion.md`.
2. Remplace les champs (titre, fichier, type, intro, prompt, étapes, astuce…).
3. Dépose le fichier sur GitHub. La page est en ligne à l'adresse `/notion/` en une minute.
4. Dans ManyChat, le lien à envoyer pour le mot-clé NOTION est `https://<ton-domaine>/notion/`.

Champs disponibles dans une ressource :

| Champ | Rôle |
| --- | --- |
| `titre` | Titre WordArt de la page |
| `description` | Texte de l'aperçu du lien dans les DM |
| `fichier` | Nom dans la barre de titre, en capitales (`NOTION.PDF`) |
| `type`, `infos`, `duree` | Badges sous la barre de titre |
| `intro` | Phrase de contexte |
| `tiktok` | Lien de la vidéo (facultatif) |
| `prompt` | Texte à copier ; les `[MOTS]` entre crochets sont surlignés |
| `bouton` | Libellé du bouton orange |
| `fichier_url` | Fichier à télécharger, déposé dans `assets/fichiers/` (à la place du prompt) |
| `video` | Vidéo motion design, déposée dans `assets/videos/` (facultatif) |
| `etapes` | Liste « Comment l'utiliser » |
| `astuce` | Bloc astuce |
| `sticker` | Texte du sticker étoile (`false` pour l'enlever) |
| `densite` | `dense` (par défaut) ou `aeree` pour un guide long |

Pour un guide long, écris le contenu en Markdown sous le second `---` du fichier, et mets `densite: aeree`.

## À compléter

- `_config.yml` : les liens de tes réseaux (`reseaux`).
- `mentions-legales.md` : les champs `[À COMPLÉTER]`.
