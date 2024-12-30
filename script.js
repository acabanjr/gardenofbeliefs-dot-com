// Content Sections Slide Effect
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  sections.forEach((section) => observer.observe(section));
});