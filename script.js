(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  function wireForm(formId, successId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const success = document.getElementById(successId);
      if (successId === "offerSuccess") {
        form.hidden = true;
        if (success) success.hidden = false;
      } else {
        form.reset();
        if (success) {
          success.hidden = false;
          setTimeout(() => (success.hidden = true), 6000);
        }
      }
    });
  }

  wireForm("offerForm", "offerSuccess");
  wireForm("contactForm", "contactSuccess");
})();
