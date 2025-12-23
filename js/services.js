 // FAQ toggle functionality
  function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    } else {
      answer.style.display = 'none';
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    }
  }

  // Initialize all FAQ answers as hidden
  document.addEventListener('DOMContentLoaded', function() {
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(answer => {
      answer.style.display = 'none';
    });
  });