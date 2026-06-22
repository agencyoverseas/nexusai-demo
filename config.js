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
  cal: "https://cal.com/nexusaiagency.fwi/audit-decouverte",

  /* --- WEBHOOK "APPELEZ-MOI" (n8n) --------------------- */
  relay: "https://nexusaiagencyfwi.app.n8n.cloud/webhook/appelle-moi",

  /* --- LIENS DE PAIEMENT STRIPE ------------------------ */
  stripe: {
    starter: "REMPLACER_LIEN_STARTER",
    pro:     "REMPLACER_LIEN_PRO"
  },

  /* --- CONTACT (footer) -------------------------------- */
  contact: {
    email: "hello@nexusai-agency.fr"
  },

  /* --- PRIX & FORMULES (page Offres) ------------------- */
  /* Change un prix ici -> il change sur toutes les pages.  */
  packs: {
    starter: {
      price:   "149 €",
      period:  "/ mois",
      install: "+ 490 € d'installation",
      frac:    "ou 4 × 123 €/mois pendant 4 mois"
    },
    pro: {
      price:   "299 €",
      period:  "/ mois",
      install: "+ 990 € d'installation",
      frac:    "ou 4 × 248 €/mois pendant 4 mois"
    },
    scale: {
      price:   "499 €",
      period:  "/ mois",
      install: "+ 1 900 € d'installation fixe",
      frac:    ""
    }
  }

};
