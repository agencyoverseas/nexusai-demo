/* =========================================================
   NEXUSAI — FICHIER DE CONFIGURATION
   ---------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER.
   Tu changes une valeur ici -> tu enregistres -> tu recharges
   la page (F5 / Ctrl+R) -> tout se met à jour sur toutes les
   pages (offres.html, faq.html). Tu ne touches JAMAIS au HTML.
   ========================================================= */

window.NEXUS_CONFIG = {

  /* --- LIEN "RÉSERVER UN AUDIT" ------------------------ */
  /* Ouvert par TOUS les boutons "Réserver un audit".      */
  /* Par défaut = ton funnel d'audit. Mets ton lien Cal.com */
  /* ici si tu préfères envoyer direct vers l'agenda.       */
  cal: "https://audit.vitrineai.fr/",

  /* --- WEBHOOK "APPELEZ-MOI" (n8n) --------------------- */
  /* Reçoit les demandes de rappel du formulaire landing.   */
  relay: "https://nexusaiagencyfwi.app.n8n.cloud/webhook/appelle-moi",

  /* --- LIENS DE PAIEMENT STRIPE ------------------------ */
  /* Colle ici les 2 liens générés par stripe-setup.mjs.   */
  stripe: {
    starter: "REMPLACER_LIEN_STARTER",
    pro:     "REMPLACER_LIEN_PRO"
  },

  /* --- CONTACT (footer) -------------------------------- */
  contact: {
    email: "hello@nexusai-agency.fr"
  },

  /* --- PRIX & FORMULES (page Offres) ------------------- */
  /* Change un prix ici, il change sur la page.            */
  packs: {
    starter: { price: "129 €",     period: "/ mois", install: "+ 390 € d'installation" },
    pro:     { price: "249 €",     period: "/ mois", install: "+ 790 € d'installation" },
    scale:   { price: "dès 449 €", period: "/ mois", install: "installation dès 1 500 €" }
  }

};
