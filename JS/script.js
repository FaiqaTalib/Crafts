document.addEventListener('DOMContentLoaded', function() {
  
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  
  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('active');
    });
  }
    document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        // External page
        window.location.href = this.getAttribute('href');
      }
      // Close mobile menu
      if (navUl) navUl.classList.remove('active');
    });
  });
    const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  if (slider && slides.length > 1) {
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    setInterval(nextSlide, 5000); // Auto 5s
  }
    const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;
      
      if (name && email && message) {
        alert(`Thank you ${name}! Your inquiry has been sent to Venus Handicrafts. We'll respond soon.`);
        contactForm.reset();
      } else {
        alert('Please fill all fields.');
      }
    });
  }
  
});
