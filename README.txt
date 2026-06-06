NEXUSAI — SITE (mode d'emploi)
==============================

CONTENU DU DOSSIER
- index.html ........ page d'accueil (landing)
- offres.html ....... les 3 formules
- faq.html .......... questions fréquentes
- support.html ...... formulaire de support
- config.js ......... >>> LE SEUL FICHIER À MODIFIER <<<
- apply-config.js ... moteur (ne pas toucher)

REGLE D'OR
Tu ne touches JAMAIS au HTML. Tu ouvres config.js, tu changes
une valeur, tu enregistres, tu RECHARGES la page (F5 / Ctrl+R).
Tout se met à jour sur toutes les pages.

CE QUE config.js PILOTE
- cal ............... lien des boutons "Réserver un audit"
                      (par défaut : ton funnel audit.vitrineai.fr)
- relay ............. webhook n8n du formulaire "Appelez-moi"
- stripe.starter .... lien de paiement Starter   (à coller)
- stripe.pro ........ lien de paiement Pro        (à coller)
- contact.email / phone / phoneDisplay  ... pied de page
- packs ............. prix des 3 formules

MISE EN LIGNE
Upload les 6 fichiers ENSEMBLE, dans le MÊME dossier
(GitHub Pages, Netlify, Vercel...). Si config.js n'est pas
à côté des pages, le pilotage ne marche pas.

A FAIRE AVANT DE PUBLIER
1. Générer les 2 liens Stripe (script stripe-setup.mjs) et les
   coller dans config.js -> stripe.starter / stripe.pro.
2. Vérifier cal / relay / contact dans config.js.
