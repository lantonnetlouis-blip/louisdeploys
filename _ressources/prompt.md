---
# Mot-clé commenté : PROMPT  ->  adresse /prompt/
titre: Le prompt qui cadre ton app avant de coder
description: Le prompt qui t'interviewe comme un product manager et sort le cahier des charges de ta V1.
fichier: PROMPT.TXT
type: Prompt
infos:
  - Créer une app
duree:             # facultatif, ex. 10 min
intro: Avant d'écrire la moindre ligne de code, laisse l'IA t'interviewer. Tu repars avec le cahier des charges de ta V1.
tiktok:            # colle ici le lien de la vidéo (facultatif)
bouton: Copier le prompt
prompt: |
  Tu es un product manager senior doublé d'un développeur expérimenté. Je veux créer une application, mais avant d'écrire la moindre ligne de code, tu vas m'interviewer pour clarifier le projet.

  Règles :
  - Pose-moi UNE seule question à la fois et attends ma réponse.
  - Commence par le problème et l'utilisateur, pas par les fonctionnalités.
  - Couvre au minimum : l'utilisateur cible, le problème exact, le parcours principal étape par étape, les données à stocker, qui a le droit de voir ou modifier quoi, les comptes et la connexion, les paiements s'il y en a, les cas d'erreur, et ce qui est hors périmètre pour la V1.
  - Si une réponse est floue ou contradictoire, dis-le et repose la question.
  - Si une idée te paraît mauvaise ou trop ambitieuse pour une V1, dis-le franchement.
  - Ne propose AUCUN code tant que je n'ai pas validé le cahier des charges.

  Quand tu as assez d'informations, rédige un cahier des charges V1 : résumé en 2 phrases, utilisateurs, parcours principal, fonctionnalités V1 (et ce qui attend la V2), modèle de données, règles d'accès et de sécurité, stack recommandée avec justification, questions encore ouvertes.
etapes:
  - Copie le prompt avec le bouton orange.
  - Colle-le dans Claude ou ChatGPT, puis décris ton idée d'app en une phrase.
  - Réponds à ses questions une par une. Si tu ne sais pas, dis-le.
  - Relis le cahier des charges, corrige-le, puis donne-le à ton outil de code pour lancer la V1.
astuce: Garde le cahier des charges dans un fichier. Redonne-le à l'IA au début de chaque session de code, elle restera alignée sur ta V1.
---
