/* =========================================================
   NEXUSAI — APPLICATION DE LA CONFIG (ne pas modifier)
   ---------------------------------------------------------
   Lit window.NEXUS_CONFIG et remplit la page automatiquement
   au chargement. Marche en local (file://) et en ligne.
   Attributs reconnus dans le HTML :
     data-cfg-link="cal"            -> href = config.cal
     data-cfg-mailto="contact.email"-> href = mailto:<valeur>
     data-cfg-tel="contact.phone"   -> href = tel:<valeur>
     data-cfg-text="packs.pro.price"-> texte = <valeur>
   ========================================================= */
(function () {
  var C = window.NEXUS_CONFIG || {};

  function get(path) {
    return path.split(".").reduce(function (o, k) {
      return (o && o[k] != null) ? o[k] : undefined;
    }, C);
  }

  function apply() {
    document.querySelectorAll("[data-cfg-link]").forEach(function (el) {
      var v = get(el.getAttribute("data-cfg-link"));
      if (v) el.setAttribute("href", v);
    });
    document.querySelectorAll("[data-cfg-mailto]").forEach(function (el) {
      var v = get(el.getAttribute("data-cfg-mailto"));
      if (v) {
        el.setAttribute("href", "mailto:" + v);
        if (!el.hasAttribute("data-cfg-text")) el.textContent = v;
      }
    });
    document.querySelectorAll("[data-cfg-tel]").forEach(function (el) {
      var v = get(el.getAttribute("data-cfg-tel"));
      if (v) el.setAttribute("href", "tel:" + v);
    });
    document.querySelectorAll("[data-cfg-text]").forEach(function (el) {
      var v = get(el.getAttribute("data-cfg-text"));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-cfg-warn]").forEach(function (el) {
      var v = get(el.getAttribute("data-cfg-warn"));
      if (typeof v === "string" && v.indexOf("REMPLACER_") === 0) el.style.display = "block";
    });
  }

  if (document.readyState !== "loading") apply();
  else document.addEventListener("DOMContentLoaded", apply);
})();
