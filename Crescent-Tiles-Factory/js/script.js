
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const backTop = document.querySelector("#backToTop");
  if (backTop) {
    const toggleTop = () => backTop.classList.toggle("show", window.scrollY > 350);
    toggleTop();
    window.addEventListener("scroll", toggleTop, {passive:true});
    backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
  }

  const form = document.querySelector("#quoteForm");
  if (form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const alertBox = document.querySelector("#formAlert");
      if (alertBox) {
        alertBox.classList.remove("d-none");
        alertBox.innerHTML = "<strong>Thank you.</strong> Your enquiry has been prepared. Please contact <a href='mailto:sales@crescenttile.ae'>sales@crescenttile.ae</a> to complete your request.";
        alertBox.scrollIntoView({behavior:"smooth", block:"center"});
      }
    });
  }

  // Close Bootstrap mobile navigation after a link is selected.
  document.querySelectorAll(".navbar-nav .nav-link:not(.dropdown-toggle)").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.querySelector(".navbar-collapse.show");
      if (nav && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });
});
