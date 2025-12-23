 document.addEventListener('DOMContentLoaded', function() {
    // Counter animation for stats
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; // The lower the slower
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-count'));
        const count = parseInt(counter.innerText.replace('+', '').replace('%', ''));
        const increment = Math.ceil(target / speed);
        
        if (count < target) {
          counter.innerText = count + increment + (counter.getAttribute('data-count').includes('+') ? '+' : 
                                counter.getAttribute('data-count').includes('%') ? '%' : '');
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target + (counter.getAttribute('data-count').includes('+') ? '+' : 
                               counter.getAttribute('data-count').includes('%') ? '%' : '');
        }
      };
      
      // Start counting when element is in viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
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
    
    // Auto-rotate hero carousel
    const heroCarousel = document.getElementById('heroCarousel');
    if (heroCarousel) {
      const carousel = new bootstrap.Carousel(heroCarousel, {
        interval: 5000,
        wrap: true
      });
    }
  });