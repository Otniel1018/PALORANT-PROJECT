document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
    const slideCount = slides.length;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        
        document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
    }
    
    function autoSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }
    
    let slideInterval = setInterval(autoSlide, 5000);
    
    // Klik dot untuk navigasi manual
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            clearInterval(slideInterval);
            currentSlide = i;
            showSlide(currentSlide);
            slideInterval = setInterval(autoSlide, 5000);
        });
    });

    const btn = document.querySelectorAll(".btn-play");
    const title = document.querySelectorAll(".title");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });
    
    btn.forEach(card => observer.observe(card));
    title.forEach(card => observer.observe(card));

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-link');
    const backdrop = document.createElement('div');
    backdrop.classList.add('menu-backdrop');
    document.body.appendChild(backdrop);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        backdrop.classList.toggle('active');
        
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    backdrop.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
    });

    document.querySelectorAll('.nav-link a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
});