 document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            const successAlert = document.getElementById('successAlert');
            
            // Form validation and submission
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                // Validate form
                if (!contactForm.checkValidity()) {
                    contactForm.classList.add('was-validated');
                    return;
                }
                
                // Get form data
                const formData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value || 'Not provided',
                    company: document.getElementById('company').value || 'Not provided',
                    subject: document.getElementById('subject').value,
                    budget: document.getElementById('budget').value || 'Not specified',
                    message: document.getElementById('message').value,
                    newsletter: document.getElementById('newsletter').checked,
                    timestamp: new Date().toISOString()
                };
                
                // In a real application, you would send this data to your server
                // For demo purposes, we'll just show a success message
                
                // Show success message
                successAlert.classList.remove('d-none');
                
                // Reset form
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                
                // Scroll to success message
                successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Hide success message after 10 seconds
                setTimeout(() => {
                    successAlert.classList.add('d-none');
                }, 10000);
                
                // Log form data to console (for debugging)
                console.log('Form submitted:', formData);
            });
            
            // Character counter for message field
            const messageField = document.getElementById('message');
            const messageCounter = document.createElement('div');
            messageCounter.className = 'form-text text-end mt-1';
            messageCounter.innerHTML = '<span id="charCount">0</span>/1000 characters';
            messageField.parentNode.appendChild(messageCounter);
            
            messageField.addEventListener('input', function() {
                const charCount = this.value.length;
                document.getElementById('charCount').textContent = charCount;
                
                if (charCount > 1000) {
                    this.value = this.value.substring(0, 1000);
                    document.getElementById('charCount').textContent = 1000;
                }
            });
            
            // Initialize character count
            document.getElementById('charCount').textContent = messageField.value.length;
            
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
        });