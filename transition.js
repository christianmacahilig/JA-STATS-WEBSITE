document.addEventListener("DOMContentLoaded", () => {
  // Fade in on load
  document.body.classList.add("page-loaded");

  // Intercept internal link clicks
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    // Ignore external links, anchors, mailto
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("mailto")
    ) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.remove("page-loaded");

      setTimeout(() => {
        window.location.href = href;
      }, 350);
    });
  });
});
