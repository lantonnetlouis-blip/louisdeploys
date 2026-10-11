# Louis Deploys · Ressources

Ce dépôt contient le site où je partage gratuitement les ressources citées dans mes vidéos : prompts, guides, modèles… autour de l'IA, du code et du business.

**Site** : [adresse à venir]

## Comment récupérer une ressource

Le site n'a pas de catalogue : chaque ressource a sa propre page, et on y accède par un lien reçu en message privé.

1. **Regarde la vidéo.** À un moment, je dis par exemple : « Commente PROMPT et je te l'envoie. »
2. **Commente le mot-clé** sous la vidéo, sur TikTok ou Instagram.
3. **Ouvre tes DM.** Un message automatique t'envoie le lien de la ressource dans les secondes qui suivent.
4. **Ouvre la page et récupère la ressource**, en général avec un gros bouton orange « Copier ».

Tu n'as rien reçu ? Vérifie tes demandes de messages (les DM de comptes que tu ne suis pas y atterrissent parfois), ou recommente le mot-clé.

### Pourquoi passer par un commentaire ?

Parce que ça m'aide : chaque commentaire fait remonter la vidéo, et me montre quelles ressources t'intéressent vraiment. En échange, tout est gratuit, sans inscription ni adresse email.

## Ce que le site ne fait pas

- Il ne collecte aucune donnée : pas de compte, pas de formulaire, pas de cookie, pas de mesure d'audience.
- Il ne te demande jamais de payer pour une ressource.

## Comment il est fait

Pour les curieux :

- **Jekyll + GitHub Pages** : un site statique, construit et hébergé gratuitement par GitHub à chaque modification du dépôt.
- **Une ressource = un fichier** dans le dossier [`_ressources/`](_ressources/). Le nom du fichier donne l'adresse de la page : `prompt.md` devient `/prompt/`.
- **Un seul gabarit** ([`_layouts/ressource.html`](_layouts/ressource.html)) met en forme toutes les ressources.
- **Une automatisation de DM** associe chaque mot-clé commenté au lien de sa page.
- **Aucune dépendance JavaScript** : quelques lignes de JS natif pour la copie et les animations ([`assets/js/site.js`](assets/js/site.js)).
- **Le design**, façon système d'exploitation des années 2000, tient dans une seule feuille de style ([`assets/css/site.css`](assets/css/site.css)).

```
_config.yml          réglages du site
_layouts/            gabarits des pages
_ressources/         une ressource par fichier
assets/              styles, scripts, images
index.html           page d'accueil
```

Il y a aussi un easter egg sur la page d'accueil. Je ne dirai pas où.

## Réutilisation

Les textes, les prompts et le design appartiennent à Louis Deploys. Tu peux utiliser les ressources pour toi, perso ou pro. Pour republier ou réutiliser autre chose, écris-moi en DM sur mes réseaux.
