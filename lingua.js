// Italiano per chi ha il browser in italiano, inglese per gli altri; la scelta si ricorda.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("lingua"); } catch (e) {}
  var lang = saved || ((navigator.language || "it").toLowerCase().indexOf("it") === 0 ? "it" : "en");
  var root = document.documentElement;
  root.classList.add("scelta");
  function apply(value) {
    root.classList.toggle("en", value === "en");
    root.lang = value;
  }
  apply(lang);
  document.addEventListener("click", function (event) {
    var button = event.target.closest && event.target.closest("[data-lingua]");
    if (!button) return;
    lang = button.getAttribute("data-lingua");
    apply(lang);
    try { localStorage.setItem("lingua", lang); } catch (e) {}
  });
})();
