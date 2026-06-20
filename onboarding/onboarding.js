(function () {
  "use strict";

  var TOTAL_STEPS = 4;
  var current = 1;
  var data = { name: "", role: "", interests: [] };

  var steps = document.querySelectorAll(".step");
  var progressBar = document.getElementById("progressBar");
  var progressLabel = document.getElementById("progressLabel");
  var backBtn = document.getElementById("backBtn");
  var nextBtn = document.getElementById("nextBtn");
  var skipBtn = document.getElementById("skipBtn");
  var profileForm = document.getElementById("profileForm");
  var interests = document.getElementById("interests");
  var summary = document.getElementById("summary");

  function render() {
    steps.forEach(function (step) {
      step.classList.toggle("is-active", Number(step.dataset.step) === current);
    });

    progressBar.style.width = (current / TOTAL_STEPS) * 100 + "%";
    progressLabel.textContent = "Paso " + current + " de " + TOTAL_STEPS;

    backBtn.disabled = current === 1;
    nextBtn.textContent = current === TOTAL_STEPS ? "Empezar" : "Continuar";

    if (current === TOTAL_STEPS) {
      buildSummary();
    }
  }

  function collectProfile() {
    if (!profileForm) return;
    var fd = new FormData(profileForm);
    data.name = (fd.get("name") || "").toString().trim();
    data.role = (fd.get("role") || "").toString();
  }

  function buildSummary() {
    summary.innerHTML = "";
    var rows = [
      ["Nombre", data.name || "—"],
      ["Rol", data.role || "—"],
      ["Intereses", data.interests.length ? data.interests.join(", ") : "—"]
    ];
    rows.forEach(function (row) {
      var li = document.createElement("li");
      li.innerHTML = "<b>" + row[0] + ":</b> " + escapeHtml(row[1]);
      summary.appendChild(li);
    });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function finish() {
    // Persist locally so a real app can pick it up later.
    try {
      localStorage.setItem("skillspack:onboarding", JSON.stringify(data));
    } catch (e) {}
    nextBtn.textContent = "¡Bienvenido! 🎉";
    nextBtn.disabled = true;
  }

  nextBtn.addEventListener("click", function () {
    if (current === 2) collectProfile();
    if (current === TOTAL_STEPS) {
      finish();
      return;
    }
    current = Math.min(current + 1, TOTAL_STEPS);
    render();
  });

  backBtn.addEventListener("click", function () {
    current = Math.max(current - 1, 1);
    render();
  });

  skipBtn.addEventListener("click", function () {
    current = TOTAL_STEPS;
    collectProfile();
    render();
  });

  interests.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    chip.classList.toggle("is-selected");
    var label = chip.textContent.trim();
    var idx = data.interests.indexOf(label);
    if (idx === -1) data.interests.push(label);
    else data.interests.splice(idx, 1);
  });

  render();
})();
