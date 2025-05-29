// Back to Top Button
window.addEventListener('scroll', function() {
    var backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to cards on hover
document.querySelectorAll('.game-card, .accessory-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('animate__animated', 'animate__pulse');
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('animate__animated', 'animate__pulse');
    });
});

// Form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
});

// Shopping cart functionality
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.card').querySelector('.card-title').textContent;
        alert(`¡${product} ha sido añadido al carrito!`);
    });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});