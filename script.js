/* ==========================
   BSO PKM CENTER - ANIMASI SCROLL
   ========================== */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".section-heading, .about-content, .vision-card, " +
    ".mission-block, .person-card, .program-card"
  );

  // Jika browser tidak mendukung IntersectionObserver,
  // tampilkan elemen tanpa animasi scroll.
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element) => element.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
});
