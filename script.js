// Animate elements on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initial page fade in
    gsap.from('.container', {
        duration: 0.8,
        opacity: 0,
        ease: 'power2.out'
    });

    // Header animation
    gsap.from('header', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power3.out'
    });

    // Project cards stagger animation
    gsap.from('.project-card', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Add hover effect to project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.02,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                boxShadow: 'none'
            });
        });
    });

    // Skill tags animation
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            gsap.to(tag, {
                duration: 0.2,
                scale: 1.1,
                backgroundColor: '#2a2a2a',
                color: '#ffffff'
            });
        });

        tag.addEventListener('mouseleave', () => {
            gsap.to(tag, {
                duration: 0.2,
                scale: 1,
                backgroundColor: '#233554',
                color: '#8892b0'
            });
        });
    });

    // Project cards hover animation
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -10,
                boxShadow: '0 5px 15px rgba(100, 255, 218, 0.2)',
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: 'none',
                ease: 'power2.out'
            });
        });
    });

    // Simple scale animation for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            gsap.to(tag, {
                duration: 0.2,
                scale: 1.1,
                color: '#64ffda'
            });
        });

        tag.addEventListener('mouseleave', () => {
            gsap.to(tag, {
                duration: 0.2,
                scale: 1,
                color: '#8892b0'
            });
        });
    });

    // Project cards hover effect
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.2,
                y: -5,
                boxShadow: '0 4px 8px rgba(100, 255, 218, 0.15)',
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.2,
                y: 0,
                boxShadow: 'none',
                ease: 'power2.out'
            });
        });
    });

    // Skill tags subtle highlight
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            gsap.to(tag, {
                duration: 0.2,
                backgroundColor: '#1a4163',
                ease: 'power1.out'
            });
        });

        tag.addEventListener('mouseleave', () => {
            gsap.to(tag, {
                duration: 0.2,
                backgroundColor: '#233554',
                ease: 'power1.out'
            });
        });
    });

    // Project cards interaction
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('img'), {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('img'), {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
});