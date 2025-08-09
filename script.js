// Dark Mode Toggle
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeToggle.innerHTML = '🌙 Dark Mode';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '☀️ Light Mode';
  }
}

// Project Filtering
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-item');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Remove active class from all buttons
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked button
  event.target.classList.add('active');
  
  projects.forEach(project => {
    if (category === 'all') {
      project.style.display = 'block';
      project.style.animation = 'fadeIn 0.5s ease-out';
    } else {
      const categories = project.getAttribute('data-category').split(' ');
      if (categories.includes(category)) {
        project.style.display = 'block';
        project.style.animation = 'fadeIn 0.5s ease-out';
      } else {
        project.style.display = 'none';
      }
    }
  });
}

// Lazy Loading for Images
function lazyLoadImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => img.classList.add('loaded'));
  }
}

// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Success message (in a real application, you would send this to a server)
      alert('Thank you for your message! I\'ll get back to you soon.');
      this.reset();
    });
  }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Initialize features when page loads
document.addEventListener('DOMContentLoaded', function() {
  lazyLoadImages();
  
  // Add staggered animation delays to sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Add staggered animation delays to skill items
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});