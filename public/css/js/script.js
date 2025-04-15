document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header .container');
    if (header) {
        header.prepend(mobileMenuBtn);
        
        const nav = document.querySelector('nav');
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]');
            const email = this.querySelector('input[name="email"]');
            const message = this.querySelector('textarea[name="message"]');
            
            if (!name.value.trim()) {
                e.preventDefault();
                alert('Please enter your name');
                name.focus();
                return;
            }
            
            if (!email.value.trim() || !email.value.includes('@')) {
                e.preventDefault();
                alert('Please enter a valid email');
                email.focus();
                return;
            }
            
            if (!message.value.trim()) {
                e.preventDefault();
                alert('Please enter your message');
                message.focus();
                return;
            }
            
            // In a real app, you would send the form data to the server here
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            e.preventDefault();
        });
    }
});