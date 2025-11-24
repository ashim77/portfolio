// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});


// Typing Effect for Hero Section
const texts = ["Web Developer", "Full Site Editor", "Wordpress Theme Developer", "Wordpress Plugin Developers", "Problem Solver"];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isErasing = false;
const typingElement = document.getElementById('typed-text');

function type() {
    const text = texts[currentTextIndex];
    
    if (isErasing) {
        currentCharIndex--;
        typingElement.textContent = text.substring(0, currentCharIndex);
    } else {
        currentCharIndex++;
        typingElement.textContent = text.substring(0, currentCharIndex);
    }
    
    if (!isErasing && currentCharIndex === text.length) {
        isErasing = true;
        setTimeout(type, 2000);
    } else if (isErasing && currentCharIndex === 0) {
        isErasing = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length; 
        setTimeout(type, 500);
    } else {
        const speed = isErasing ? 50 : 100;
        setTimeout(type, speed);
    }
}

type();

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-bar');

skillBars.forEach(bar => {
    bar.style.width = '0%';
    bar.style.transition = 'width 1.5s ease-in-out';
});

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const percentage = bar.getAttribute('data-progress');
            bar.style.width = percentage + '%';
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});


// Contact Form Submission
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userSubject = document.getElementById('subject').value;
    const userMessage = document.getElementById('message').value;
    
    message.classList.remove('hidden');
    message.className = 'mt-4 text-center p-4 bg-green-100 text-green-700 rounded-lg';
    message.textContent = 'Thank you for your message! I will get back to you soon.';
    
    form.reset();
    
    setTimeout(() => {
        message.classList.add('hidden');
    }, 5000);
});


// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});