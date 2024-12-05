document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('a');

  console.log(sections)
  console.log(navLinks);

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.2 // Trigger when 60% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      const navLink = document.querySelector(`a[data-section="${sectionId}"]`);
      console.log(sectionId)
      console.log(navLink)

      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');

      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
});
